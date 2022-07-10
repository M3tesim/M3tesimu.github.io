import map from '../assets/mapOfEgypt.png'

function ContactMe(props) {
  const { visibility, myRef } = props;

  return (
    <section id="contact-me" className="container section" ref={myRef}>
      <div>
        <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
          Contact me ,,
        </h1>
        <br />
        <form className={`  textRise2 ${visibility ? "animate2" : ""}`}>
          <div>
            <input className="input" type="text" placeholder="    Name" />

            <span></span>
            <input className="input" type="email" placeholder="   E-Mail" />
          </div>

          <br />
          <input id="subject" className="input" type="text" placeholder="    Subject" />


          <div>

            <textarea className="input" placeholder="    Message" />
          </div>
          <br />
          <button type="submit" className="btn">
          
            Send Message
          </button>
        </form>
        <br />
      </div>

      <div>
        <img  id="image-map" src={map}/>
      </div>
    </section>
  );
}

export default ContactMe;
