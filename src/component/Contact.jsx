import './Contact.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import variable from '../config/config';
import { useRef } from 'react';

function Contact() {
  const [contact, setContact] = useState([]);
  let name = useRef('');
  let email = useRef('');
  let message = useRef('');
  useEffect(() => {
    fetchContact();
  }, []);
  async function fetchContact() {
    const api = variable.API_URI;
    const response = await fetch(`${api}/contact`);
    const contact = await response.json();
    setContact(contact.data);
  }

  async function submitHandler() {
    const api = variable.API_URI;
    const postData = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    const res = await fetch(`${api}/sendMail`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!res.ok) {
      const message = `An error occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
  }
  return (
    <div className="contact-container" id="contact">
      <div className="upper-contact-container">Contact Me</div>
      <div className="lower-contact-container">
        <Slide direction="left" className="contact-detail">
          <div>
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
        <Slide direction="right" className="contact-form">
          <form onSubmit={submitHandler}>
            <label htmlFor="">Name</label>
            <br />
            <input ref={name} type="text" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input ref={email} type="email" />
            <br />
            <label htmlFor="">Message</label>
            <br />
            <textarea
              ref={message}
              name=""
              id=""
              cols="30"
              rows="12"
            ></textarea>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </Slide>
      </div>
    </div>
  );
}
export default Contact;
