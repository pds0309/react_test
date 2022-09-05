import "./App.css";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [buttonDisabled, setBUttonDisabld] = useState(false);

  const newColor = color === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        disabled={buttonDisabled}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        onChange={(event) => setBUttonDisabld(event.target.checked)}
      />
    </div>
  );
}

export default App;
