import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import C1 from "./components/c1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="p-4">
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
