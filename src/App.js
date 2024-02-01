import "./App.css";

function App() {
  const colorPicker = () => {
    const randomColor =
    Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    colorPicker.innerHTML = "#" + randomColor
  };

  return (
    <div className="App">
      <div>
      <div className="colorCard">
        <div className="color"></div>
        <div className="bottomCard"></div>
      </div>
      <div className="button">
        <button onClick={colorPicker} className="btn">New Color!</button>
      </div>  
      </div>
    </div>
  );
}

export default App;
