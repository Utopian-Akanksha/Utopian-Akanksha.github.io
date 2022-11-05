import React from "react";
import Calender from "../Components/Calender";
import Stats from "../Components/Stats";
import About from './About'
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import TechSkills from "./TechSkills";

const Page=()=>{
    return (
        <div>
            <About/>
            <div style={{marginTop:"3rem"}}><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div>
            <AboutMe/>
            <div style={{marginTop:"3rem"}}><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div>
            <Projects/>
            <div style={{marginTop:"3rem"}}><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div>
            <Calender/>
            <Stats/>
            <div style={{marginTop:"3rem"}}><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div>
            <TechSkills/>
            <div style={{marginTop:"3rem"}}><img src="https://thumbs.gfycat.com/AgonizingEvenHoiho-max-1mb.gif" alt="gif" /></div>
            <Contact/>
            <div style={{marginTop:"6rem", padding:"1rem"}}>
                <div style={{color:"white", fontSize:"15px"}}>© 2022 Akanksha Malviya . All Rights Reserved .</div>
            </div>
        </div>
    )
}

export default Page