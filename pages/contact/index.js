// our-domain.com/contact
import { Fragment } from "react";
import ContactForm from "../../components/ContactForm";
function Contact() {
  return (
    <Fragment>
      <div className="container grid overflow-hidden dark grid-cols-4 grid-rows-1 grid-flow-row w-screen box">
        <div className="box">
          <p className="font-sans text-5xl sm:text-9xl not-italic font-light text-left p-2 ">
            Contact
          </p>
        </div>
      </div>
      <ContactForm />;
    </Fragment>
  );
}

export default Contact;
