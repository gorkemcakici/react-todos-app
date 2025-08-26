import { useState } from "react";

const Main = ({ todoList, setTodoList, filteredTodos }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const checkCompleted = (id, e) => {
    if (e.target.checked === true) {
      setTodoList(
        todoList.map((item) =>
          item.id === id ? { ...item, completed: true } : item
        )
      );
    } else {
      setTodoList(
        todoList.map((item) =>
          item.id === id ? { ...item, completed: false } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setTodoList(todoList.filter((i) => i.id !== id));
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = (id) => {
    if (editingText.trim() === "") {
      removeItem(id);
    } else {
      setTodoList(
        todoList.map((item) =>
          item.id === id ? { ...item, name: editingText.trim() } : item
        )
      );
    }
    cancelEditing();
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            className={`${todo.completed ? "completed" : ""} ${
              editingId === todo.id ? "editing" : ""
            }`}
            key={todo.id}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed === true ? true : false}
                onChange={(e) => checkCompleted(todo.id, e)}
              />
              <label onDoubleClick={() => startEditing(todo.id, todo.name)}>
                {todo.name}
              </label>
              <button
                className="destroy"
                onClick={() => removeItem(todo.id)}
              ></button>
            </div>
            {editingId === todo.id && (
              <input
                className="edit"
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={() => saveEdit(todo.id)}
                onKeyDown={(e) => handleKeyPress(e, todo.id)}
                autoFocus
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
