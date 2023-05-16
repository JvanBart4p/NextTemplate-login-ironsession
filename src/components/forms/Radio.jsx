import { useState, useEffect } from "react";

const Radio = ({ label, handleChange }) => {
  const [selectedVal, setSelectedVal] = useState(label.options[0]);
  const [newSel, setNewSel] = useState(selectedVal);

  useEffect(() => {
    setNewSel(selectedVal);
  }, [selectedVal]);

  return (
    <div className="private__form-items">
      <label> {label.label}</label>
      <div>
        {label.options.map((item, i) => {
          return (
            <div key={`radioOption${i}`}>
              <label>{item}</label>
              <input
                type="radio"
                name={item}
                checked={item === newSel}
                onClick={() => {
                  setSelectedVal(item);
                }}
                onChange={(e) => {
                  handleChange(e, label.name, item);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
