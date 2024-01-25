import React from "react";
import "./styles.css";

function Pet({ sound, name, emoji, onPet, isHungry }) {
  return (
    <div onClick={onPet}>
      {isHungry ? "Feed me!" : sound}{" "}
      <span role="img" aria-label={name}>
        {emoji}
      </span>
    </div>
  );
}

export default function App() {
  function handlePet() {
    console.log(`Thanks for petting me`);
  }

  return (
    <div>
      <Pet sound="Meow" name="cat" emoji="🐈" onPet={handlePet} />
      <Pet sound="Wow" name="dog" emoji="🐕" onPet={handlePet} />
      <Pet sound="Muh" name="cow" emoji="🐮" onPet={handlePet} isHungry />
    </div>
  );
}
