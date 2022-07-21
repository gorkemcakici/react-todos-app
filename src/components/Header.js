import { useState, useEffect } from "react";
const Header = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const changeTodoList = (e) => {
    e.preventDefault();
    if (todo !== "" && todo !== null) {
      const data = {
        id: Date.now(),
        name: todo,
        completed: false,
      };
      setTodoList([...todoList, data]);
      setTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={changeTodoList}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
