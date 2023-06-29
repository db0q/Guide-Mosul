import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import baghdida1 from "../assets/baghdida1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import Mosuldes1 from "../assets/Baghdida2.jpg";
import Mosuldes2 from "../assets/baghdida3.jpg";
import Mosuldes3 from "../assets/baghdida4.jpg";
import Mosuldes4 from "../assets/baghdida5.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function BaghdidaMuseum() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={baghdida1}
        cName="hero-mid"
        title="The Baghdida Museum of Syriac Heritage"
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
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205777.20308103014!2d43.123820007797654!3d36.30578799737514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40079f8fbe063adb%3A0xb6c3184444cb7ba6!2z2YXYqtit2YEg2KjZitirINio2LrYr9mK2K_YpyDZhNmE2KrYsdin2Ksg2KfZhNiz2LHZitin2YbZig!5e0!3m2!1sen!2siq!4v1688556767864!5m2!1sen!2siq"
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"/>
      <Footer />
    </>
  );
}
export default BaghdidaMuseum;
