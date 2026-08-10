import Header from "./Header";
import Footer from "./Footer";
import Hero from "../components/Hero/Hero";
import EditorPick from "../components/EditorPick/EditorPick";

function PageContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <EditorPick />
      </main>

      <Footer />
    </div>
  );
}

export default PageContent;