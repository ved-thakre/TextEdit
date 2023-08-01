import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import Contact from './Components/Contact';

function App() {
  const[mode, setMode] = useState('light'); // Weather dark mode enable or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#282c34';
      // showAlert("Dark modehas been Enabled", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      // showAlert("Light modehas been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
          <Navbar title = "TextEdit" mode = {mode} toggleMode = {toggleMode}/>
          <Alert alert = {alert}/>
          <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<Textarea heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/> }/>
            <Route exact path="/contact" element={<Contact mode = {mode} />}/>
          </Routes>  
          </div>
      </Router>    
    </>
  );
}

export default App;
