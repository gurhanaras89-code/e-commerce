import men from "../../assets/images/men.png";
import women from "../../assets/images/women.png";
import kids from "../../assets/images/kids.png";
import accessories from "../../assets/images/accessories.png";

function EditorPick() {
  return (
    <section
      style={{
        backgroundColor: "#fafafa",
        paddingTop: "55px",
        paddingBottom: "55px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* BAŞLIK */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 700,
              color: "#252B42",
            }}
          >
            EDITOR'S PICK
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "10px",
              color: "#737373",
            }}
          >
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* KART ALANI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "12px",
            width: "100%",
          }}
        >
          {/* MEN */}
          <div
            style={{
              position: "relative",
              height: "320px",
              overflow: "hidden",
            }}
          >
            <img
              src={men}
              alt="Men"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "14px",
                left: "14px",
                background: "#fff",
                padding: "10px 30px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#252B42",
                }}
              >
                MEN
              </span>
            </div>
          </div>

          {/* WOMEN */}
          <div
            style={{
              position: "relative",
              height: "320px",
              overflow: "hidden",
            }}
          >
            <img
              src={women}
              alt="Women"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "14px",
                left: "14px",
                background: "#fff",
                padding: "10px 24px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#252B42",
                }}
              >
                WOMEN
              </span>
            </div>
          </div>

          {/* SAĞ KOLON */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* ACCESSORIES */}
            <div
              style={{
                position: "relative",
                height: "154px",
                overflow: "hidden",
              }}
            >
              <img
                src={accessories}
                alt="Accessories"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "#fff",
                  padding: "8px 14px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#252B42",
                  }}
                >
                  ACCESSORIES
                </span>
              </div>
            </div>

            {/* KIDS */}
            <div
              style={{
                position: "relative",
                height: "154px",
                overflow: "hidden",
              }}
            >
              <img
                src={kids}
                alt="Kids"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "#fff",
                  padding: "8px 18px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#252B42",
                  }}
                >
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorPick;