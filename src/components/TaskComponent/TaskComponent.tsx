import type { TodoItem } from "../MainComponent/types/types";
import scss from "./TaskComponent.module.scss";

interface Props {
  task: TodoItem;
  onDelete: (id: string) => void;
}

const TaskComponent = ({ task, onDelete }: Props) => {
  return (
    <div className={scss.task_div}>
      <img
        className={scss.image}
        src={task.image || "/default.png"}
        alt={task.name}
      />
      <h3 className={scss.title}>{task.name}</h3>
      <p className={scss.description}>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskComponent;
