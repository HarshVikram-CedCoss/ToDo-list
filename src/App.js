import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * call whenever user edit his todo
     * @param editid which is being assigned while creating a todo
     */
    if (editId) {
      const editTodo = data.find((i) => i.id === editId);
      const updatedTodos = data.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setData(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    /**
     * inital call to assign a id's
     */
    if (todo !== "") {
      setData([{ id: `${todo}-${Date.now()}`, todo }, ...data]);
      setTodo("");
    }
  };
  console.log(data, "data");
  /**
   * Delete a particular to do
   */
  const handleDelete = (id) => {
    const delTodo = data.filter((to) => to.id !== id);
    setData([...delTodo]);
  };
  /**
   * Edit a particular todo
   */
  const handleEdit = (id) => {
    const editTodo = data.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>
          <span style={{ color: "red" }}>
            Todo List App for your daily Routine(s)
          </span>
        </h3>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        <TodoList
          todos={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
