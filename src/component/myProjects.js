import { projects } from "../data";
import React, { useState } from "react";

function MyProjects (props) {
  const {visibility,myRef}=props


  const[projectNum,setProjectNum]=useState(0)
  

 const rightClick=()=>{
        if (projectNum < projects.length-1){
          setProjectNum(projectNum+1)
         
        }
        console.log("Right Clicked"+projectNum)

    }

   const leftClick=()=>{
        if (projectNum > 0){
          setProjectNum(projectNum-1)

    
        }
        console.log("left Clicked"+projectNum)

     

    }


  
    return (
      <section id="my-projects" className=" my-projects section" ref={myRef}>
        <h1 className={`colored-font big-font ${visibility?'animate':""}`} >My Projects ,,</h1>
        <br/>
        <div className=" display-column center ">
          <div className={`  display-column center textRise ${visibility?'animate2':""}`}>
          <h3 className="colored-font">{`"${projects[projectNum]?.name}"`} </h3>
          <p className="discription"> "{projects[projectNum]?.discription}" </p>
          </div >
          
          <div className={`  display-row center textRise2 ${visibility?'animate2':""}`}>
              <br/>
              
            <button  onClick={()=>leftClick()} className="arrow" disabled={projectNum===0}> {"<"} </button>

            <div className="image-toggle">
              <img
                src={projects[projectNum]?.image}
                alt={projects[projectNum]?.name}
                className="project-image"
              />
              <div className="links">
                <a href={projects[projectNum]?.github} target="_blank" rel="noreferrer">
                  See project on github⤤
                </a>
                <a href={projects[projectNum]?.live} target="_blank" rel="noreferrer" className={` ${projects[projectNum]?.live===null&&"gray-font disabled"}` } >
                  Live Preview⤤
                </a>
              </div>
            </div>
            <button onClick={()=>rightClick()} className="arrow" disabled={projectNum===projects.length-1}> {">"} </button>
            <br/>

          </div>
        </div>
        <br/><br/>
      </section>
    );
  
}

export default MyProjects;
