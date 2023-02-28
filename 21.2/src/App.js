import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countriesToDisplay: [],
      inputVal: 's',
    };
  }

  async fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    let tempArr = [];
    data.forEach((element) => tempArr.push(element.name.common));
    this.setState({ countries: tempArr });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputVal !== this.state.inputVal) {
      console.log('changed');
      this.setState({
        countriesToDisplay: this.state.countries.filter((country) =>
          country.toLowerCase().includes(this.state.inputVal.toLowerCase())
        ),
      });
    }
  }
  render() {
    return (
      <div className="styles">
        <input
          onChange={(e) => this.setState({ inputVal: e.target.value })}
          type="text"
          id="search"
          name="search"
          value={this.state.inputVal}
        />
        {this.state.countriesToDisplay.length > 0 &&
          this.state.countriesToDisplay.map((name) => <div>{name}</div>)}
      </div>
    );
  }
}

export default App;
