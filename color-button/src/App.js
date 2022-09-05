import "./App.css";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const newColor = color === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
