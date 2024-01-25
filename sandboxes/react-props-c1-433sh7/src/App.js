import "./styles.css";

export default function App() {
  return <Greeting name="Testbuddy" />;
}

function Greeting({ name }) {
  return <h1>Hallo, {name}!</h1>;
}
