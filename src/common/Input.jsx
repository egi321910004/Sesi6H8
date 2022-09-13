import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { placeholder, type, id, onChange, value } = props;
  return (
    <div class=" mt-3 flex justify-center">
      <form class=" ">
        <div class="mb-4 flex items-center">
          <label class=" text-gray-700 text-1xl font-mono mr-6 mt-6 ">
            ListTrade
          </label>
          <input
            className="shadow  border rounded w-full py-2 px-44 mt-6  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  input: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  type: "",
};
