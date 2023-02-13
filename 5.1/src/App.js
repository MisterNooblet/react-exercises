import React from "react";
import Buttons from "./components/Buttons";
function App() {
  const buttons = {
    btn1: 'Important',
    btn1class: '.btn-bold',
    btn2: 'Not Important'
  }
  return (
    <React.Fragment>
      <Buttons buttonNames={buttons} />
    </React.Fragment>
  );
}

export default App;
