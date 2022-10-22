import React from 'react'
import himalya from '../Assets/himalya.png';
import kimaye from '../Assets/kimaye.png'
import zara from "../Assets/zara.png";
import "../Styles/Projects.css"

const data=[
    {
        image:`${himalya}`,
        title:"Himalaya",
        description:"Himalaya is an Indian Multinational Company formed with a clear vision to bring Ayurveda to society.It offers a wide range of clinically-studied herbal supplements . ",
        stacks:"React, Chakra UI, JavaScript, CSS, Rest API, Firebase",
        github:"",
        deployment:""
    },
    {
        image:`${kimaye}`,
        title:"Kimaye",
        description:"Grower's of India's finest fruits. India's first brand to retail fresh fruits in USA. Kimaye aims to empower its farmers by delivering their produce to 35 countries around the globe",
        stacks:"React, Chakra UI, JavaScript, CSS, Rest API",
        github:"",
        deployment:""
    },
    {
        image:`${zara}`,
        title:"Zara",
        description:"ZARA is a Spanish multi-national retail clothing chain. It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes .",
        stacks:"HTML, CSS, JavaScript",
        github:"",
        deployment:""
    },
]

const Projects = () => {
  return (
    <div className="projBox">
        <div className="heading1">My Project <span style={{color:"white"}}>Works</span> Includes :</div>
        <div className="card">
            {
                data.map((item)=>{
                    return (
                        <div className="container" key={item.id}>
                            <div className="imgBox"><img src={item.image} alt="projImage" className="projImage" /></div>
                            <div className="title"><p>{item.title} <span style={{color:'yellow'}}>Clone</span></p></div>
                            <div className="desc"><p>{item.description}</p></div>
                            <div className="stacks"><p><span style={{color:"yellow"}}>Tech Stacks</span>: {item.stacks}</p></div>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects