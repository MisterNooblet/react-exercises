import { useState, useEffect } from "react";

function App() {
  const [favouriteColor, setFavouriteColor] = useState('black')

  useEffect(() => {
    setTimeout(() => {
      setFavouriteColor('green')
    }, 1000)
  }, [])
  return (
    <div>
      <h1>My favourite color is {favouriteColor}</h1>
      <div id=""></div>
    </div>
  );
}

export default App;
