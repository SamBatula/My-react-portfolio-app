import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Proficiency from "./components/Proficiency";

// To display each class AKA jsx file
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Proficiency />
    </div>
  );
}

export default App;
