import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div
        className="flex h-[86px] w-full items-center justify-between"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >

        {/* Logo */}
        <h1 className="text-[24px] font-bold text-[#252B42]">
          Bandage
        </h1>

        {/* Menü */}
        <ul className="hidden lg:flex items-center gap-10 text-[15px] font-semibold text-[#252B42]">
          <li className="cursor-pointer hover:text-[#23A6F0]">
            Home
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-[#23A6F0]">
            Shop
            <FaChevronDown size={10} />
          </li>

          <li className="cursor-pointer hover:text-[#23A6F0]">
            About
          </li>

          <li className="cursor-pointer hover:text-[#23A6F0]">
            Contact
          </li>

          <li className="cursor-pointer hover:text-[#23A6F0]">
            Pages
          </li>
        </ul>

        {/* Sağ ikonlar */}
        <div className="flex items-center gap-6 text-[#23A6F0]">

          <FaUser
            size={18}
            className="cursor-pointer"
          />

          <FaSearch
            size={19}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-1 cursor-pointer">
            <FaShoppingCart size={19} />
            <span className="text-sm">1</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FaHeart size={19} />
            <span className="text-sm">1</span>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;