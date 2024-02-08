import "./App.css";
import useGenerateColor from "./Components/useGenerateColor";

function App() {
  const { color, generateColor } = useGenerateColor();

  return (
    <div className="App">
      <div>
        <div className="colorCard">
          <div
            className="color"
            style={{
              backgroundColor: "#" + color,
            }}
          ></div>
          <div className="bottomCard"></div>
        </div>
        <div className="button">
          <button onClick={generateColor} className="btn">
            New Color!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
