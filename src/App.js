import './App.css';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Myskills from './components/Myskills';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <div className="whole">
    <Navbar/>
    <Maincontent/>
    <hr className="hline" />
    <About/>
    <hr className="hline" />
    <Myskills/>
    <hr className="hline" />
    <Projects/>
    <hr className="hline" />
    <Contact/>
    </div>
    </>
  );
}

export default App;
