import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {description}
      <SpecialButton>
        Adopt <strong>{name}</strong>
      </SpecialButton>
    </>
  );
}

function SpecialButton({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p> A playful kitten </p>} />
      <Animal emoji="🐈" name="Mittens" />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={
          <>
            <p> super relaxed turtle</p>
            <ul>
              <li>eats lettuce</li>
              <li>is very slow</li>
            </ul>
          </>
        }
      />
      <Animal emoji="🐣" name="Chick Norris" />
    </main>
  );
}
