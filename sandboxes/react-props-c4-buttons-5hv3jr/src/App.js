import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <div>
      <Button text="Try me!" color="green" onClick={handleClick} />
      <Button
        text="Try me not!"
        color="orange"
        onClick={handleClick}
        disabled
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  console.log(onClick);
  return (
    <button onClick={onClick} disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  );
}
