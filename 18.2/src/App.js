import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoCard from "./components/TodoCard";
import LSM from "./utils/LocalStorageManager";

function App() {
  LSM.init()
  const ref = React.createRef();
  const [tasks, setTasks] = useState(LSM.pull('todos'))
  const addTask = () => {
    const value = ref.current.value
    setTasks(LSM.addTask({ name: value, done: false, id: `${value.split(' ').join('')}${Math.random()}` }))
    ref.current.value = ''
  }
  return (
    <>
      <main>
        <header>
          <Header />
        </header>
      </main>
      <div className="inputfield">
        <h3>What should we do next?</h3>
        <Input ref={ref} />
        <button onClick={addTask}>Add to list</button>
      </div>
      <div>
        {tasks.map(element => <TodoCard tasks={setTasks} key={element.id} task={element.name} done={element.done} id={element.id} />)}
      </div>
    </>
  );
}

export default App;
