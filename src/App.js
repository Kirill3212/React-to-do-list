import "./styles.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random() * 10000,
      task: "Wash the car",
      dateAndTime: "23 April",
    },
    {
      id: Math.random() * 10000,
      task: "Take out the trash",
      dateAndTime: "3 September",
    },
  ]);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  return (
    <div className="container">
      <h2 style={{ color: "greenyellow" }}>Personal tasks:</h2>
      <Input addNewTask={addNewTask}></Input>
      <List tasks={tasks} deleteTask={deleteTask}></List>
    </div>
  );
}

export default App;
