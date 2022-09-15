import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className="flex items-center justify-center w-[50%] h-12 m-auto mt-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400"
      key={index}
    >
      <div
        className="font-mono mr-24 text-[18px]"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="flex items-center justify-end text-[18px]">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon mr-2"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
