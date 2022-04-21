import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import React, { Component } from "react";

class Nav extends Component {
  state = {
    active: false,
  };
  toggleVeiw = () => {
    console.log(this.state.active);
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div >
        <div className= {`  ${this.state.active !== true? "active-menu-button":"menu-button"}`} onClick={() => this.toggleVeiw()}>
        </div>

        <nav
          className={` sidenav ${this.state.active !== true && "active-nav"}`}>
          <a className="active" href="#home">
            <img alt="Logo" className="logo" src={logo} />
          </a>
          <div>
            <hr />

            <a href="#know-me" onClick={() => this.toggleVeiw()}>
              Know me
            </a>
            <hr />
            <a href="#my-skills" onClick={() => this.toggleVeiw()}>
              My Skills
            </a>
            <hr />

            <a href="#my-projects" onClick={() => this.toggleVeiw()}>
              My Projects
            </a>
            <hr />

            <a href="#my-art" onClick={() => this.toggleVeiw()}>
              My Art
            </a>
            <hr />

            <a href="#contact-me" onClick={() => this.toggleVeiw()}>
              Contact me
            </a>
            <hr />
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/moatasemshaltout/"
              target="_blank"
              rel="noreferrer">
              {" "}
              <embed src={linkedin} />
            </a>
            <a
              href="https://github.com/M3tesim"
              target="_blank"
              rel="noreferrer">
              {" "}
              <embed src={github} />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
