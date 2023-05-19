import { useState } from "react";
import { PostData } from "../../pages/api/fetch";

import Sign from "./Sign";
import Input from "./Input";
import Select from "./Select";
import FileInput from "./FileInput";
import Radio from "./Radio";
import { useRouter } from "next/router";

const FormsBuilder = ({ forms }) => {
  const [answers, setAnswers] = useState({});
  const [signature, setSignature] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter();


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
      formData.Bestand.replace(/^data:application\/pdf;base64,/, ""),
      "vr6",
      formData.Vraag6,
    );
    const results = await PostData("forms/form1", formData);
    if (results.status === 200) {
      console.log("res", results)
      setSubmitted(true)
      router.push("/thankYou");
    }else{
      console.log(`results failed ${results}`)
    }
  };
  const formGetter = () => {
    console.log("getforms")
  }

  // const handleSubmit = (e, data) => {
  //   e.preventDefault();
  //   const body = new FormData();
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key === "Bestand" && value) {
  //       body.append(key, value); // Append the file separately
  //     } else {
  //       body.append(key, value);
  //     }
  //   });
  //   body.append("Vraag6", signature);

  //   for (var pair of body.entries()) {
  //     console.log(pair[0] + ": " + pair[1]);
  //   }

  //   PostData("forms/form1", body);
  // };

  return (
    <div>
      {submitted ? (
        <div>thanks for submitting</div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, answers)}>
          {forms &&
            forms.map((item, index) => {
              return (
                <div className="private__form" key={`formtest${index}`}>
                  {item.fields.length > 0 && <h2>{item.title}</h2>}
                  {item.fields.map((label, i) => {
                    return (
                      <div key={`${label.name}${i}`}>
                        {label.type === "textarea" || "text" && (
                          <Input
                            label={label}
                            handleChange={handleChange}
                            submitted={submitted}
                          />
                        )}
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
