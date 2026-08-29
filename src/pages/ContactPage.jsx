import Header from "../layouts/Header";
import Logos from "../layouts/Logos";
import Footer from "../layouts/Footer";
import "./ContactPage.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">

        {/* CONTACT HERO */}
        <section className="contact-hero">
          <div className="contact-container">

            <div className="contact-hero-content">
              <h1>CONTACT US</h1>

              <p>
                Problems trying to resolve the conflict between the two
                major realms of Classical physics:
                Newtonian mechanics
              </p>

              <button className="contact-button">
                CONTACT OUR COMPANY
              </button>
            </div>

          </div>
        </section>

        

        {/* SOCIAL */}
        <section className="contact-social">
          <div className="contact-container">

            <h2>Follow Us</h2>
            <div className="social-icons">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>



          </div>
        </section>

      </main>

    
    </>
  );
}

export default ContactPage;