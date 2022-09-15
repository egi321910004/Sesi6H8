import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border w-[60%] m-auto mt-6  shadow-sm flex justify-center"
    >
      {props.edit ? (
        <div className="flex items-center justify-center w-[50%] h-12 mb-5 mt-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400">
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="border shadow-sm w-[250px] rounded-sm mr-5 font-mono"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="border py-[5px] px5 font-mono rounded-md w-28 bg-yellow-300"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="py-3">
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="mt-2 mb-2 border shadow-sm py-1 px-6 text-1xl font-mono mr-8 "
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="border py-[5px] px5 font-mono rounded-md w-28 bg-lime-300"
          >
            Add todo
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
