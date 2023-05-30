import "./App.css";
import batumi from "./assets/batumi.jpg";
import hungary from "./assets/hungary.jpg";
import moscow from "./assets/moscow.jpg";
import paris from "./assets/paris.jpg";
import taiwan from "./assets/taiwan.jpg";
import viena from "./assets/viena.jpg";
function App() {
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
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: " center",
        }}
      >
        {data.map((item: any, idx: number) => (
          <div
            key={idx}
            style={{
              width: 100,
              height: 600,
              backgroundImage: `url(${item.img})`,
              marginRight: 50,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <h4>{item.content}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
