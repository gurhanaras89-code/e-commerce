import featured1 from "../../assets/images/featured1.png";
import featured2 from "../../assets/images/featured2.png";
import featured3 from "../../assets/images/featured3.png";

const posts = [
  {
    image: featured1,
  },
  {
    image: featured2,
  },
  {
    image: featured3,
  },
];

function FeaturedPosts() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "70px 0",
      }}
    >
      {/* BAŞLIK */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <p
          style={{
            margin: "0 0 10px",
            color: "#23A6F0",
            fontSize: "10px",
            fontWeight: 700,
          }}
        >
          Practice Advice
        </p>

        <h2
          style={{
            margin: "0 0 12px",
            color: "#252B42",
            fontSize: "28px",
            lineHeight: "1.2",
            fontWeight: 700,
          }}
        >
          Featured Posts
        </h2>

        <p
          style={{
            margin: 0,
            color: "#737373",
            fontSize: "10px",
            lineHeight: "16px",
          }}
        >
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* KARTLAR */}
      <div
        style={{
          maxWidth: "1045px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {posts.map((post, index) => (
          <article
            key={index}
            style={{
              border: "1px solid #eeeeee",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            {/* GÖRSEL */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
              }}
            >
              <img
                src={post.image}
                alt={`Featured post ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  backgroundColor: "#E74040",
                  color: "#ffffff",
                  padding: "5px 8px",
                  fontSize: "9px",
                  fontWeight: 700,
                }}
              >
                NEW
              </span>
            </div>

            {/* İÇERİK */}
            <div
              style={{
                padding: "20px 16px 18px",
              }}
            >
              {/* META */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
                  fontSize: "9px",
                }}
              >
                <span style={{ color: "#23A6F0" }}>Google</span>
                <span style={{ color: "#737373" }}>Trending</span>
                <span style={{ color: "#737373" }}>New</span>
              </div>

              {/* BAŞLIK */}
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#252B42",
                  fontSize: "15px",
                  lineHeight: "20px",
                  fontWeight: 500,
                }}
              >
                Loudest à la Madison #1
                <br />
                (L'Integral)
              </h3>

              {/* AÇIKLAMA */}
              <p
                style={{
                  margin: "0 0 18px",
                  color: "#737373",
                  fontSize: "9px",
                  lineHeight: "15px",
                }}
              >
                We focus on ergonomics and meeting
                <br />
                you where you work. It's only a
                <br />
                keystroke away.
              </p>

              {/* ALT META */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                  fontSize: "8px",
                  color: "#737373",
                }}
              >
                <span>◷ 22 April 2021</span>
                <span>▣ 10 comments</span>
              </div>

              {/* LEARN MORE */}
              <div
                style={{
                  color: "#737373",
                  fontSize: "9px",
                  fontWeight: 700,
                }}
              >
                Learn More
                <span
                  style={{
                    color: "#23A6F0",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  ›
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;