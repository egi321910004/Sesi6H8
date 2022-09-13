import React, { useEffect, useState } from "react";
import Alert from "../common/Alert";
import Input from "../common/Input";

function ListTrade() {
  const [list, setList] = useState("");
  const [alert, setAlert] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (list.length > 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [list]);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const sendList = () => {
    console.log(list);
  };

  const tambahList = (e) => {
    if (list.length < 5) {
      setAlert(true);
    } else {
      console.log(list);
    }
  };

  return (
    <>
      <div className="w-64 flex items-center m-auto mt-3">
        {alert && (
          <Alert showAlert={true} message={"Kalimat kurang dari 4 huruf"} />
        )}
      </div>
      <div className="bg-white shadow-md rounded px-80 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-mono mt-2 text-center">List Trade</h1>
        <div className="flex items-center justify-center">
          <Input
            placeholder="List Trade Terbaru"
            value={list}
            onChange={handleChange}
          />
          <button
            disabled={disable}
            onClick={tambahList}
            className="ml-4 py-1 mt-6 px-5 border rounded-md shadow-sm text-md font-mono bg-lime-400 "
          >
            Tambahkan List
          </button>
        </div>
      </div>
    </>
  );
}

export default ListTrade;
