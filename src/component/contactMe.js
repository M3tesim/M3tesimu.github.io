import map from '../assets/mapOfEgypt.png'
import{useState} from "react";

function ContactMe(props) {
  const { visibility, myRef } = props;
  const [status,setStatus]=useState("submit")

 /* const handleSubmit = async (e)=>{
    e.preventDefault();
    setStatus("sending...");

    const {name, email, subject,message}=e.target.elements;

    let details={
      name:name.value,
      email:email.value,
      message:message.value
    };

    let response = await fetch ("http://localhost:3000/website",{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),

    })
    setStatus("Submit");
    let result = await response.json();

    alert(result.status)


  }
  */
  const submit = (e)=>{
    alert("form submitties");
  }



  return (
    <section id="contact-me" className="container section" ref={myRef}>
      <div>
        <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
          Contact me ,,
        </h1>
        <br />
        <form    onSubmit={(e)=>submit(e)} className={`  textRise2 ${visibility ? "animate2" : ""}`} action="https://formsubmit.co/shaltoutDesigns@Gmail.com" method="POST">
          <div>
            <input name="name" className="input" type="text" placeholder="    Name" required />

            <span></span>
            <input  name ="e-mail"className="input" type="email" placeholder="   E-Mail"  required/>
          </div> 

          <br />
          <input  name ="subject" id="subject" className="input" type="text" placeholder="    Subject" required />


          <div>

            <textarea name="Content" className="input" placeholder="    Message" required />
          </div>
          <br />
          <button type="submit" className="btn">
          
            Send Message
          </button>

          <input type="hidden" name="_next" value="https://m3tesim.github.io/website/"/>


        </form>
        <br />
      </div>

      <div className={` textRise  ${visibility ? "animate2" : ""}`}>
        <img  id="image-map" src={map}/>
      </div>
    </section>
  );
}

export default ContactMe;
