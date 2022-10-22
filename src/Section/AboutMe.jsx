import React from 'react';
import "../Styles/AboutMe.css"

const AboutMe = () => {
  return (
    <div className="aboutMeBox">
      {/* <div><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div> */}
      <div className="aboutMeSec">
           <div className="gifBox"><img src="https://goofy-goldstine-0f8bb1.netlify.app/img/web.gif" className="aboutGif" alt="abputmegif"/></div>
           <div className="aboutMain">
               <div className="heading">About Me</div>
               <div className="intro">
                   <div> I'm an enthusiaistic <span style={{color:"yellow"}}>FULL STACK DEVELOPER</span> with strong 
                    analytical and technical skills. In a nutshell, I like to 
                    manifest my ideas through UI. A lifelong learner, 
                    eager to build academic and technical foundations.</div>
               </div>
           </div>
      </div>

    </div>
  )
}

export default AboutMe