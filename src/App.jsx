import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BottomBar from "./Components/BottomBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full">
      <Navbar />
      <Outlet />
      <BottomBar />
    </div>
  );
}

export default App;
