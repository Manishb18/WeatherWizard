import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { Indexpage } from "./Components/Indexpage";
import { Mainpage } from "./Components/Mainpage";
import { Aboutpage } from "./Components/Aboutpage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Documentationpage } from "./Components/Documentationpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Indexpage />}></Route>
          <Route path="about" element={<Aboutpage />}></Route>
          <Route path="documentation" element={<Documentationpage />}></Route>
        </Route>
        <Route path="/main" element={<Mainpage />}> </Route>
      </Routes>

    </Router>
  );
}

export default App;
