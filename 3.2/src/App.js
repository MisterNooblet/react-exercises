import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["hello", "world"]
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!"
  return (
    <div className="App">
      <h1>{data[0]} {data[1]}</h1>
      <h2>{number1} + {number2}= {number1 + number2}</h2>
      <h3>The string's length is {string.length}</h3>
    </div>
  );
}

export default App;
