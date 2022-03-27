import logo from '../assets/Logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'


function Nav() {
  return (
    <nav className="sidenav">
      <a className="active" href="#home">

        <img  alt='Logo' className="logo" src={logo}/>
      </a>
      <div >
      <hr/>

      <a href="#Knowme">Know me</a>
      <hr/>
      <a href="#MySkills">My Skills</a>
      <hr/>

      <a href="#MyProjects">My Projects</a>
      <hr/>

      <a href="#MyArt">My Art</a>
      <hr/>

      <a href="#MyArt">Contact me</a>
      <hr/>

      </div>
      <div className="icon">
       <a  href="https://www.linkedin.com/in/moatasemshaltout/"  target="_blank" rel="noreferrer">  <embed   src={linkedin} /></a>
       <a  href="https://github.com/M3tesim" target="_blank" rel="noreferrer">  <embed  src={github} /></a>
       </div>


    </nav>
  );
}

export default Nav;