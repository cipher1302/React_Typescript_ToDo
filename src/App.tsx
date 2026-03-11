import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import { useState, useEffect } from "react";
import type {
  TodoItem,
  FormInterface,
} from "./components/MainComponent/types/types";
import { nanoid } from "nanoid";
import TaskContainer from "./components/TaskContainer/TaskContainer";
function App() {
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
    <>
      <HeaderComponent />
      <MainComponent handleForm={handleForm} />
      <TaskContainer todo={todo} />
    </>
  );
}

export default App;
