import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/mosul.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Your Journey Your story"
        btnClass="HeroHomeBtn"
        btnText="button"
      />
      <AboutUs />

      <Footer />
    </>
  );
}
export default About;
