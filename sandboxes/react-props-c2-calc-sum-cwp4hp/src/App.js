import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

const meinArray = [1, 2, 345];

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA * meinArray[2]} + {valueB} = {sum}
    </h1>
  );
}
