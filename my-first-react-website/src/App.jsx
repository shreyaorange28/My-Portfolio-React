import "./App.css";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

// Import Pages
import {Home} from "./pages/home";
import { AboutMe } from "./pages/aboutme";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

import { Layout } from "./Layout";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} /* default path*//> 
            <Route path="/aboutme" element={<AboutMe/>} /*about me*//> 
            <Route path="/projects" element={<Projects/>} /* projects*//> 
            <Route path="/contact" element={<Contact/>} /* projects*//> 

          </Route>       
        </Routes>
      </Router>
    )
  }
  
  export default App;