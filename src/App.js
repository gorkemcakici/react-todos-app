import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainFooter from "./components/MainFooter";
import { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todoList.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todoList.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todoList);
          break;
      }
    };

    filterHandler();
  }, [todoList, status]);
  return (
    <>
      <section className="todoapp">
        <Header todoList={todoList} setTodoList={setTodoList} />
        <Main
          todoList={todoList}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          setTodoList={setTodoList}
        />
        <MainFooter
          todoList={todoList}
          setTodoList={setTodoList}
          notCompletedTodosLength={todoList.filter(
            (i) => i.completed === false
          )}
          status={status}
          setStatus={setStatus}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
