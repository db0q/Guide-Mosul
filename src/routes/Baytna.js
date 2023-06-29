import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import baytna from "../assets/Baytna1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import baytna1 from "../assets/baytna2.jpg";
import baytna2 from "../assets/baytna3.jpg";
import baytna3 from "../assets/baytna4.jpg";
import baytna4 from "../assets/baytna5.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';

function Baytna() {
  return (
    <>
      <Navbar />
      <Hero heroImg={baytna} cName="hero-mid" title="" />
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
          img1={baytna1}
          img2={baytna4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={baytna2}
          img2={baytna3}
        />
      </div>
      <Maps 
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.732603249231!2d43.12278747556837!3d36.34302997238097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400795ac7461860b%3A0x7da810b99156f6c3!2z2YXYpNiz2LPYqSDYqNmK2KrZhtinINmE2YTYq9mC2KfZgdipINmI2KfZhNiq2LHYp9ir!5e0!3m2!1sen!2siq!4v1688556617831!5m2!1sen!2siq"
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"
      />
      <Footer />
    </>
  );
}
export default Baytna;
