import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        overflow: "hidden",
      }}
    >
      {/* Figma'daki HERO görselinin tamamı */}
      <img
        src={heroImage}
        alt="New Collection"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 0,
        }}
      />

      {/* HERO YAZILARI */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "1050px",
          maxWidth: "100%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            color: "#fff",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "16px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Summer 2020
          </p>

          <h1
            style={{
              margin: "0 0 24px",
              fontSize: "56px",
              lineHeight: "0.95",
              fontWeight: "700",
            }}
          >
            NEW
            <br />
            COLLECTION
          </h1>

          <p
            style={{
              margin: "0 0 28px",
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "420px",
            }}
          >
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          <button
            style={{
              backgroundColor: "#2DC071",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* SOL OK */}
      <button
        style={{
          position: "absolute",
          left: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "52px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* SAĞ OK */}
      <button
        style={{
          position: "absolute",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "52px",
          cursor: "pointer",
        }}
      >
        ›
      </button>

      {/* SLIDER GÖSTERGESİ */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "28px",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "50px",
            height: "4px",
            backgroundColor: "#fff",
          }}
        />

        <span
          style={{
            width: "50px",
            height: "4px",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;