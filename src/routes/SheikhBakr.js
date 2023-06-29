import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SheikhBakr0 from "../assets/lalash1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import SheikhBakr1 from "../assets/lalash2.jpg";
import SheikhBakr2 from "../assets/lalash3.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function SheikhBakr() {
  return (
    <>
      <Navbar />
      <Hero heroImg={SheikhBakr0} cName="hero-mid" title="" />
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
          img1={SheikhBakr1}
          img2={SheikhBakr2}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={SheikhBakr2}
          img2={SheikhBakr0}
        />
      </div>
      <Maps 
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27359.81556211335!2d43.27681157621395!3d36.76498556252185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40089d509a06788d%3A0x82714d05866d10d!2sLalish!5e0!3m2!1sen!2siq!4v1688557981215!5m2!1sen!2siq" 
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"
      />
      <Footer />
    </>
  );
}
export default SheikhBakr;
