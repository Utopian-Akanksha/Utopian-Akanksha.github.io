import React, { useState } from 'react'
import "../Styles/Navbar.css"
import akanksha_malviya from '../Assets/akanksha_malviya.pdf'

const Navbar = () => {

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className={fix ? "navBox fixed-top" : "navBox"}>
        <div className="myLogo">akanksha.me</div>
        <div className="navbar">
           <div>Home</div>
           <div>About</div>
           <div>Work</div>
           <div>Skills</div>
           <div>Contact</div>
           <div className="resumeBtn"> <button><a href={akanksha_malviya} download>Resume</a></button></div>
        </div>
    </div>
  )
}

export default Navbar