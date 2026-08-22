import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white">
      <div
        className="flex items-center justify-between px-6 lg:px-0"
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
          height: "58px",
        }}
      >
        {/* LOGO */}
        <h1 className="text-[24px] font-bold text-[#252B42]">
          Bandage
        </h1>

        {/* MENU */}
        <ul className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-[#737373]">
          <li className="cursor-pointer hover:text-[#23A6F0]">
  <Link to="/">Home</Link>
</li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-[#23A6F0]">
  <Link to="/shop" className="flex items-center gap-2">
    Shop
    <FaChevronDown size={10} />
  </Link>
</li>

          <li className="cursor-pointer hover:text-[#252B42]">
            About
          </li>

          <li className="cursor-pointer hover:text-[#252B42]">
            Blog
          </li>

          <li className="cursor-pointer hover:text-[#252B42]">
            Contact
          </li>

          <li className="cursor-pointer hover:text-[#252B42]">
            Pages
          </li>
        </ul>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-5 text-[#23A6F0]">

          {/* LOGIN / REGISTER */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser size={15} />

            <span className="text-[14px] font-semibold whitespace-nowrap">
              Login / Register
            </span>
          </div>

          {/* SEARCH */}
          <FaSearch
            size={17}
            className="cursor-pointer"
          />

          {/* CART */}
          <div className="flex items-center gap-1 cursor-pointer">
            <FaShoppingCart size={17} />
            <span className="text-[12px]">1</span>
          </div>

          {/* FAVORITES */}
          <div className="flex items-center gap-1 cursor-pointer">
            <FaHeart size={17} />
            <span className="text-[12px]">1</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;