import React, { useState } from "react";
import Input from "../common/Input";

function ListTrade() {
  const [list, setList] = useState("");

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const sendList = () => {
    console.log(list);
  };

  return (
    <div className="bg-white shadow-md rounded px-80 pt-6 pb-8 mb-4">
      <h1 className="text-3xl font-mono mt-2 text-center">List Trade</h1>
      <div className="flex items-center justify-center">
        <Input
          placeholder="List Trade Terbaru"
          value={list}
          onChange={handleChange}
        />
        <button
          onClick={sendList}
          className="ml-4 py-1 mt-6 px-5 border rounded-md shadow-sm text-md font-mono bg-lime-400 "
        >
          Tambahkan List
        </button>
      </div>
    </div>
  );
}

export default ListTrade;
