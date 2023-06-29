import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import agh from "../assets/agh1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import agh1 from "../assets/agh2.jpg";
import agh2 from "../assets/agh3.jpg";
import agh3 from "../assets/agh4.jpg";
import agh4 from "../assets/agh5.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function BaghdidaHeritage() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={agh}
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
          img1={agh1}
          img2={agh4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={agh2}
          img2={agh3}
        />
      </div>
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"/>
      <Footer />
    </>
  );
}
export default BaghdidaHeritage;
