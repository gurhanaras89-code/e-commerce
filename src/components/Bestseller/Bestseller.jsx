import bestseller1 from "../../assets/images/bestseller1.png";
import bestseller2 from "../../assets/images/bestseller2.png";
import bestseller3 from "../../assets/images/bestseller3.png";
import bestseller4 from "../../assets/images/bestseller4.png";
import bestseller5 from "../../assets/images/bestseller5.png";
import bestseller6 from "../../assets/images/bestseller6.png";
import bestseller7 from "../../assets/images/bestseller7.png";
import bestseller8 from "../../assets/images/bestseller8.png";

const products = [
  bestseller1,
  bestseller2,
  bestseller3,
  bestseller4,
  bestseller5,
  bestseller6,
  bestseller7,
  bestseller8,
];

function Bestseller() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "70px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
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
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 500,
              color: "#737373",
            }}
          >
            Featured Products
          </p>

          <h2
            style={{
              margin: "8px 0 8px",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: 700,
              color: "#252B42",
            }}
          >
            BESTSELLER PRODUCTS
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "10px",
              color: "#737373",
            }}
          >
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* ÜRÜNLER */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            columnGap: "18px",
            rowGap: "55px",
          }}
        >
          {products.map((image, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
              }}
            >
              {/* FOTOĞRAF */}
              <div
                style={{
                  width: "100%",
                  height: "285px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* ÜRÜN BİLGİSİ */}
              <div
                style={{
                  paddingTop: "16px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#252B42",
                  }}
                >
                  Graphic Design
                </h3>

                <p
                  style={{
                    margin: "8px 0 12px",
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#737373",
                  }}
                >
                  English Department
                </p>

                {/* FİYAT */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#BDBDBD",
                      textDecoration: "none",
                    }}
                  >
                    $16.48
                  </span>

                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#23856D",
                    }}
                  >
                    $6.48
                  </span>
                </div>

                {/* RENKLER */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                    marginTop: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#23A6F0",
                    }}
                  />

                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#23856D",
                    }}
                  />

                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#E77C40",
                    }}
                  />

                  <span
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#252B42",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bestseller;