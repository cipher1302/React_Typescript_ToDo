import scss from "./TaskContainer.module.scss";
import TaskComponent from "../TaskComponent/TaskComponent";
import type { TodoItem } from "../MainComponent/types/types";

interface Props {
  todo: TodoItem[];
}

const TaskContainer = ({ todo }: Props) => {
  return (
    <div className={scss.task_container}>
      {todo.map((task) => {
        return <TaskComponent key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskContainer;
