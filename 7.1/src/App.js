import Button from "./components/Button";
import { useState } from "react";

function App() {
  const colors = ["blue", "red", "yellow"];
  const [currentColor, setCurrentColor] = useState('')

  const changeH1ColorValue = color => {
    setCurrentColor(color)
  }
  return (
    <div>
      {colors.map(element => {
        return (<Button onClickColorButton={changeH1ColorValue} key={element} color={element} />);
      })}
      <h1>Current selected color is : {currentColor} </h1>
    </div>
  );
}

export default App;
