import Header from "../layouts/Header";
import Logos from "../layouts/Logos";
import Footer from "../layouts/Footer";
import "./ContactPage.css";

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
                CONTACT US
              </button>
            </div>

          </div>
        </section>

        {/* LOCATIONS */}
        <section className="contact-locations">
          <div className="contact-container">

            <h2>Get In Touch</h2>

            <div className="locations-grid">

              <div className="location-card">
                <h3>Paris</h3>
                <p>1901 Thorn ridge Cir.</p>
                <p>75000 Paris</p>
                <p>Phone: +451 215 215</p>
                <p>Fax: +451 215 215</p>
              </div>

              <div className="location-card">
                <h3>New York</h3>
                <p>2715 Ash Dr. San Jose.</p>
                <p>75000 Paris</p>
                <p>Phone: +451 215 215</p>
                <p>Fax: +451 215 215</p>
              </div>

              <div className="location-card">
                <h3>Berlin</h3>
                <p>4140 Parker Rd.</p>
                <p>75000 Paris</p>
                <p>Phone: +451 215 215</p>
                <p>Fax: +451 215 215</p>
              </div>

              <div className="location-card">
                <h3>London</h3>
                <p>3517 W. Gray St. Utica.</p>
                <p>75000 Paris</p>
                <p>Phone: +451 215 215</p>
                <p>Fax: +451 215 215</p>
              </div>

            </div>

          </div>
        </section>

        {/* SOCIAL */}
        <section className="contact-social">
          <div className="contact-container">

            <h2>Follow Us</h2>

            <div className="social-icons">
              <span>♥</span>
              <span>f</span>
              <span>◎</span>
              <span>in</span>
            </div>

          </div>
        </section>

      </main>

      <Logos />
      <Footer />
    </>
  );
}

export default ContactPage;