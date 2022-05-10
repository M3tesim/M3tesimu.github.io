import coffee from "../assets/myArt/coffee.png";
import aqua from "../assets/myArt/aqua.png";
import beeGirl from "../assets/myArt/beeGirl.png";
import bunny from "../assets/myArt/bunny.png";
import Artboard from "../assets/myArt/Artboard.png";
import freeURbody from "../assets/myArt/freeURbody.png";
import behance from "../assets/behance.png"
import insta from "../assets/insta.png"


function Art() {
  return (
    <section className=" section">
      <h1 className="colored-font big-font">My Art ,,</h1>
<br></br>
      <div id="my-art">

        <img className="art-image" id="bee" src={beeGirl} alt="Bee character" />
        <img className="art-image" id="free" src={freeURbody} alt="free your body" />
        <img className="art-image" id="art" src={Artboard} alt="art board" />
        <img className="art-image" id="bunny" src={bunny} alt="bunny on motorcycle" />

        <img className="art-image" id="aqua" src={aqua} alt="astronuate aqua" />

        <img className="art-image" id="coffee" src={coffee} alt="cofee girl" />


      </div>
      <br/>
      <div className="center "> 
      <span   className="colored-font  "> For More </span>
      <div className="icon">

      <a
              href="https://www.behance.net/m3tsm"
              target="_blank"
             >
              <embed src={behance} />
            </a>
            <a
              href="https://www.instagram.com/tasim_sh/"
              target="_blank"
             >
              <embed src={insta} />
            </a>
      </div>
     
     
      </div>


      <br/><br/>
    </section>
  );
}

export default Art;
