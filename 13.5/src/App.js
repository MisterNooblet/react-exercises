import { useEffect, useRef } from "react";

function App() {
  const input = useRef('')
  useEffect(() => {
    input.current.focus()
  }, [])
  return (
    <div>
      <input ref={input} type='text'></input>
    </div>
  );
}

export default App;
