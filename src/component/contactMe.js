import map from "../assets/mapOfEgypt.png";

function ContactMe(props) {
  const { visibility, myRef } = props;

  const submit = (e) => {
    alert("Thank you for contacting me I will respond soon :)");
  };

  return (
    <section id="contact-me" className="container section" ref={myRef}>
      <div>
        <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
          Contact me ,,
        </h1>
        <br />

        <p className={`textRise ${visibility ? "animate2" : ""}`}>
          {" "}
          <span className="html-tag">{"<P>"}</span> I am available for freelance
          work, if you have anything in mind contact me and we will work
          together to make it happen <span className="html-tag">{"</P>"}</span>{" "}
        </p>
        <form
          onSubmit={(e) => submit(e)}
          className={`textRise2 ${visibility ? "animate2" : ""}`}
          action="https://formsubmit.co/shaltoutDesigns@Gmail.com"
          method="POST"
        >
          <div>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="    Name"
              required
            />

            <span></span>
            <input
              name="e-mail"
              className="input"
              type="email"
              placeholder="   E-Mail"
              required
            />
          </div>

          <br />
          <input
            name="subject"
            id="subject"
            className="input"
            type="text"
            placeholder="    Subject"
            required
          />

          <div>
            <textarea
              name="Content"
              className="input"
              placeholder="    Message"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn">
            Send Message
          </button>

          <input
            type="hidden"
            name="_next"
            value="https://m3tesim.github.io/website/"
          />
        </form>
        <br />
      </div>

      <div className={` textRise  ${visibility ? "animate2" : ""}`}>
        <img id="image-map" src={map} alt="Map To Cairo" />
      </div>
    </section>
  );
}

export default ContactMe;
