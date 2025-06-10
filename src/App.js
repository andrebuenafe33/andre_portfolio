import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Achievements from "./components/Achievements/achievement";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Skills/>
       <Works/>
       <Achievements/>
       <Footer/>
    </div>
  );
}

export default App;
