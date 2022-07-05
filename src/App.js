import "./App.scss";
//import React, { useLayoutEffect, useRef, useState } from "react";

import Nav from "./component/nav";
import Main from "./component/main";
import KnowMe from "./component/knowMe";
import MySkills from "./component/mySkills";
import MyProjects from "./component/myProjects";
import Art from "./component/art";
import ContactMe from "./component/contactMe";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: mySkillsRef, inView: mySkillsVisibility } = useInView();
  const { ref: KnowMeRef, inView: KnowMeVisibility } = useInView();
  const { ref: MyProjectsRef, inView: MyProjectsVisibility } = useInView();
  const { ref: ArtRef, inView: ArtVisibility } = useInView();
  const { ref: ContactMeRef, inView: ContactMeVisibility } = useInView();

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
      <MyProjects  visibility={MyProjectsVisibility} myRef={MyProjectsRef}/>
      <Art visibility={ArtVisibility} myRef={ArtRef} />
      <ContactMe visibility={ContactMeVisibility} myRef={ContactMeRef} />
    </div>
  );
}

export default App;
