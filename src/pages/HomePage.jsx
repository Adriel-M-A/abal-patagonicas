import Header from "@layout/Header";
import Hero from "@sections/Hero";
import Features from "@sections/Features";
import Products from "../sections/Products";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Products />
    </div>
  );
}

export default HomePage;
