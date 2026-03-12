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

  const convertToB64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);

      reader.onerror = reject;
    });
  };

  const handleForm = async (data: FormInterface) => {
    const file =
      data.image instanceof File ? data.image : (data.image?.[0] ?? null);

    const image = file ? await convertToB64(file) : null;

    const newTodoItem: TodoItem = {
      id: nanoid(),
      name: data.name,
      description: data.description,
      image,
    };

    setTodo((prev) => [...prev, newTodoItem]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (id: string) => {
    setTodo((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      }),
    );
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent handleForm={handleForm} />
      <TaskContainer todo={todo} onDelete={handleDelete} />
    </>
  );
}

export default App;
