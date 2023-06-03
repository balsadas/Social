import { useState } from "react";
import './App.css';
import Home from './page/Home'
import Into from "./page/Into";
import Explore from "./page/Explore";
import Router from "./Routes/Router";


function App() {

  return (
    <div className="bg-[#F0EEF6] px-5">
      <Router />
    </div>
  );
}

export default App;
