import { projects } from "../data";
import React, { Component } from "react";

class MyProjects extends Component {
    state={
        project:0
    }

    rightClick=()=>{
        if (this.state.project < projects.length-1){
            this.setState({
                project:this.state.project+1
            })
        }
        console.log("Right Clicked")
        console.log(this.state.project)


    }

    leftClick=()=>{
        if (this.state.project > 0){
            this.setState({
                project:this.state.project-1
            })
    
        }
        console.log("left Clicked")
        console.log(this.state.project)

    }


  render() {
    return (
      <section id="my-projects" className=" my-projects section">
        <h1 className="colored-font big-font">My Projects ,,</h1>
        <div className=" display-column center ">
          <h3 className="colored-font">{`"${projects[this.state.project].name}"`} </h3>
          <p className="discription"> "{projects[this.state.project].discription}" </p>
          <div className="display-row center">
              <br/>
              
            <button  onClick={()=>this.leftClick()} className="arrow" disabled={this.state.project===0}> {"<"} </button>

            <div className="image-toggle">
              <img
                src={projects[this.state.project].image}
                alt={projects[this.state.project].name}
                className="project-image"
              />
              <div className="links">
                <a href={projects[this.state.project].github} target="_blank">
                  See project on github⤤
                </a>
                <a href={projects[this.state.project].live} target="_blank" className={` ${projects[this.state.project].live===null&&"gray-font disabled"}` } >
                  Live Preview⤤
                </a>
              </div>
            </div>
            <button onClick={()=>this.rightClick()} className="arrow" disabled={this.state.project===projects.length-1}> {">"} </button>
            <br/>

          </div>
        </div>
      </section>
    );
  }
}

export default MyProjects;
