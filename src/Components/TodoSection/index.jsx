import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../../Redux/Features/todoSlice";
import { v4 as uuidv4 } from "uuid";
const TodoSection = () => {
  const [inptVal, setInpVal] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todoApp.todo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInpVal(e.target.value);
  };

  const handleAddTodo = () => {
    if (!inptVal) {
      return;
    }
    dispatch(
      addTodo({
        id: uuidv4(),
        text: inptVal,
      })
    );
  };

  const handleEdit = (todo) => {
    setInpVal(todo.text);
    setEditId(todo.id);
  };

  const handleSave = () => {
    dispatch(
      editTodo({
        id: editId,
        text: inptVal,
      })
    );
    setInpVal("");
    setEditId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="my-5 todo_section">
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          value={inptVal}
          placeholder="Add a new todo item..."
          onChange={(e) => handleChange(e)}
        />
        {editId ? (
          <button onClick={handleSave}>save</button>
        ) : (
          <button className=" text-bg-dark" onClick={handleAddTodo}>
            add{" "}
          </button>
        )}
      </div>

      <div className="todos">
        {todos.map((oneTodo) => (
          <p key={oneTodo.id}>
            {oneTodo.text}
            <button onClick={() => handleEdit(oneTodo)}>edit</button>
            <button onClick={() => handleDelete(oneTodo.id)}>delete</button>
          </p>
        ))}
      </div>  
    </div>
  );
};

export default TodoSection;
