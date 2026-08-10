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
    <div className="bg-[#252B42] text-white">
      <div
        className="flex h-14 w-full items-center justify-between text-sm"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >

        {/* Sol taraf */}
        <div className="flex items-center gap-6 font-semibold">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={14} />
            <span>(225) 555-0118</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope size={14} />
            <span>a@example.com</span>
          </div>
        </div>

        {/* Orta */}
        <p className="font-semibold">
          Follow Us and get a chance to win 80% off
        </p>

        {/* Sağ taraf */}
        <div className="flex items-center gap-4">
          <span className="font-semibold">Follow Us :</span>

          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />

          <div className="flex items-center gap-2 ml-2 cursor-pointer font-semibold">
            <FaUser />
            <span className="cursor-pointer">Login / Register</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TopBar;