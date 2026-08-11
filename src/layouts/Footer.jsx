import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        color: "#252B42",
      }}
    >
      {/* ================= ÜST FOOTER ================= */}
      <div
        style={{
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <div
          style={{
            width: "calc(100% - 40px)",
            maxWidth: "1045px",
            margin: "0 auto",
            height: "85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* BANDAGE */}
          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              lineHeight: "28px",
              fontWeight: 700,
              color: "#252B42",
            }}
          >
            Bandage
          </h2>

          {/* SOSYAL İKONLAR */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#23A6F0",
            }}
          >
            <FaFacebook
              size={18}
              style={{ cursor: "pointer" }}
            />

            <FaInstagram
              size={18}
              style={{ cursor: "pointer" }}
            />

            <FaTwitter
              size={18}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* ================= ORTA FOOTER ================= */}
      <div>
        <div
          style={{
            width: "calc(100% - 40px)",
            maxWidth: "1045px",
            margin: "0 auto",
            padding: "32px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr",
            columnGap: "30px",
          }}
        >
          {/* COMPANY INFO */}
          <div>
            <h3 className="footer-title">
              Company Info
            </h3>

            <div className="footer-links">
              <span>About Us</span>
              <span>Carrier</span>
              <span>We are hiring</span>
              <span>Blog</span>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="footer-title">
              Legal
            </h3>

            <div className="footer-links">
              <span>About Us</span>
              <span>Carrier</span>
              <span>We are hiring</span>
              <span>Blog</span>
            </div>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="footer-title">
              Features
            </h3>

            <div className="footer-links">
              <span>Business Marketing</span>
              <span>User Analytic</span>
              <span>Live Chat</span>
              <span>Unlimited Support</span>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="footer-title">
              Resources
            </h3>

            <div className="footer-links">
              <span>IOS & Android</span>
              <span>Watch a Demo</span>
              <span>Customers</span>
              <span>API</span>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="footer-title">
              Get In Touch
            </h3>

            <div
              style={{
                display: "flex",
                width: "100%",
                height: "38px",
              }}
            >
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: "1px solid #E6E6E6",
                  padding: "0 12px",
                  fontSize: "10px",
                  outline: "none",
                }}
              />

              <button
                style={{
                  width: "70px",
                  border: "none",
                  backgroundColor: "#23A6F0",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>

            <p
              style={{
                margin: "8px 0 0",
                color: "#737373",
                fontSize: "9px",
              }}
            >
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* ================= EN ALT ================= */}
      <div
        style={{
          backgroundColor: "#FAFAFA",
        }}
      >
        <div
          style={{
            width: "calc(100% - 40px)",
            maxWidth: "1045px",
            margin: "0 auto",
            height: "55px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#737373",
              fontSize: "10px",
              fontWeight: 600,
            }}
          >
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;