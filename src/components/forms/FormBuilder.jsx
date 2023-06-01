import { useState } from "react";
import { PostData } from "../../pages/api/fetch";

import Sign from "./Sign";
import Input from "./Input";
import Select from "./Select";
import FileInput from "./FileInput";
import Radio from "./Radio";
import { useRouter } from "next/router";

const FormsBuilder = ({ forms, formSelect }) => {
  const [answers, setAnswers] = useState({});
  const [signature, setSignature] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter();

  console.log(forms)


  const handleChange = (e, name, item) => {
    if (item || e === null) {
      setAnswers({ ...answers, [name]: item });
    } else {
      setAnswers({ ...answers, [name]: e.target.value });
    }
  };

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    const formData = {
      ...data,
      Vraag6: signature,
      Bestand: data.Bestand,
    };
    console.log(
      "formdata",
      formData
      // .Bestand.replace(/^data:application\/pdf;base64,/, ""),
      // "vr6",
      // formData.Vraag6,
    );
    const results = await PostData(`forms/form${formSelect}`, formData);
    if (results.status === 200) {
      console.log("res", results)
      setSubmitted(true)
      router.push("/thankYou");
    }else{
      console.log(`results failed ${results}`)
    }
  };

  return (
    <div className="formbuilder">
      {submitted ? (
        <div>thanks for submitting</div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, answers)} className="formbuilder__wrapper">
          {forms &&
            forms.fields.map((label, i) => {
                    return (
                      <div key={`${label.name}${i}`}>
                        {label.type === "text" && (
                            <Input
                              label={label}
                              handleChange={handleChange}
                              submitted={submitted}
                            />
                          )}
                        {label.type === "textarea" && 
                            <Input
                              label={label}
                              handleChange={handleChange}
                              submitted={submitted}
                            />
                          }
                        {label.type === "canvas" && (
                          <div className="private__form-items">
                            <label htmlFor="">{label.name}</label>
                            <Sign
                              label={label}
                              handleChange={handleChange}
                              setSignature={setSignature}
                            />
                          </div>
                        )}
                        {label.type === "file" && (
                          <FileInput
                            label={label}
                            handleChange={handleChange}
                          />
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
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
};

export default FormsBuilder;
