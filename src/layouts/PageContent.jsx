import Header from "./Header";
import Footer from "./Footer";

function PageContent({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageContent;