import { FaBars, FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#252B42]">
          Bandage
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm font-semibold text-gray-600 lg:flex">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-[#23A6F0]">
  Shop
  <FaChevronDown size={10} />
</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
          <li className="cursor-pointer hover:text-blue-500">Pages</li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-[#23A6F0]">

    <FaUser />

    <FaSearch />

    <div className="flex items-center gap-1">
        <FaShoppingCart />
        <span>1</span>
    </div>

    <div className="flex items-center gap-1">
        <FaHeart />
        <span>1</span>
    </div>

</div>

        {/* Mobile */}
        <button className="text-2xl lg:hidden">
          <FaBars />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;