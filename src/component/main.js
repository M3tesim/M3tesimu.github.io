import Me from '../assets/me.png'
function Main (){
    return(

  <section  id ="main" className="main-container" > 


    <img  id="profile-image"  alt='profile pic'  src={Me}/>

<header className="center"> 
<div className="shifted">

    <h1 className="big-font "  > <span className="colored-font" id="hi-word">Hi,</span> I'm Moatasem Shaltout</h1>
    <h2 className="big-font"> SoftWare Engineer / <span className="colored-font">artist</span></h2>
    <h6  className="gray-font"> <span className="html-tag">{" <Title>"}</span> Front End React Developer <span className="html-tag">{" </Title>"} </span> </h6>
    <button className='btn'  >  <a  className='links' href='https://docs.google.com/document/d/1YKnWZzStboZ20Xi_I5m2dbzhM6_LpPqpH2Tk8FGQxGE/edit?usp=sharing' target="_blank" rel="noreferrer">View CV</a> </button>
    </div>
</header>



        </section>
    )
}



export default Main;