import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <header>
          My <span>Education</span> & <span>Work Experience</span>
        </header>
        <p>dummy text of the printing dummy text of the printing</p>
        <div className="contactDetails">
          <LocalPhoneIcon className="icon" />
          <span>(+962) 799137234</span>
        </div>
        <div className="contactDetails">
          <AddLocationIcon className="icon" />
          <span>Jordan / Amman</span>
        </div>
        <div className="contactDetails">
          <EmailIcon className="icon" />
          <span>rama.qndeel@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="FisrtName" />
            <input type="text" placeholder="LastName" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
