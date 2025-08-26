const MainFooter = ({ todoList, setTodoList, status, setStatus }) => {
  const unCompleted = todoList.filter((todo) => todo.completed === false);
  const completed = todoList.filter((todo) => todo.completed === true);
  const clickStyle = (e) => {
    setStatus(e.target.id);
  };
  const clearCompleted = () => {
    setTodoList(todoList.filter((todo) => todo.completed === false));
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {status === "completed"
            ? completed.length
            : status === "active"
            ? unCompleted.length
            : todoList.length}{" "}
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={clickStyle}
            className={status === "all" ? "selected" : ""}
            id="all"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={clickStyle}
            className={status === "active" ? "selected" : ""}
            id="active"
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={clickStyle}
            className={status === "completed" ? "selected" : ""}
            id="completed"
          >
            Completed
          </button>
        </li>
      </ul>

      {completed.length > 0 && (
        <button
          className={completed === 0 ? "hidden" : "clear-completed"}
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default MainFooter;
