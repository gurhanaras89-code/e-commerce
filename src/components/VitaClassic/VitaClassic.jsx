import { useState } from "react";

import vitaMen from "../../assets/images/vita_men.png";
import hero2 from "../../assets/images/hero2.png";

function VitaClassic() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <section
      style={{
        width: "100%",
        height: "432px",
        backgroundColor: "#23856D",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* ==================================================
          SLIDE 1
          ================================================== */}

      {currentSlide === 0 && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >

          {/* SOL YAZILAR */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "58px",
              width: "50%",
              zIndex: 5,
            }}
          >
            <p
              style={{
                margin: "0 0 25px",
                color: "#fff",
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
                color: "#fff",
                fontSize: "34px",
                lineHeight: "1.35",
                fontWeight: 700,
              }}
            >
              Vita Classic
              <br />
              Product
            </h2>

            <p
              style={{
                margin: "25px 0 20px",
                color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
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
              right: "20px",
              bottom: "0",
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <img
              src={vitaMen}
              alt="Vita Classic Product"
              style={{
                height: "400px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}


      {/* ==================================================
          SLIDE 2
          HERO2 TAM BANNER
          ================================================== */}

      {currentSlide === 1 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >

          {/* HERO2 FOTOĞRAFI */}

          <img
            src={hero2}
            alt="Vita Classic"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 1,
            }}
          />


          {/* YAZILAR */}

          <div
            style={{
              position: "relative",
              zIndex: 4,
              maxWidth: "950px",
              height: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "50%",
                paddingTop: "58px",
              }}
            >

              <p
                style={{
                  margin: "0 0 25px",
                  color: "#fff",
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
                  color: "#fff",
                  fontSize: "34px",
                  lineHeight: "1.35",
                  fontWeight: 700,
                }}
              >
                Vita Classic
                <br />
                Product
              </h2>

              <p
                style={{
                  margin: "25px 0 20px",
                  color: "#fff",
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
                    color: "#fff",
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
                    color: "#fff",
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
          </div>

        </div>
      )}


      {/* ==================================================
          SOL OK
          ================================================== */}

      <button
        onClick={previousSlide}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          border: "2px solid #fff",
          borderRadius: "50%",
          background: "transparent",
          color: "#fff",
          fontSize: "36px",
          lineHeight: "1",
          cursor: "pointer",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "6px",
        }}
      >
        ‹
      </button>


      {/* ==================================================
          SAĞ OK
          ================================================== */}

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          border: "2px solid #fff",
          borderRadius: "50%",
          background: "transparent",
          color: "#fff",
          fontSize: "36px",
          lineHeight: "1",
          cursor: "pointer",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "6px",
        }}
      >
        ›
      </button>


      {/* ==================================================
          SLIDER GÖSTERGESİ
          ================================================== */}

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "28px",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 20,
        }}
      >
        <span
          style={{
            width: "38px",
            height: "4px",
            backgroundColor:
              currentSlide === 0
                ? "#fff"
                : "rgba(255,255,255,0.45)",
          }}
        />

        <span
          style={{
            width: "38px",
            height: "4px",
            backgroundColor:
              currentSlide === 1
                ? "#fff"
                : "rgba(255,255,255,0.45)",
          }}
        />
      </div>

    </section>
  );
}

export default VitaClassic;