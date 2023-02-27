import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ]
    }
  }

  updateProgress(name) {
    let result = this.state.data.map(task => { return task.name === name ? { ...task, completed: !task.completed } : task })
    console.log(result);
    this.setState({ data: result })
  }

  render() {
    return (
      this.state.data.map(task => <h1 onClick={() => this.updateProgress(task.name)}>{task.name} <span>{task.completed ? '✅' : '❎'}</span></h1>)
    )
  }
}



// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );
// }

export default App;
