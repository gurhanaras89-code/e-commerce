import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import "./Shop.css";


const categories = [
  { image: "/src/assets/images/shop1.png", title: "CLOTHS", items: "5 Items" },
  { image: "/src/assets/images/shop2.png", title: "CLOTHS", items: "5 Items" },
  { image: "/src/assets/images/shop3.png", title: "CLOTHS", items: "5 Items" },
  { image: "/src/assets/images/shop4.png", title: "CLOTHS", items: "5 Items" },
  { image: "/src/assets/images/shop5.png", title: "CLOTHS", items: "5 Items" },
];

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

function Shop() {
  return (
    <>
      <Header />
    <main className="shop-page">

      {/* SHOP HEADER */}
      <section className="shop-heading">
        <div className="shop-container">
          <h1>Shop</h1>

          <div className="breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="shop-categories">
        <div className="shop-container category-grid">

          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.image} alt={category.title} />

              <div className="category-overlay">
                <h3>{category.title}</h3>
                <span>{category.items}</span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* PRODUCTS TOOLBAR */}
      <section className="shop-toolbar">
        <div className="shop-container toolbar-inner">

          <p>Showing all 12 results</p>

          <div className="view-options">
            <span>Views:</span>
            <button className="view-button active">▦</button>
            <button className="view-button">☷</button>
          </div>

          <div className="shop-actions">
            <select defaultValue="Popularity">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>

            <button className="filter-button">
              Filter
            </button>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="shop-container product-grid">

          {products.map((product, index) => (
            <article className="product-card" key={product}>

              <div className="product-image">
                <img
                  src={`/src/assets/images/${product}`}
                  alt={`Product ${index + 1}`}
                />
              </div>

              <h3>Graphic Design</h3>

              <p className="product-department">
                English Department
              </p>

              <div className="product-price">
                <span className="old-price">$16.48</span>
                <span className="new-price">$6.48</span>
              </div>

              <div className="product-colors">
                <span className="color blue"></span>
                <span className="color green"></span>
                <span className="color orange"></span>
                <span className="color dark"></span>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* PAGINATION */}
      <section className="pagination-section">
        <div className="pagination">

          <button disabled>First</button>
          <button>1</button>
          <button className="current">2</button>
          <button>3</button>
          <button>Next</button>

        </div>
      </section>

 {/* BRANDS */}
<section className="brands-section">
  <div className="shop-container brands">

    <div className="brand brand-hooli">
      <span>Hooli</span>
    </div>

    <div className="brand brand-lyft">
      <span>lyft</span>
    </div>

    <div className="brand brand-bird">
      <span className="bird-wing">◢</span>
      <span className="bird-wing bird-wing-2">◣</span>
    </div>

    <div className="brand brand-stripe">
      <span>stripe</span>
    </div>

    <div className="brand brand-aws">
      <span>aws</span>
      <small>⌒</small>
    </div>

    <div className="brand brand-reddit">
      <span className="reddit-dot">●</span>
      reddit
    </div>

  </div>
</section>

    </main> 
    <Footer />
    </>
  );
}

export default Shop;