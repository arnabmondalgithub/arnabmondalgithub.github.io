import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import From from "./components/From";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "textutils - light Mode";
    }
  };
  return (


    
    <>
      {/* // // <BrowserRouter> */}
         {/* <Navbar title="Textutils" AboutText="About Text Tutorials"/> */}
       <Navbar mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert} />
       {/* <About/> */}
        <div className="container my-3">
      {/* //   <Routes> */}
      {/* //   <Route exact path="/about" element={<About />} /> */}
           
             <From
                showAler={showAlert}
                heading="Enter the text to Analyze Below"
                mode={mode}
              />
             
           
      {/* //       </Routes> */}
      //   </div>
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
