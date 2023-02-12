import React from "react";
const TodoForm = (props) => {
  return (
    <form className="todoForm" onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
      />
      <button type="submit"> {props.editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
