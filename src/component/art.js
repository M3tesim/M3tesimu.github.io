import coffee from "../assets/myArt/coffee.png";
import aqua from "../assets/myArt/aqua.png";
import beeGirl from "../assets/myArt/beeGirl.png";
import bunny from "../assets/myArt/bunny.png";
import Artboard from "../assets/myArt/Artboard.png";
import freeURbody from "../assets/myArt/freeURbody.png";
import behance from "../assets/behance.png";
import insta from "../assets/insta.png";

function Art(props) {
  const {visibility,myRef}=props

  return (
    <section  id="myArt" className="  section" ref={myRef}>
              <h1 className= {` art-header colored-font big-font ${visibility?'animate':""}`}>My Art ,,</h1>

      <div id="my-art" className={`  textRise2 ${visibility?'animate2':""}`}>

        <img className="art-image" id="bee" src={beeGirl} alt="Bee character" />
        <img
          className="art-image"
          id="free"
          src={freeURbody}
          alt="free your body"
        />
        <img className="art-image" id="art" src={Artboard} alt="art board" />
        <img
          className="art-image"
          id="bunny"
          src={bunny}
          alt="bunny on motorcycle"
        />

        <img className="art-image" id="aqua" src={aqua} alt="astronuate aqua" />

        <img className="art-image" id="coffee" src={coffee} alt="cofee girl" />
      </div>
      <br />
      <div className="center ">
        <span className="colored-font  "> Find More </span>
        <div  className={` icon textRise2 ${visibility?'animate2':""}`}>
          <a href="https://www.behance.net/m3tsm" target="_blank" rel="noreferrer">
            <embed src={behance} />
          </a>
          <a href="https://www.instagram.com/tasim_sh/" target="_blank" rel="noreferrer">
            <embed src={insta} />
          </a>
        </div>
       
      </div>
    </section>
  );
}

export default Art;
