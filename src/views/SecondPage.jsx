import { useState } from 'react'

function SecondPage() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p className="text-purple-500 font-sans">SECOND PAGE</p>
      <div>
        <button onClick={incrementCount}
        className="mt-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-700">
          Count {count}
        </button>
      </div>
    </div>
  );
}

export default SecondPage;
