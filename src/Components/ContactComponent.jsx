import React from 'react';
import "../Styles/Contact.css";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Result=()=>{
    return (
        <div>Your message has been sent successfully!!</div>
    )
}

const ContactComponent = () => {

  const [result,showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('email', 'template_nkte732', e.target, '98txElJ-PozU626Pk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  setTimeout(()=>{
    showResult(false)
  }, 5000)

  return (
    <form className="box2" onSubmit={sendEmail} >
                <div className="contactHead">Drop me a message !!</div>
                <div className="labelInput">
                   <input className="input" type="text" name="name" placeholder="Your Name" />
                   <input className="input" type="text" name="email" placeholder="Your Email" />
                   <input className="message" type="text" name="message" placeholder="Your Message" />
                </div>
                <div className="send">
                    <button>Send Message</button>
                </div>
                <div className="result">{result ? <Result/> : null}</div>
    </form>
  )
}

export default ContactComponent