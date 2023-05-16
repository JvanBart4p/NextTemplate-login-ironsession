import { useState, useEffect } from "react";

import Sign from "./Sign";
import Input from "./Input";
import Select from "./Select";
import FileInput from "./FileInput";
import Radio from "./Radio";

const FormsBuilder = ({ forms }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e, name, item) => {
    if (item || e === null) {
      setAnswers({ ...answers, [name]: item });
    } else {
      setAnswers({ ...answers, [name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  console.log(forms)

  return (
    <div>
      {forms &&
        forms.map((item, index) => {
          return (
            <div className="private__form" key={`formtest${index}`}>
              {item.fields.length > 0 && <h2>{item.title}</h2>}
              {item.fields.map((label, i) => {
                return (
                  <div key={`${label.name}${i}`}>
                    {label.type === "textarea" && (
                      <Input label={label} handleChange={handleChange} />
                    )}
                    {label.type === "canvas" && (
                      <div className="private__form-items">
                        <label htmlFor="">{label.name}</label>
                        <Sign label={label} handleChange={handleChange} />
                      </div>
                    )}
                    {label.type === "file" && (
                      <FileInput label={label} handleChange={handleChange} />
                    )}
                    {label.type === "select" && (

                      <Select label={label} handleChange={handleChange} />
                    )}
                    {label.type === "radio" && (
                      <Radio label={label} handleChange={handleChange} />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      <button onClick={(e) => handleSubmit(e)}>submit</button>
    </div>
  );
};

export default FormsBuilder;
