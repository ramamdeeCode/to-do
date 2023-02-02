import ListHeader from "./components/ListHeader";
import { useState, useEffect } from "react";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";

function App() {
  const userEmail = " rama@yahoo.com";
  const [task, setTasks] = useState(null);

  const authToken = false;
  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const data = await response.json();

      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) getData();
  }, []);
  console.log(task);

  const sortTaskByDate = task?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"🏝️ Holiday tick list"} getData={getData} />
          {sortTaskByDate?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
