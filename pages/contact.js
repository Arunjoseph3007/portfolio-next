import useScrollToTop from "../Utils/useScrollToTop";
import ContactHead from "../Components/contact/ContactHead";
import ContactLinks from "../Components/contact/ContactLinks";

const Contact = () => {
  useScrollToTop();
  return (
    <>
      <ContactHead />
      <ContactLinks />
    </>
  );
};

export default Contact;
