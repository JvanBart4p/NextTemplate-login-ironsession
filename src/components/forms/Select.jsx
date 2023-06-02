import { useEffect, useState } from "react";

const Select = ({ label, handleChange }) => {
  const [value, setValue] = useState(label.options[0]);

  useEffect(
    (e) => {
      handleChange(e, label.name, value);
    },
    [value]
  );

  return (
    <div className="selectWrapper">
      <label>{label.name}</label>
      <select
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        required={label.rules === "required"}
      >
        {label.options.map((item, i) => {
          return (
            <option
              key={`selectOption${i}`}
              value={item}
              required={label.rules === "required"}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
