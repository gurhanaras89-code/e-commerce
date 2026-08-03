import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero/Hero";

function PageContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default PageContent;