import "./App.scss";
//import React, { useLayoutEffect, useRef, useState } from "react";

import Nav from "./component/nav";
import Main from "./component/main";
import KnowMe from "./component/knowMe";
import MySkills from "./component/mySkills";
import Cards from "./component/cards";
import Art from "./component/art";
import ContactMe from "./component/contactMe";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: mySkillsRef, inView: mySkillsVisibility } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: KnowMeRef, inView: KnowMeVisibility } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: MyProjectsRef, inView: MyProjectsVisibility } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: ArtRef, inView: ArtVisibility } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: ContactMeRef, inView: ContactMeVisibility } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="App">
      <Nav
        mySkillsVisibility={mySkillsVisibility}
        KnowMeVisibility={KnowMeVisibility}
        MyProjectsVisibility={MyProjectsVisibility}
        ArtVisibility={ArtVisibility}
        ContactMeVisibility={ContactMeVisibility}
      />
      <Main />
      <KnowMe  visibility={KnowMeVisibility} myRef={KnowMeRef}/>

      <MySkills visibility={mySkillsVisibility} myRef={mySkillsRef} />
      <Cards  visibility={MyProjectsVisibility} myRef={MyProjectsRef}/>
      <Art visibility={ArtVisibility} myRef={ArtRef} />
      <ContactMe visibility={ContactMeVisibility} myRef={ContactMeRef} />
    </div>
  );
}

export default App;
