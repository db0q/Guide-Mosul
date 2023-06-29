import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import lalash from "../assets/mosul4.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={lalash}
        cName="hero-mid"
        title="Your Journey Your story"
        btnClass="HeroHomeBtn"
        btnText="button"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
