import React from "react";
import Calender from "../Components/Calender";
import Stats from "../Components/Stats";
import About from './About'
import AboutMe from "./AboutMe";
import Projects from "./Projects";

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
        </div>
    )
}

export default Page