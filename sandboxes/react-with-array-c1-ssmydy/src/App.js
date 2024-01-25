import Card from "./components/Card";

const fruits = [
  {
    id: 1337,
    name: "🍌 Banana",
    color: "yellow",
  },
  {
    id: 1338,
    name: "🍎 Apple",
    color: "red",
  },
  {
    id: 1339,
    name: "🍇 Grape",
    color: "purple",
  },
  {
    id: 1340,
    name: "🍊 Orange",
    color: "orange",
  },
  {
    id: 1341,
    name: "🍓 Strawberry",
    color: "red",
  },
  {
    id: 1342,
    name: "🍍 Pineapple",
    color: "yellow",
  },
];

export default function App() {
  return (
    <div className="app">
      {fruits.map((f) => {
        console.log(f);
        return <Card key={f.id} fruit={f} />;
      })}
      {/* <Card name="🍌 banana" /> */}
    </div>
  );
}
