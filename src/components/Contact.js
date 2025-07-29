import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="contact-container">
      <ContactCard name ={"Rohan Singh"} age = {23}/>
      <h1 className="contact-heading">Contact Us</h1>
      <h2 className="contact-content">
        Call us : 6392278807 <br />
        Email us : rohan@email.com
      </h2>
    </div>
  );
};

export default Contact;
