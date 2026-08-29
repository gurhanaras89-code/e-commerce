import Header from "../layouts/Header";
import Logos from "../layouts/Logos";
import Footer from "../layouts/Footer";
import "./TeamPage.css";

const teamMembers = [
  {
    name: "Jerome Bell",
    company: "IBM",
    image: "/src/assets/images/team1.png",
  },
  {
    name: "Brooklyn Simmons",
    company: "eBay",
    image: "/src/assets/images/team2.png",
  },
  {
    name: "Ronald Richards",
    company: "Starbucks",
    image: "/src/assets/images/team3.png",
  },
  {
    name: "Floyd Miles",
    company: "Facebook",
    image: "/src/assets/images/team4.png",
  },
  {
    name: "Jane Cooper",
    company: "Mitsubishi",
    image: "/src/assets/images/team5.png",
  },
  {
    name: "Robert Fox",
    company: "IBM",
    image: "/src/assets/images/team6.png",
  },
  {
    name: "Leslie Alexander",
    company: "The Walt Disney Company",
    image: "/src/assets/images/team7.png",
  },
  {
    name: "Jacob Jones",
    company: "Starbucks",
    image: "/src/assets/images/team8.png",
  },
];

function TeamPage() {
  return (
    <>
      <Header />

      <main className="team-page">

        {/* TEAM HEADER */}
        <section className="team-heading">
          <div className="team-container">
            <h1>Meet Our Team</h1>

            <p>
              Problems trying to resolve the conflict between
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </section>

        {/* TEAM MEMBERS */}
        <section className="team-members">
          <div className="team-container team-grid">

            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>

                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p>{member.company}</p>
                </div>

              </article>
            ))}

          </div>
        </section>

      </main>

     
    </>
  );
}

export default TeamPage;