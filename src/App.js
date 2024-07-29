import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light')

  const toggleMode=()=>{
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#1E3A4C';
        // #212529
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='#BACCD7';
      }
  }

  return (
    <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        </div>
    </>
  
  );
}

export default App;
