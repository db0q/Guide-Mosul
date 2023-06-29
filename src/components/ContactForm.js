import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="form-container">
      <form>
        <h1>Send message to Us!</h1>
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <input placeholder="Your Subject" />
        <textarea placeholder="Your messege" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
