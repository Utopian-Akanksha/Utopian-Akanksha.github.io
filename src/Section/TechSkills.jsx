import React from 'react'
import html from '../Assets/html.webp'
import css from '../Assets/css.png';
import js from '../Assets/js.jpg';
import react from "../Assets/react.png";
import redux from '../Assets/redux.png';
import chakra from '../Assets/chakra.jpg';
import nodejs from '../Assets/nodejs.png';
import express from '../Assets/express.png';
import mongo from '../Assets/mongo.png';
import mongoose from '../Assets/mongoose.png';
import github from '../Assets/github.png';
import postman from '../Assets/postman.png';
import typescript from '../Assets/typescript.png';
import "../Styles/TechSkills.css"

const TechSkills = () => {
  return (
    <div className="techSkills">
        <div className="techHead" >Technical Skills</div>
        <div className="techBox">
            <div>
                <img src={html} alt="html"/>
                <div>HTML</div>
            </div>
            <div>
                <img src={css} alt="css"/>
                <div>CSS</div>
            </div>
            <div>
                <img src={js} alt="js"/>
                <div>JavaScript</div>
            </div>
            <div>
                <img src={react} alt="react"/>
                <div>React</div>
            </div>
            <div>
                <img src={redux} alt="redux"/>
                <div>Redux</div>
            </div>
            <div>
                <img src={chakra} alt="chakra"/>
                <div>Chakra UI</div>
            </div>
            <div>
                <img src={nodejs} alt="nodejs"/>
                <div>NodeJS</div>
            </div>
            <div>
                <img src={express} alt="express"/>
                <div>Express</div>
            </div>
            <div>
                <img src={mongo} alt="mongo"/>
                <div>MongoDB</div>
            </div>
            <div>
                <img src={mongoose} alt="mongoose"/>
                <div>Mongoose</div>
            </div>
            <div>
                <img src={typescript} alt="typescript"/>
                <div>TypeScript</div>
            </div>
            <div>
                <img src={postman} alt="postman"/>
                <div>Postman</div>
            </div>
            <div>
                <img src={github} alt="github"/>
                <div>Github</div>
            </div>
        </div>
    </div>
  )
}

export default TechSkills