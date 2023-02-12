import React from "react";

const TodoList = (props) => {
  return (
    <ul className="allTodos">
      {props.todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => props.handleEdit(t.id)}>Edit</button>
          <button onClick={() => props.handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
