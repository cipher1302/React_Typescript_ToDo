import { useState } from "react";
import FormComponent from "../FormComponent/FormComponent";
import scss from "./MainComponent.module.scss";
import type { FormInterface, TodoItem } from "./types/types";
import { nanoid } from "nanoid";
import TaskComponent from "../TaskComponent/TaskComponent";

const MainComponent = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const handleForm = (data: FormInterface) => {
    const newTodoItem: TodoItem = {
      id: nanoid(),
      ...data,
    };

    setTodo((prev) => [...prev, newTodoItem]);
    console.log(todo);
  };

  return (
    <div className={scss.container_main}>
      <FormComponent onSubmit={handleForm} />
      {todo.map((task) => {
        return <TaskComponent key={task.id} task={task} />;
      })}
    </div>
  );
};

export default MainComponent;
