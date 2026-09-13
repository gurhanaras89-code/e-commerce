import { useState } from "react";

import heroImage from "../../assets/images/hero.png";
import heroImage1 from "../../assets/images/hero1.png";


function Hero() {
  const slides = [
    heroImage,
    heroImage1,
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        overflow: "hidden",
      }}
    >
      {/* HERO FOTOĞRAFI */}
      <img
        src={slides[currentSlide]}
        alt="New Collection"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 0,
          transition: "opacity 0.3s ease",
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
          padding: "0 20px",
          boxSizing: "border-box",
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
        onClick={previousSlide}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          width: "55px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "2px solid #fff",
          borderRadius: "50%",
          color: "#fff",
          fontSize: "42px",
          lineHeight: "1",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* SAĞ OK */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          width: "55px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "2px solid #fff",
          borderRadius: "50%",
          color: "#fff",
          fontSize: "42px",
          lineHeight: "1",
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
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: "50px",
              height: "4px",
              padding: 0,
              border: "none",
              backgroundColor:
                currentSlide === index
                  ? "#fff"
                  : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;