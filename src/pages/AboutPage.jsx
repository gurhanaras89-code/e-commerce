import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Logos from "../layouts/Logos";
import Footer from "../layouts/Footer";
import "./AboutPage.css";

function AboutPage() {
  const team = [
    {
      image: "/src/assets/images/team1.png",
      name: "Jerome Bell",
      job: "IBM",
    },
    {
      image: "/src/assets/images/team2.png",
      name: "Brooklyn Simmons",
      job: "eBay",
    },
    {
      image: "/src/assets/images/team3.png",
      name: "Ronald Richards",
      job: "Starbucks",
    },
  ];

  return (
    <>
      <Header />

      <main className="about-page">

        {/* BREADCRUMB */}
        <div className="about-breadcrumb">
          <div className="about-container">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About</span>
          </div>
        </div>

        {/* HERO */}
        <section className="about-hero">
          <div className="about-container about-hero-inner">

            <div className="about-hero-content">
              <span className="about-label">ABOUT COMPANY</span>

              <h1>ABOUT US</h1>

              <p>
                We know how large objects will act,
                but things on a small scale.
              </p>

              <button>Get Quote Now</button>
            </div>

            <div className="about-hero-image">
              <div className="circle-bg"></div>

              <img
                src="/src/assets/images/about1.png"
                alt="About us"
              />
            </div>

          </div>
        </section>

        {/* ABOUT COMPANY */}
        <section className="about-company">
          <div className="about-container about-company-grid">

            <div className="about-company-left">
              <span>Problems trying</span>

              <h2>
                Met minim Mollie non desert
                Alamo est sit cliquey dolor
                do met sent.
              </h2>
            </div>

            <div className="about-company-right">
              <p>
                Problems trying to resolve the conflict between
                the two major realms of Classical physics:
                Newtonian mechanics.
              </p>
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="about-stats">
          <div className="about-container stats-grid">

            <div className="stat-item">
              <h2>15K</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat-item">
              <h2>150K</h2>
              <p>Monthly Visitors</p>
            </div>

            <div className="stat-item">
              <h2>15</h2>
              <p>Countries Worldwide</p>
            </div>

            <div className="stat-item">
              <h2>100+</h2>
              <p>Top Partners</p>
            </div>

          </div>
        </section>

        {/* VIDEO */}
        <section className="about-video">
          <div className="about-container">

            <div className="video-box">
              <img
                src="/src/assets/images/about2.png"
                alt="Video"
              />

              <button className="video-play">
                ▶
              </button>
            </div>

          </div>
        </section>

        {/* TEAM */}
        <section className="about-team">
          <div className="about-container">

            <div className="section-heading">
              <h2>Meet Our Team</h2>

              <p>
                Problems trying to resolve the conflict between
                the two major realms of Classical physics:
                Newtonian mechanics.
              </p>
            </div>

            <div className="about-team-grid">

              {team.map((member) => (
                <div className="about-team-card" key={member.name}>

                  <img
                    src={member.image}
                    alt={member.name}
                  />

                  <h3>{member.name}</h3>

                  <p>{member.job}</p>

                  <div className="team-social">
                    <span>f</span>
                    <span>◎</span>
                    <span>♥</span>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* LOGOS TITLE */}
        <section className="about-companies">

          <div className="about-container">

            <div className="section-heading">
              <h2>Big Companies Are Here</h2>

              <p>
                Problems trying to resolve the conflict between
                the two major realms of Classical physics:
                Newtonian mechanics.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-cta-content">

            <span>WORK WITH US</span>

            <h2>Now Let's grow Yours</h2>

            <p>
              The gradual accumulation of information about atomic
              and small scale behaviour during the first quarter
              of the 20th.
            </p>

            <button>Button</button>

          </div>

          <div className="about-cta-image">
            <img
              src="/src/assets/images/about3.png"
              alt="Work with us"
            />
          </div>
        </section>

      </main>

      <Logos />
      <Footer />
    </>
  );
}

export default AboutPage;