import { useState, useEffect } from "react";
import Box from "./components/Box";

function App() {
  const [animation, setAnimation] = useState('')
  const [showBoxes, setShowBoxes] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setAnimation('box0')
    }, 1000)
    setTimeout(() => {
      setShowBoxes(false)
    }, 4000)
  }, [])

  if (showBoxes) {
    return (
      <div>

        <Box width={100} className={animation} />
        <Box width={200} className={animation} />
        <Box width={300} className={animation} />
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
}

export default App;
