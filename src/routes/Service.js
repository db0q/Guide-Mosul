import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar";
import hadrah from "../assets/mosul1.jpg";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={hadrah}
        cName="hero-mid"
        title="services"
        btnClass="HeroHomeBtn"
        btnText="button"
      />
      <Footer />
    </>
  );
}
export default Service;
