import { CancelIcon } from "../assets/svg/Cancel"; // Import MenuIcon

const SideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
      {/* Close Button Using MenuIcon */}
      <button onClick={() => setIsOpen(false)} className="absolute top-4 left-4 z-50">
        <CancelIcon />
      </button>

      <h2 className="text-xl font-bold mb-4 mt-12">Sidebar Menu</h2>
      <ul>
        <li className="mb-2">Home</li>
        <li className="mb-2">About</li>
        <li className="mb-2">Services</li>
        <li className="mb-2">Contact</li>
      </ul>
    </div>
  );
};

export default SideMenu;
