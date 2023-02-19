import { useRef } from "react";

function App() {
  const video = useRef(null)
  const videoManger = (action) => {
    switch (action) {
      case 'play':
        video.current.play()
        break;
      case 'pause':
        video.current.pause()
        break;

      default:
        break;
    }
  }
  return (
    <div className="App">
      <video ref={video} src='https://static.videezy.com/system/resources/previews/000/044/895/original/110102_1.mp4' width="750" height="500">
      </video>
      <button onClick={() => { videoManger('play') }}>Play</button><button onClick={() => { videoManger('pause') }}>Pause</button>
    </div>
  );
}

export default App;
