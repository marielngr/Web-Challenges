import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Dies</Button>
      <Button>ist</Button>
      <Button>ein</Button>
      <Button>Test!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
