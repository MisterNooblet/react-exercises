import { useRef } from 'react'
import color1 from './assets/color1.jpg'
import color2 from './assets/color2.jpg'
import bw1 from './assets/bw1.jpg'
import bw2 from './assets/bw2.jpg'

function App() {
  const img1 = useRef(null)
  const img2 = useRef(null)

  const colorManager = (image) => {
    switch (image) {
      case 1:
        img1.current.src = bw1
        break;
      case 2:
        img2.current.src = bw2
        break;
      case 3:
        img1.current.src = color1
        break;
      case 4:
        img2.current.src = color2
        break;

      default:
        break;
    }
  }
  return (
    <div className="img_box">
      <img onMouseOver={() => { colorManager(1) }} onMouseLeave={() => { colorManager(3) }} ref={img1} src={color1} alt="img1" />
      <img onMouseOver={() => { colorManager(2) }} onMouseLeave={() => { colorManager(4) }} ref={img2} src={color2} alt="img2" />
    </div>
  );
}

export default App;
