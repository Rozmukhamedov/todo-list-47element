import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Button, Input } from "./component";
import { getStorage, setStorage } from "./untils/storage";
import { TodoList } from "./container";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const savedTodos: any = getStorage("todos");
    setTodos(JSON.parse(savedTodos));
  }, []);

  const addTodo = () => {
    if (!todo) {
      alert("Add task in Input");
      return;
    }
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, done: false, edit: false },
    ];
    setTodos(newTodos);
    setStorage("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodos);
    setStorage("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id: number) => {
    const newTodos = todos.map((todo: any) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    setStorage("todos", JSON.stringify(newTodos));
  };

  const editTask = (task: string, id: number) => {
    const newTodos = todos.map((todo: any) =>
      todo.id === id ? { ...todo, task, edit: !todo.edit } : todo
    );
    setTodos(newTodos);
    setStorage("todos", JSON.stringify(newTodos));
    console.log(123)
  };

  const editTodo = (id: number) => {
    console.log(id)
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  };

  return (
    <div className="app">
      <h2>To-do list</h2>
      <div className="flex">
        <Input
          value={todo}
          className={"input"}
          name="title"
          onChange={setTodo}
          placeholder="Enter Something..."
        />
        <Button type="button" onClick={addTodo}>
          add
        </Button>
      </div>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
