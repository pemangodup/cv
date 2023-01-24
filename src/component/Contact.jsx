import './Contact.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import variable from '../config/config';

function Contact() {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetchContact();
  }, []);
  async function fetchContact() {
    const api = variable.API_URI;
    const response = await fetch(`${api}/contact`);
    const contact = await response.json();
    setContact(contact.data);
  }
  return (
    <div className="contact-container" id="contact">
      <div className="upper-contact-container">Contact Me</div>
      <div className="lower-contact-container">
        <Slide direction="left" className="contact-form">
          <form action="" method="post">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="">Message</label>
            <br />
            <textarea name="" id="" cols="30" rows="12"></textarea>
            <button className="send-button">Send</button>
          </form>
        </Slide>
        <Slide direction="right">
          <div className="contact-detail">
            <div className="contact-sub">Let's talk how I can help you!</div>
            <div className="contact-message">
              If you have any queries. Feel free to contact me in the given
              email address/phone no or can send mail through above given form.
            </div>
            {contact.map((data, index) => {
              return (
                <div key={index} className="contact-sub-detail">
                  <div className="yeta">{contact[index].contactMedium}:</div>
                  <div className="uta">{contact[index].contactId}</div>
                </div>
              );
            })}
          </div>
        </Slide>
      </div>
    </div>
  );
}
export default Contact;
