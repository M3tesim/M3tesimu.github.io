import Me from '../assets/me.png'
function Main (){
    return(

  <section className="container" > 


    <img  id="profile-image"  alt='profile pic'  src={Me}/>

<header className="center"> 
<div className="shifted">

    <h1 className="big-font shifted"  > <span className="colored-font" id="hi-word">Hi,</span>I'm Moatasem Shaltout</h1>
    <h2 className="big-font"> SoftWare Engineer / <span className="colored-font">artist</span></h2>
    <br/>
    <h6  className="gray-font"> <span className="html-tag">{" <Title>"}</span> Front End React Developer <span className="html-tag">{" </Title>"} </span> </h6>
    <button className='btn'>Contact me</button>
    </div>
</header>



        </section>
    )
}



export default Main;