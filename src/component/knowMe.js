import icon1 from "../assets/programin-icon1.png";
function KnowMe(props) {
  const { visibility, myRef } = props;

  return (
    <section id="know-me" className="container section" ref={myRef}>
      <div>
        <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
          Know me ,,
        </h1>
        <br />

        <p className={` textRise ${visibility ? "animate2" : ""}`}>
          {" "}
          <span className="html-tag">{"<P>"}</span> I’m software Engineer in the
          morning and artist at night, I’m Specialized in front end development
          using modern Technologies like React{" "}
          <span className="html-tag">{"</P>"}</span>{" "}
        </p>
        <br />

        <p className={` textRise ${visibility ? "animate2" : ""}`}>
          <span className="html-tag">{"<P>"}</span> I take user Experience
          seriously when I design and implement web Applications, Combining my
          experience in design and programming to come out with the best result{" "}
          <span className="html-tag">{"</P>"}</span>
        </p>
      </div>
      <div className={`  textRise2 ${visibility?'animate2':""}`}>
        <img className="art-image" src={icon1} alt="icon" id="icon-1" />
      </div>
    </section>
  );
}

export default KnowMe;
