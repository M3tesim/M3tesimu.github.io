import Me from "../assets/me.png";
function Main() {
  return (
    <section id="main" className="main-container">
      <div>
        <img id="profile-image" alt="profile pic" src={Me} />
      </div>

      <header className="center">
        <div className="shifted">
          <h1 className="big-font animate ">
            {" "}
            <span className="colored-font">Hi,</span> I'm Moatasem Shaltout
          </h1>
          <h2 className="big-font  animate ">
            {" "}
            SoftWare Developer / <span className="colored-font">artist</span>
          </h2>
          <h6 className="gray-font  animate  ">
            {" "}
            <span className="html-tag">{" <Title>"}</span> React/NextJS{" "}
            <span className="html-tag">{" </Title>"} </span>{" "}
          </h6>
          <button className="btn  animate ">
            {" "}
            <a
              className="links"
              href="https://drive.google.com/file/d/188JKlvhzsCDapBbNS0drSWHaTRUy17vB/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>{" "}
          </button>
        </div>
      </header>
    </section>
  );
}

export default Main;
