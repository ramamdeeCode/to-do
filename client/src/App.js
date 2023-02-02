import ListHeader from "./components/ListHeader";
import { useState, useEffect } from "react";
import ListItem from "./components/ListItem";

function App() {
  const userEmail = " rama@yahoo.com";
  const [task, setTasks] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const data = await response.json();

      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getData, []);
  console.log(task);

  const sortTaskByDate = task?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      <ListHeader listName={"🏝️ Holiday tick list"} getData={getData} />
      {sortTaskByDate?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
}

export default App;
