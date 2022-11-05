import React from 'react'
import myLogo from '../Assets/myLogo.png'
import twitter from '../Assets/twitter.png'
import github from '../Assets/github.png'
import gmail from '../Assets/gmail.png'
import linkedin from '../Assets/linkedin.png'
import "../Styles/About.css"

const About = () => {
  return (
    <div className="about">

          <div className="media">
               <div className="mediaBox"><a href="https://github.com/Utopian-Akanksha"><img src={github} alt="github" width="30px" /></a></div>
               <div className="mediaBox"><a href="mailto:23utopian.97@gmail.com"><img src={gmail} alt="gmail" width="25px" /></a></div>
               <div className="mediaBox"><a href="https://www.linkedin.com/in/akanksha-malviya/"><img src={linkedin} alt="linkedin" width="30px" /></a></div>
               <div className="mediaBox"><a href="https://twitter.com/AkankshaMalviy5"><img src={twitter} alt="twitter" width="30px" /></a></div>
          </div>

          <div className="aboutBox" >
            <div className="profile_img">
              <img src={myLogo} width="350px"alt="profile" />
            </div>
            <div className="intro">
              <div>
                <span style={{fontSize:"3rem", color:"white"}}>Bonjour ! I Am </span> 
                <br></br> <span style={{fontSize:"5rem", color:"white"}} >Akanksha<span style={{color:"rgb(222, 222, 66)"}}> Malviya</span></span>
                <br></br> <span style={{fontSize:"2rem", color:"white"}}>A <span style={{color:"rgb(222, 222, 66)"}} >Full Stack Web Developer</span> bringing ideas to life.</span>
                <br></br>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About