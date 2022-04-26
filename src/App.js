import './App.css';
import Nav from './component/nav'
import Main from './component/main';
import KnowMe from './component/knowMe';
import MySkills from './component/mySkills';
import  MyProjects  from './component/myProjects';
function App() {
  return (
    <div className="App">

      <Nav/>
      <Main/>
      <KnowMe/>
      <MySkills/>
      <MyProjects/>
    
    </div>
  );
}

export default App;
