import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
   </div>
  );
}

export default App;
