const MenPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">
      <div>
        <h2 className="text-base font-semibold mb-2">New Arrivals</h2>
        <ul>
          <li className="hover:underline cursor-pointer">T-Shirts</li>
          <li className="hover:underline cursor-pointer">Shorts</li>
          <li className="hover:underline cursor-pointer">Sneakers</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-2">Clothing</h2>
        <ul>
          <li className="hover:underline cursor-pointer">Jackets</li>
          <li className="hover:underline cursor-pointer">Jeans</li>
          <li className="hover:underline cursor-pointer">Sweatshirts</li>
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-2">Accessories</h2>
        <ul>
          <li className="hover:underline cursor-pointer">Hats</li>
          <li className="hover:underline cursor-pointer">Backpacks</li>
          <li className="hover:underline cursor-pointer">Sunglasses</li>
        </ul>
      </div>
    </div>
  );
};

export default MenPanel;
