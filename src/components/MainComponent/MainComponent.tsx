import { useEffect, useState } from "react";
import FormComponent from "../FormComponent/FormComponent";
import scss from "./MainComponent.module.scss";
import type { FormInterface, TodoItem } from "./types/types";
import { nanoid } from "nanoid";
import TaskComponent from "../TaskComponent/TaskComponent";

const MainComponent = () => {
  const [todo, setTodo] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleForm = (data: FormInterface) => {
    const newTodoItem: TodoItem = {
      id: nanoid(),
      ...data,
    };

    setTodo((prev) => [...prev, newTodoItem]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

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
