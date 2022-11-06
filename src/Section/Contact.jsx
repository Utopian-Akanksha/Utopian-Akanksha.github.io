import React from 'react'
import "../Styles/Contact.css";
import gmail from '../Assets/gmail.png'
import phone from "../Assets/phone.png"
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import linktree from '../Assets/linktree.webp';
import ContactComponent from '../Components/ContactComponent';

const Contact = () => {
  return (
    <div className="contactBox">
        <div className="box1">
             <div className="quote">
                 “Invisible threads are the strongest ties.”
            </div>
            <div className="socialConnect">
                 <button className="linkedin"><a href="https://www.linkedin.com/in/akanksha-malviya/">LinkedIn</a></button>
                 <button className="github"><a href="https://github.com/Utopian-Akanksha">Github</a></button>
                 <button className="twitter"><a href="https://twitter.com/AkankshaMalviy5">Twitter</a></button>
            </div>
            <div className="teleEmail">
                <div className="link" > 
                    <div className="externalLink"><img src={gmail} alt="gmail" width="25px" /></div>
                    <div>23utopian.97@gmail.com</div>
                </div>
                <div className="link" > 
                    <div className="externalLink"><img src={phone} alt="gmail" width="25px" /></div>
                    <div>8133013632</div>
                </div>
            </div>
            <div className="teleEmail">
                    <a href="https://www.facebook.com/akanksha.malviya.56/"><img src={facebook} alt="fb" width="40px" /></a>
                    <a href="https://www.instagram.com/__utopian_/"><img src={instagram} alt="insta" width="40px" /></a>
                    <a href="https://linktr.ee/malviyaAkanksha"><img src={linktree} alt="insta" width="40px" /></a>
            </div>
        </div>

        <div>
            <ContactComponent/>
        </div>
       
    </div>
  )
}

export default Contact