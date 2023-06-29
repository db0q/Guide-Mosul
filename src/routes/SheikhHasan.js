import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import shikh from "../assets/shikh1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import shikh1 from "../assets/shikh2.jpg";
import shikh2 from "../assets/shikh3.jpg";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
// import shikh3 from "../assets/shikh4.jpg";
// import shikh4 from "../assets/shikh5.jpg";
function SheikhHasan() {
  return (
    <>
      <Navbar />
      <Hero heroImg={shikh} cName="hero-mid" title="" />
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
          img1={shikh1}
          img2={shikh}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={shikh2}
          img2={shikh1}
        />
      </div>
      <Maps 
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336549.9492060731!2d42.56452281184223!3d36.62926332437599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007b788072a6e7b%3A0x76297c54199b8c1b!2sSheikh%20Hassan%20shrine!5e0!3m2!1sen!2siq!4v1688557850805!5m2!1sen!2siq"  
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"/>
      <Footer />
    </>
  );
}
export default SheikhHasan;
