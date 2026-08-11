import shop1 from "../../assets/images/shop1.png";
import shop2 from "../../assets/images/shop2.png";
import shop3 from "../../assets/images/shop3.png";
import shop4 from "../../assets/images/shop4.png";
import shop5 from "../../assets/images/shop5.png";

function Shop() {
  const categories = [
    { image: shop1, title: "CLOTHS", items: "5 Items" },
    { image: shop2, title: "CLOTHS", items: "5 Items" },
    { image: shop3, title: "CLOTHS", items: "5 Items" },
    { image: shop4, title: "CLOTHS", items: "5 Items" },
    { image: shop5, title: "CLOTHS", items: "5 Items" },
  ];

  return (
    <main>
      <section className="shop-page">
        <div className="shop-container">

          <div className="shop-heading">
            <h1>Shop</h1>

            <div className="breadcrumb">
              <span>Home</span>
              <span>›</span>
              <span>Shop</span>
            </div>
          </div>

          <div className="shop-categories">
            {categories.map((category, index) => (
              <div className="shop-category" key={index}>
                <img src={category.image} alt={category.title} />

                <div className="shop-category-overlay">
                  <h3>{category.title}</h3>
                  <p>{category.items}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Shop;