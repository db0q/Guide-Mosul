import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aslaf from "../assets/aslaf1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import aslaf1 from "../assets/aslaf2.jpg";
import aslaf2 from "../assets/aslaf3.jpg";
import aslaf3 from "../assets/aslaf4.jpg";
import aslaf4 from "../assets/aslaf5.jpg";
import Trip from '../components/Trip';
function Aslaf() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={aslaf}
        cName="hero-mid"
        title=""
      />
      <div className="destnation">
        <h1></h1>
        <p></p>
        <DestnationData
          cName="first-des"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={aslaf1}
          img2={aslaf4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={aslaf2}
          img2={aslaf3}
        />
      </div>
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"
      />
      <Footer />
    </>
  );
}
export default Aslaf;
