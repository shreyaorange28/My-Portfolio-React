import "./App.css";
import {Home} from "./pages/home"
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { HashRouter as Router, Routes, Route} from "react-router-dom"

import { Layout } from "./Layout";

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} /* default path*//> 
            <Route path="/page1" element={<Page1/>} /* page1*//> 
            <Route path="/page2" element={<Page2/>} /* page2*//> 
          </Route>       
        </Routes>
      </Router>
    )
  }
  
  export default App;