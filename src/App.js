import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Proficiency from "./components/Proficiency";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// To display each class AKA jsx file
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Proficiency />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
