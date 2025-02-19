import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (

    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <div style={{ position: "absolute", bottom: 20, display: "flex", left: 50, gap: 20, padding: 10 }}>
        <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>BLUE</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>GREEN</button>
        <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>RED</button>
        <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>yellow</button>
        <button onClick={() => setColor("indigo")} style={{ backgroundColor: "indigo" }}>VOILET</button>
      </div>
    </div >

  );
}

export default App;
