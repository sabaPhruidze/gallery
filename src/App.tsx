import { useState } from "react";
import "./App.css";
import batumi from "./assets/batumi.jpg";
import hungary from "./assets/hungary.jpg";
import moscow from "./assets/moscow.jpg";
import paris from "./assets/paris.jpg";
import taiwan from "./assets/taiwan.jpg";
import viena from "./assets/viena.jpg";
function App() {
  const [active, setActive] = useState<number>(0);
  const data = [
    {
      content: "Batumi",
      img: batumi,
    },
    {
      content: "Hungary",
      img: hungary,
    },
    {
      content: "Paris",
      img: paris,
    },
    {
      content: "Moscow",
      img: moscow,
    },
    {
      content: "Taiwan",
      img: taiwan,
    },
    {
      content: "Viena",
      img: viena,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
        Choose desired place
      </h1>
      <div
        style={{
          width: "100vw",
          height: "650px",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: " center",
          backgroundColor: "black",
        }}
      >
        {data.map((item: any, idx: number) => (
          <div
            key={idx}
            style={{
              width: idx === active ? 1000 : 70,
              height: 650,
              backgroundImage: `url(${item.img})`,
              marginRight: 50,
              borderRadius: idx === active ? 30 : 100,
              overflow: "hidden",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "0.9s ease-in",
              cursor: idx === active ? "not-allowed" : "pointer",
              position: "relative",
            }}
            onClick={() => setActive(idx)}
          >
            <h2
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                color: "white",
                transition: "opacity 2s ease-in",
                opacity: idx === active ? 1 : 0,
              }}
            >
              {item.content}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
