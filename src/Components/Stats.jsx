import React from 'react';

const Stats = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"3rem", justifyContent:"center",alignItems:"center"}}>
          <div style={{ width: "40%", margin: "auto" }}>
            <div  style={{color:"yellow", fontSize:"1.7rem"}} >Streak-Stats</div>
           <a href="https://github.com/utopian-akanksha">
             <img
               src="https://github-readme-streak-stats.herokuapp.com?user=utopian-akanksha&theme=yellowdark"
               alt="streak"
             />
           </a>
          </div>
 
      <div style={{ display:"flex", gap:"3rem", justifyContent:"center",alignItems:"center"}}>
        <div>
            <div style={{color:"yellow", fontSize:"1.7rem"}}>Languages</div>
        <a href="https://github.com/utopian-akanksha">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=utopian-akanksha&theme=dark" 
            alt="stats" //launguages
          />
        </a>
        </div>
        <div>
          <div style={{color:"yellow", fontSize:"1.7rem"}}>Stats</div>
          <a href="https://github.com/utopian-akanksha">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=utopian-akanksha&count_private=true&show_icons=true&theme=dark"
            alt="count" //stats
          />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Stats