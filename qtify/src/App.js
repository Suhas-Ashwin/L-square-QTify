import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <div>
      <Navbar/> 
      {console.log("Inside App component")}
    </div>
  );
}

export default App;
