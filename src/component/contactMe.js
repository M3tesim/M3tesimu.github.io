
function ContactMe (props){
  const {visibility,myRef}=props

    return(

  <section id="contact-me" className="container section" ref={myRef}> 

<div>
<h1 className="colored-font big-font">Contact me ,,</h1>
<br/>

<p> <span className="html-tag">{"<>"}</span>Email me at M3tsmSh@gmail.com <span className="html-tag">{"</>"}</span> </p>
<br/>


</div>

        </section>
    )
}



export default ContactMe;