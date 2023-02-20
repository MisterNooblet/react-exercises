import { useEffect, useState } from "react";

function App() {
  const [boxColor, setBoxColor] = useState('black')
  const [radius, setRadius] = useState(0)
  const [colors, setColors] = useState(['green', 'blue', 'yellow', 'orange'])

  const changeColor = () => {
    setBoxColor(colors.pop())
  }

  useEffect(() => {
    if (colors.length > 0) {
      setTimeout(() => {
        setBoxColor(colors.pop())
        console.log(colors);
      }, 1000);
    } else {
      setRadius(200)
    }

  }, [boxColor, colors])
  return (
    <div style={{ backgroundColor: boxColor, borderRadius: `${radius}px` }}>
    </div>
  );
}

export default App;
