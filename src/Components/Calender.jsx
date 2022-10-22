import React from 'react';
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Calender = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 10;
    
        return contributions.filter((day) => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
    
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

  return (
    <div style={{marginTop:"3rem"}}>
        <div style={{color:"yellow", fontSize:"1.7rem"}} >Github Calender</div>
        <GitHubCalendar
        style={{ margin: "auto" }}
        username="utopian-akanksha"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
        </GitHubCalendar>
    </div>
  )
}

export default Calender