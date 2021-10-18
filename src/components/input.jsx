import React from "react";
const Input = ({ name, value, label, onchange,error }) => {
  return (
    <div className="form-group">
      <label htmlFor="user">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        className="form-control"
        id={name}
        onChange={onchange}
      />
      <small id="userHelp" className="form-text text-danger">
        {error}
      </small>
    </div>
  );
};

export default Input;
