import { useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css'
import { Form } from "./components/form";
function App() {
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme  =  () => {
    setTheme(corr => (corr  === "light" ? "dark" : "light"));
  }
  return (
    <div className="App" id={theme}>
      <Form />
      <br />
      <br />
      <ReactSwitch onChange={toggleTheme} checked ={theme === "dark"} />
    </div>
  );
}

export default App;
