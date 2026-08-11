import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero/Hero";
import EditorPick from "../components/EditorPick/EditorPick";
import Bestseller from "../components/Bestseller/Bestseller";
import VitaClassic from "../components/VitaClassic/VitaClassic";
import Universe from "../components/Universe/Universe";
import FeaturedPosts from "../components/FeaturedPost/FeaturedPost";

function PageContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <EditorPick />
        <Bestseller />
        <VitaClassic />
        <Universe />
        <FeaturedPosts />

      </main>

      <Footer />
    </div>
  );
}

export default PageContent;