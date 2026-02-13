import os
import subprocess
import sys
import time
import uuid
import shutil
import atexit
from termcolor import colored as c

# ====== CONFIG ======
VERSION = "1.3.0"

BUILD_TREE_BASE = "~/.build-temp-react"
DEPLOY_TREE_BASE = "~/.gh-pages-temp-react"

DEBUG = False
# ====================


def abspath(p: str) -> str:
    return os.path.abspath(os.path.expanduser(p))


def sh(cmd: str, critical: bool = False, quiet: bool = True):
    if DEBUG:
        quiet = False

    if not quiet:
        print(c(f"> {cmd}", "cyan"))
        code = os.system(cmd)
    else:
        code = os.system(f"{cmd} > /dev/null 2>&1")

    if critical and code != 0:
        print(c(f"❌ Failed: {cmd}", "red"))
        if quiet:
            print(c("↳ Showing command output:", "yellow"))
            os.system(cmd)
        sys.exit(1)


def run_capture(cmd: str) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, shell=True, capture_output=True, text=True)


def get_branch() -> str:
    return run_capture("git branch --show-current").stdout.strip()


def repo_root() -> str:
    return run_capture("git rev-parse --show-toplevel").stdout.strip()


def assert_outside_repo(repo: str, candidate: str, label: str):
    repo = abspath(repo)
    candidate = abspath(candidate)

    if candidate == repo or candidate.startswith(repo + os.sep):
        print(c(f"❌ {label} must be OUTSIDE the repo.", "red"))
        print(c(f"   Repo: {repo}", "red"))
        print(c(f"   {label}: {candidate}", "red"))
        sys.exit(1)


def ensure(path: str, label: str):
    if not os.path.exists(path):
        print(c(f"❌ Missing {label}: {path}", "red"))
        sys.exit(1)


def rm_rf(path: str):
    path = abspath(path)

    if not os.path.exists(path):
        return

    try:
        shutil.rmtree(path)
    except Exception:
        sh(f"rm -rf '{path}'", critical=False, quiet=False)

    if os.path.exists(path):
        print(c(f"❌ Could not delete: {path}", "red"))
        print(c("Something is holding it open.", "yellow"))
        sys.exit(1)


def worktree_prune():
    sh("git worktree prune", critical=False)


def force_clean_worktree(path: str):
    path = abspath(path)
    sh(f"git worktree remove '{path}' --force", critical=False)
    worktree_prune()
    rm_rf(path)


def unique_temp_dir(base: str) -> str:
    base = abspath(base)
    suffix = f"{os.getpid()}-{int(time.time())}-{uuid.uuid4().hex[:8]}"
    return f"{base}-{suffix}"


def git_has_remote_branch(branch: str) -> bool:
    r = run_capture(f"git ls-remote --heads origin {branch}")
    return bool(r.stdout.strip())


def git_has_local_branch(branch: str) -> bool:
    r = run_capture(f"git show-ref --verify --quiet refs/heads/{branch}; echo $?")
    return r.stdout.strip() == "0"


def ensure_local_branch_from_remote(branch: str):
    if git_has_local_branch(branch):
        return
    if not git_has_remote_branch(branch):
        return

    sh(f"git fetch origin {branch}", critical=True)
    sh(f"git branch {branch} origin/{branch}", critical=False)


def ensure_deploy_worktree(dep: str):
    dep = abspath(dep)

    if os.path.exists(dep):
        print(c(f"❌ Deploy path already exists: {dep}", "red"))
        sys.exit(1)

    if git_has_remote_branch("gh-pages"):
        ensure_local_branch_from_remote("gh-pages")
        sh(f"git worktree add '{dep}' gh-pages", critical=True)
        return

    if git_has_local_branch("gh-pages"):
        sh(f"git worktree add '{dep}' gh-pages", critical=True)
        return

    sh(f"git worktree add --detach '{dep}'", critical=True)
    sh(f"cd '{dep}' && git switch --orphan gh-pages", critical=True)
    sh(f"cd '{dep}' && git rm -rf .", critical=False)


def deploy_verify_root(deploy_dir: str):
    required = [
        (os.path.join(deploy_dir, "index.html"), "index.html"),
        (os.path.join(deploy_dir, "assets"), "assets/"),
        (os.path.join(deploy_dir, ".nojekyll"), ".nojekyll"),
    ]

    for p, label in required:
        if not os.path.exists(p):
            print(c(f"❌ Deploy verification failed: missing {label}", "red"))
            sys.exit(1)


def main():
    branch = get_branch()

    if branch != "main":
        print(c(f"❌ Switch to 'main' before deploying (current: {branch})", "red"))
        sys.exit(1)

    root = repo_root()

    if not root:
        print(c("❌ Not inside a git repo.", "red"))
        sys.exit(1)

    BUILD = unique_temp_dir(BUILD_TREE_BASE)
    DEPLOY = unique_temp_dir(DEPLOY_TREE_BASE)

    assert_outside_repo(root, BUILD, "BUILD_TREE")
    assert_outside_repo(root, DEPLOY, "DEPLOY_TREE")

    def cleanup():
        for p in (BUILD, DEPLOY):
            try:
                force_clean_worktree(p)
            except:
                pass

    atexit.register(cleanup)

    msg = input("Commit message (main): ").strip() or "Update"

    print(c("• Committing source…", "cyan"))
    sh("git add .", critical=True)
    sh(f'git commit -m "{msg}" || true')
    sh("git push origin main", critical=True)

    print(c("• Preparing build tree…", "cyan"))
    force_clean_worktree(BUILD)
    sh(f"git worktree add --detach '{BUILD}'", critical=True)

    print(c("• Installing dependencies…", "cyan"))
    sh(f"cd '{BUILD}' && npm ci || npm install", critical=True)

    print(c("• Building project…", "cyan"))
    sh(f"cd '{BUILD}' && npm run build", critical=True, quiet=False)

    print(c("• Verifying build…", "cyan"))
    ensure(f"{BUILD}/dist", "dist directory")
    ensure(f"{BUILD}/dist/index.html", "index.html")
    ensure(f"{BUILD}/dist/assets", "assets")

    js_files = [f for f in os.listdir(f"{BUILD}/dist/assets") if f.endswith(".js")]

    if not js_files:
        print(c("❌ No JS bundle found.", "red"))
        sys.exit(1)

    sh(f"cp '{BUILD}/dist/index.html' '{BUILD}/dist/404.html'", critical=True)

    print(c("• Preparing deploy tree…", "cyan"))
    force_clean_worktree(DEPLOY)
    ensure_deploy_worktree(DEPLOY)

    sh(f"cd '{DEPLOY}' && git fetch origin gh-pages || true")
    sh(f"cd '{DEPLOY}' && git reset --hard origin/gh-pages || true")

    sh(f"find '{DEPLOY}' -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {{}} +", critical=True)

    print(c("• Copying build to deploy…", "cyan"))
    sh(f"cp -R '{BUILD}/dist/.' '{DEPLOY}/'", critical=True)

    sh(f"touch '{DEPLOY}/.nojekyll'", critical=True)

    deploy_verify_root(DEPLOY)

    sh(f"cd '{DEPLOY}' && git add .", critical=True)
    sh(f"cd '{DEPLOY}' && git commit -m 'Deploy' || true")
    sh(f"cd '{DEPLOY}' && git push origin gh-pages:gh-pages", critical=True)

    print(c("• Cleaning up…", "cyan"))
    force_clean_worktree(BUILD)
    force_clean_worktree(DEPLOY)

    print(c("✅ Deploy complete — GitHub Pages updated.", "green"))


if __name__ == "__main__":
    main()
