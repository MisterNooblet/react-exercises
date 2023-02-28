import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null,
    toggle: false,
  };

  controller = new AbortController();
  signal = this.controller.signal;

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toggle !== prevState.toggle) {
      if (this.state.toggle) {
        this.fetchData();
      } else {
        this.cancelDataFetch();
      }
    }
  }

  componentWillUnmount() {
    this.cancelDataFetch();
  }

  fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all', {
      signal: this.signal,
    });
    const data = await response.json();
    let tempArr = [];
    data.forEach((element) => tempArr.push(element.name.common));
    this.setState({ data: tempArr });
  };

  cancelDataFetch = () => {
    this.controller.abort();
    console.log('aborted');
  };

  handleToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  render() {
    const { toggle, data } = this.state;

    return (
      <div>
        <button onClick={this.handleToggle}>{toggle ? 'Hide' : 'Show'}</button>
        {toggle && data && (
          <div>
            <h1>Data fetched successfully:</h1>
            <ul>
              {data.map((name) => (
                <li>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
