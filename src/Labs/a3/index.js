import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";


function Assignment3() {
  const { todos } = useSelector((state) => state.todoReducer);

    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <JavaScript />
        <PathParameters />
        <Classes />
        <Styles />
        <ConditionalOutput />
        <TodoItem />
        <TodoList />
      </div>
    );
  }
  export default Assignment3;