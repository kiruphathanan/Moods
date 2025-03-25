import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MoodDisplay from './MoodDisplay';
function App() {
  const[mood,setMood]=useState("");
  return (
   <div className={`container ${mood} `}>
      <h1>How are You Feeling Today</h1>
      <div className="button">
        <button onClick={()=>setMood("happy")}>happy😊</button>
        <button onClick={()=>setMood("sad")}>sad😒</button>
        <button onClick={()=>setMood("crying")}>crying😭</button>
        <button onClick={()=>setMood("sleepy")}>sleepy😪</button>
      </div>
      <MoodDisplay  mood={mood} />

   </div>
  );
}

export default App;
