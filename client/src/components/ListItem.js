import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

function ListItem({ task }) {
  return (
    <li className="list-item">
      <div className="info-conctainer">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit">Edit</button>
        <button className="delete">DELETE</button>
      </div>
    </li>
  );
}

export default ListItem;
