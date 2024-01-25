import { useState } from "react";

import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ rolls, onRoll }) {
  //const [rolls, setRolls] = useState([]);

  function handleClick() {
    onRoll();
  }

  const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={handleClick}>
      <D6 value={currentRollValue} />
    </button>
  );
}
