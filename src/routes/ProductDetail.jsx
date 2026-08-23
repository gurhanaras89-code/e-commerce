import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Logos from "../layouts/Logos";
import Footer from "../layouts/Footer";
import "./ProductDetail.css";


const products = [
  "shopA1.png",
  "shopA2.png",
  "shopA3.png",
  "shopA4.png",
  "shopA5.png",
  "shopA6.png",
  "shopA7.png",
  "shopA8.png",
  "shopA9.png",
  "shopA10.png",
  "shopA11.png",
  "shopA12.png",
];

function ProductDetail({ match }) {
  const id = Number(match.params.id);
  const product = products[id - 1];

  if (!product) {
    return <div>Product not found</div>;
  }

  const image = `/src/assets/images/${product}`;

  return (
    <>
      <Header />

      <main className="product-detail-page">

        {/* BREADCRUMB */}
        <section className="product-breadcrumb">
          <div className="product-container">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/shop">Shop</Link>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="product-detail">
          <div className="product-container product-detail-grid">

            {/* LEFT - IMAGE */}
            <div className="product-gallery">

              <div className="product-main-image">
                <img
                  src={image}
                  alt={`Product ${id}`}
                />
              </div>

              <div className="product-thumbnail">
                <img
                  src={image}
                  alt={`Product ${id} thumbnail`}
                />
              </div>

            </div>

            {/* RIGHT - INFO */}
            <div className="product-info">

              <h1>Graphic Design</h1>

              <div className="product-rating">
                <span>★★★★★</span>
                <span>10 Reviews</span>
              </div>

              <h2>$6.48</h2>

              <p className="availability">
                Availability:
                <strong> In Stock</strong>
              </p>

              <p className="product-description">
                Met minim Mollie non desert Alamo est sit cliquey dolor
                do met sent. RELIT official consequent door ENIM RELIT
                Mollie. Excitation venial consequent sent nostrum met.
              </p>

              <hr />

              {/* COLORS */}
              <div className="detail-colors">
                <span className="detail-color blue"></span>
                <span className="detail-color green"></span>
                <span className="detail-color orange"></span>
                <span className="detail-color dark"></span>
              </div>

              {/* BUTTONS */}
              <div className="product-actions">
                <button className="select-options">
                  Select Options
                </button>

                <button className="icon-button">
                  ♡
                </button>

                <button className="icon-button">
                  🛒
                </button>

                <button className="icon-button">
                  👁
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* TABS */}
        <section className="product-tabs">
          <div className="product-container">

            <div className="tabs">
              <span>Description</span>
              <span>Additional Information</span>
              <span>Reviews <b>(0)</b></span>
            </div>

            <div className="product-description-content">

              <div className="description-image">
                <img
                  src={image}
                  alt=""
                />
              </div>

              <div className="description-text">
                <h2>the quick fox jumps over</h2>

                <p>
                  Met minim Mollie non desert Alamo est sit cliquey
                  dolor do met sent. RELIT official consequent door
                  ENIM RELIT Mollie.
                </p>

                <p>
                  Met minim Mollie non desert Alamo est sit cliquey
                  dolor do met sent. RELIT official consequent door
                  ENIM RELIT Mollie.
                </p>
              </div>

              <div className="description-list">
                <h2>the quick fox jumps over</h2>

                <p>› the quick fox jumps over the lazy dog</p>
                <p>› the quick fox jumps over the lazy dog</p>
                <p>› the quick fox jumps over the lazy dog</p>
                <p>› the quick fox jumps over the lazy dog</p>

                <h2>the quick fox jumps over</h2>

                <p>› the quick fox jumps over the lazy dog</p>
                <p>› the quick fox jumps over the lazy dog</p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Logos />
      <Footer />
    </>
  );
}

export default ProductDetail;