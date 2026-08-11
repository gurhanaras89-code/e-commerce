import vitaMen from "../../assets/images/vita_men.png";

function VitaClassic() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#23856D",
        minHeight: "432px",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          height: "432px",
          margin: "0 auto",
          padding: "60px 0 0",
          boxSizing: "border-box",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* SOL TARAF */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: "0px",
            zIndex: 2,
          }}
        >
          <p
            style={{
              margin: "0 0 25px",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            SUMMER 2020
          </p>

          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "34px",
              lineHeight: "1.35",
              fontWeight: 700,
              maxWidth: "360px",
            }}
          >
            Vita Classic
            <br />
            Product
          </h2>

          <p
            style={{
              margin: "25px 0 20px",
              color: "#ffffff",
              fontSize: "11px",
              lineHeight: "18px",
              maxWidth: "360px",
            }}
          >
            We know how large objects will act, We know
            <br />
            how are objects act, well, and how.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              $16.48
            </span>

            <button
              style={{
                backgroundColor: "#2DC071",
                border: "none",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: 700,
                padding: "12px 20px",
                cursor: "pointer",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* SAĞDAKİ ADAM */}
        <div
          style={{
            position: "absolute",
            right: "35px",
            bottom: "0",
            height: "400px",
            display: "flex",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          <img
            src={vitaMen}
            alt="Vita Classic Product"
            style={{
              height: "100%",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* SOL OK */}
        <button
          style={{
            position: "absolute",
            left: "-25px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#ffffff",
            fontSize: "38px",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          ‹
        </button>

        {/* SAĞ OK */}
        <button
          style={{
            position: "absolute",
            right: "-25px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "#ffffff",
            fontSize: "38px",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          ›
        </button>

        {/* SLIDER ÇİZGİLERİ */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 3,
          }}
        >
          <span
            style={{
              width: "38px",
              height: "4px",
              backgroundColor: "#ffffff",
            }}
          />

          <span
            style={{
              width: "38px",
              height: "4px",
              backgroundColor: "rgba(255,255,255,0.45)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default VitaClassic;