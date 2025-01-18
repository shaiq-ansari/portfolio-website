import ContactForm from "../components/contact/ContactForm";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import ContactCTA from "../components/contact/ContactCTA";

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <ContactForm />
    <ContactCTA />
    <Footer />  
    </>
  );
};

export default ContactPage;
