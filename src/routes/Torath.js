import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import torath1 from "../assets/torath5.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import Mosuldes1 from "../assets/torath2.jpg";
import Mosuldes2 from "../assets/torath3.jpg";
import Mosuldes3 from "../assets/torath4.jpg";
import Mosuldes4 from "../assets/torath5.jpg";
import Trip from "../components/Trip";
import Maps from '../components/Maps';
function torath2() {
  return (
    <>
      <Navbar />
      <Hero heroImg={torath1} cName="hero-mid" title="" />
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
          img1={Mosuldes1}
          img2={Mosuldes4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={Mosuldes2}
          img2={Mosuldes3}
        />
      </div>
      <Maps 
      link1="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.330774780592!2d43.12208317556889!3d36.3527660723781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007959ab9f7ece7%3A0x7df3b27b49337ad3!2z2KrYsdin2Ksg2KfZhNmF2YjYtdmEIC0gTW9zdWwgSGVyaXRhZ2U!5e0!3m2!1sen!2siq!4v1688556865395!5m2!1sen!2siq"
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"
      />
      <Footer />
    </>
  );
}
export default torath2;
