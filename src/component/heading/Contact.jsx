import './Contact.css';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="upper-contact-container">Contact Me</div>
      <div className="lower-contact-container">
        <div className="contact-form">
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
        </div>
        <div className="contact-detail">
          <div className="contact-sub">Let's talk how I can help you!</div>
          <div className="contact-message">
            If you like my work and want to avail my services then drop me a
            message using the contact form. Or get in touch using my email,
            skype or my contact number. See you!
          </div>
          <div className="contact-sub-detail">
            <div className="yeta">Email:</div>
            <div className="uta">pngodup123@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
