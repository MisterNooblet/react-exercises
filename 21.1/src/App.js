import { Component } from "react";
import Box from "./components/Box";


class App extends Component {
  constructor() {
    super()
    this.state = {
      animation: '',
      showBoxes: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'box0' })
    }, 1000)
    setTimeout(() => {
      this.setState({ showBoxes: false })
    }, 4000)
  }

  render() {
    if (this.state.showBoxes) {
      return (
        <div>
          <Box width={100} className={this.state.animation} />
          <Box width={200} className={this.state.animation} />
          <Box width={300} className={this.state.animation} />
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default App;
