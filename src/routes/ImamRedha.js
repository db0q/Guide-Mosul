import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ImamRedha6 from "../assets/Redha1.jpg";
import Footer from "../components/Footer";
import "../components/Destnationstyle.css";
import DestnationData from "../components/DestnationData";
import ImamRedha1 from "../assets/Redha2.jpg";
import ImamRedha2 from "../assets/Redha3.jpg";
import ImamRedha3 from "../assets/Redha4.jpg";
import ImamRedha4 from "../assets/Regha5.png";
import Trip from '../components/Trip';
import Maps from '../components/Maps';
function ImamRedha() {
  return (
    <>
      <Navbar />
      <Hero heroImg={ImamRedha6} cName="hero-mid" title="" />
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
          img1={ImamRedha1}
          img2={ImamRedha4}
        />
        <DestnationData
          cName="first-des-reverse"
          heading=""
          text="ipsum lorem ipsum lorem ipsum
       lorem ipsum lorem ipsum lorem ipsum lorem
      lorem ipsum lorem ipsum lorem ipsum 
      lorem"
          img1={ImamRedha2}
          img2={ImamRedha3}
        />
      </div>
      <Maps 
      link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23690.329458314052!2d43.32235884816843!3d36.451238115072655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4007b926d862bf91%3A0x5228fd8543842d14!2z2YXZgtin2YUg2KfZhNin2YXYp9mFINin2YTYsdi22Kc!5e0!3m2!1sen!2siq!4v1688557705128!5m2!1sen!2siq" 
      />
      <Trip 
      title1="Descover another places"
      text1="Each place has story to descover it"/>
      <Footer />
    </>
  );
}
export default ImamRedha;
