import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [spinnerShown, setSpinnerShown] = useState(true)
  const [seconds, setSeconds] = useState(10)
  useEffect(() => {
    setTimeout(() => {
      seconds > 0 ? setSeconds(seconds - 1) : setSpinnerShown(false)
    }, 1000)
  }, [seconds])
  return (
    <>
      <div class="center">
        <div className="time">{seconds}</div>
        {spinnerShown && <Spinner />}
      </div>
    </>
  );
}

export default App;
