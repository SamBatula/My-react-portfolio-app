import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Proficiency from "./components/Proficiency";
import Projects from "./components/Projects";

// commented out to remove contact page import Contact from "./components/Contact";


// To display each class AKA jsx file
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Proficiency />
      <Projects />
      {/* Commented out to take out contacts page
      () <Contact /> */}
    </div>
  );
}

export default App;
