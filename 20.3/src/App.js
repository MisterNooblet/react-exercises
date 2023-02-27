import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      hoursDisplay: 0,
      minutesDisplay: 0,
      secondsDisplay: 0,
      hoursInput: 0,
      minutesInput: 0,
      secondsInput: 0,
    }
  }



  calcTime(e) {
    if (e.target.id === 'hours') {
      const value = e.target.value
      this.setState({ hoursDisplay: value, minutesDisplay: value * 60, secondsDisplay: value * 3600, hoursInput: value, minutesInput: 0, secondsInput: 0 })
    } else if (e.target.id === 'minutes') {
      const value = e.target.value
      this.setState({ hoursDisplay: value / 60, minutesDisplay: value, secondsDisplay: value * 60, hoursInput: 0, minutesInput: value, secondsInput: 0 })
    } else {
      const value = e.target.value
      this.setState({ hoursDisplay: value / 3600, minutesDisplay: value / 60, secondsDisplay: value, hoursInput: 0, minutesInput: 0, secondsInput: value })
    }

  }
  render() {
    return (
      <div className="clockmain">
        <div className="clockdisplay">
          <div>
            Hours:{this.state.hoursDisplay}
          </div>
          <div>
            Minutes:{this.state.minutesDisplay}
          </div>
          <div>
            Seconds:{this.state.secondsDisplay}
          </div>
        </div>
        <div className="clockinputs">
          <input onChange={(e) => { this.calcTime(e) }} type={'number'} id={'hours'} name={'hours'} value={this.state.hoursInput} />
          <input onChange={(e) => { this.calcTime(e) }} type={'number'} id={'minutes'} name={'minutes'} value={this.state.minutesInput} />
          <input onChange={(e) => { this.calcTime(e) }} type={'number'} id={'seconds'} name={'seconds'} value={this.state.secondsInput} />
        </div>
      </div>
    )
  }
}







export default App;
