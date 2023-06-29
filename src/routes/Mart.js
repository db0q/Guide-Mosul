import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mar from "../assets/mar1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import mar1 from "../assets/mar2.jpg";
import mar2 from "../assets/mar3.jpg";
import mar3 from "../assets/mar4.jpg";
import mar4 from "../assets/mar5.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function Mart() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={mar}
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
          img1={mar1}
          img2={mar4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={mar2}
          img2={mar3}
        />
      </div>
      <Maps 
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.369380525318!2d43.38004807556894!3d36.351830772378364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007a34bee4ad251%3A0x39b0fc74697ab3e4!2sSt.%20Shmoni%20Church!5e0!3m2!1sen!2siq!4v1688557253596!5m2!1sen!2siq" 
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"
      />
      <Footer />
    </>
  );
}
export default Mart;
