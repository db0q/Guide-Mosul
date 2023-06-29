import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tahira1 from "../assets/Tahra1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import Mosuldes1 from "../assets/Tahra2.jpg";
import Mosuldes2 from "../assets/Tahra3.jpg";
import Mosuldes3 from "../assets/Tahra4.jpg";
import Mosuldes4 from "../assets/Tahra5.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function Tahira() {
  return (
    <>
      <Navbar />
      <Hero heroImg={Tahira1} cName="hero-mid" title="" />
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
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.7118574517676!2d43.37500727556494!3d36.27077387240278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40079f2fd50b6ab7%3A0x6da2ad9dce21efe3!2sThe%20Immaculate%20Church!5e0!3m2!1sen!2siq!4v1688556391292!5m2!1sen!2siq"
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"/>
      <Footer />
    </>
  );
}
export default Tahira;
