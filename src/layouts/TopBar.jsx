import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="hidden bg-[#252B42] text-white lg:block">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 text-sm">

        {/* Left */}
        <div className="flex items-center gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>(225) 555-0118</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center */}
        <p className="font-semibold">
          Follow Us and get a chance to win 80% off
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">

          <span className="font-semibold">
            Follow Us :
          </span>

          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />

          <div className="ml-6 flex items-center gap-2 font-semibold cursor-pointer">
            <FaUser />
            <span>Login / Register</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TopBar;