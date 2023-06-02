import { useState, useEffect } from "react";

const Radio = ({ label, handleChange }) => {

  const [selectedVal, setSelectedVal] = useState(label.options[0]);
  const [newSel, setNewSel] = useState(selectedVal);

  useEffect(() => {
    setNewSel(selectedVal);
  }, [selectedVal]);

  return (
    <div className="radio">
      <label> {label.label}</label>
      <div className="radio__wrapper">
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
