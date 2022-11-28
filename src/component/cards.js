import React from "react";
import { projects } from "../data";

export default function card(props) {
  const { visibility, myRef } = props;
  //console.log(projects,"some projects");
  return (
    <section id="my-projects" ref={myRef} >
      <div>
      <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
        My Projects ,,
      </h1>
      </div>
      <div className={`cards-container textRise ${visibility?'animate2':""}`}>
      {projects.map((i, index) => (
        <div>
        <Card key={index} project={i} />
        </div>
      ))}
      </div>
     
    </section>
  );
}

function Card(props) {
  const { name, image, discription, github, live } = props.project;
  console.log("card componentname ", name);
  return (
    <div className={` card`}>
      <div className=" display-column center " style={{gap:".5rem"}}>
        <h2 className="colored-font">{name}</h2>
        <p className="discription">{discription}</p>
        <img className="card-image" src={image} alt={image} />
      </div>
      <div className="links">
        <a href={github} target="_blank">
          github⤤
        </a>
        <a href={live} target="_blank">
          {" "}
          Live Preview⤤
        </a>
      </div>
    </div>
  );
}
