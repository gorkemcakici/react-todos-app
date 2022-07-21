const Main = ({ todoList, setTodoList, filteredTodos }) => {
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
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li className={todo.completed ? "completed" : "view"} key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed===true?true:false}
                onChange={(e) => checkCompleted(todo.id, e)}
              />
              <label>{todo.name}</label>
              <button
                className="destroy"
                onClick={() => removeItem(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
