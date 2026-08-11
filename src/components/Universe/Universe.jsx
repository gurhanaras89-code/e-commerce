import universe from "../../assets/images/universe.png";

function Universe() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "70px 0",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          height: "500px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* FOTOĞRAF */}
        <div
          style={{
            width: "55%",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <img
            src={universe}
            alt="Part of the Neural Universe"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* METİN */}
        <div
          style={{
            width: "45%",
            paddingLeft: "65px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: "0 0 24px",
              color: "#BDBDBD",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            SUMMER 2020
          </p>

          <h2
            style={{
              margin: "0 0 25px",
              color: "#252B42",
              fontSize: "28px",
              lineHeight: "1.25",
              fontWeight: 700,
            }}
          >
            Part of the Neural
            <br />
            Universe
          </h2>

          <p
            style={{
              margin: "0 0 25px",
              color: "#737373",
              fontSize: "12px",
              lineHeight: "20px",
              maxWidth: "300px",
            }}
          >
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* BUTONLAR */}
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "#2DC071",
                color: "#ffffff",
                padding: "12px 24px",
                fontSize: "10px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              BUY NOW
            </button>

            <button
              style={{
                border: "1px solid #2DC071",
                backgroundColor: "#ffffff",
                color: "#2DC071",
                padding: "11px 22px",
                fontSize: "10px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;