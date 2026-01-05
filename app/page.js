import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <Menu />
      <Promotions/>
      <Footer />
    </main>
  );
}