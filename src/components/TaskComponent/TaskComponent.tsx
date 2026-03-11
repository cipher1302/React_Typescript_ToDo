import scss from "./TaskComponent.module.scss";

interface Props {
  task: {
    name: string;
    description: string;
  };
}

const TaskComponent = ({ task }: Props) => {
  return (
    <div className={scss.task_div}>
      <h3 className={scss.title}>{task.name}</h3>
      <p className={scss.description}>{task.description}</p>
    </div>
  );
};

export default TaskComponent;
