import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/mosul.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="A tour in the history"
        // text="        It is a site specially designed to provide comprehensive and detailed
        // information on archaeological sites in a particular area. The site aims
        // to facilitate the experience of tourists and travelers who wish to
        // explore and visit archaeological sites and learn about the history and
        // culture of the places they visit."
        // btnClass="HeroHomeBtn"
        // url="/"
        // btnText="button"
      />
      <AboutUs />
      <Trip
      title1="famous places to visit"
      text1="You can descover unique historical places in Nineveh"
      />
      <Footer />
    </>
  );
}
export default Home;
