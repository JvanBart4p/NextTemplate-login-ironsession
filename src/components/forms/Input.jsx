import { useState } from "react";

const Input = ({ label, handleChange, submitted }) => {

  return (
    <div className="inputWrapper">
      <label> {label.label}</label>
      <input
        type={label.type}
        placeholder={label.name}
        required={label.rules === "required"}
        onChange={(e) => handleChange(e, label.name)}
      />
    </div>
  );
};

export default Input;
