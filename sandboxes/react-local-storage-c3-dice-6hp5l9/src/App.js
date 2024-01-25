import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { useState } from "react";
import { getD6Roll } from "./utils";

export default function App() {
  const [rolls, setRolls] = useState([]);

  function handleRoll() {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  }
  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
