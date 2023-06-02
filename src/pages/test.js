import { useEffect, useState } from "react";
import { GetData } from "./api/fetch";
import Header from "../components/Layout/Header";
import FormsBuilder from "../components/forms/FormBuilder";
import Side from "../components/Layout/Side";
import Button from "../components/Layout/Button";

const Test = () => {
  const [formSelect, setFormSelect] = useState(1);
  const [showForms, setShowForms] = useState(false);
  const [forms, setForms] = useState([
    { title: "Form 1", fields: [] },
    {
      title: "Vragen",
      fields: [
        {
          name: "Vraag1",
          label: "Vraag 1",
          type: "textarea",
          rules: "required",
        },
        {
          name: "Vraag2",
          label: "Vraag 2",
          type: "textarea",
          rules: "",
        },
        {
          name: "Vraag3",
          label: "Vraag 3",
          type: "textarea",
          rules: "required",
        },
        {
          name: "Vraag4",
          label: "Vraag4, geef een cijfer",
          type: "radio",
          rules: "required",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        {
          name: "Vraag5",
          label: "Vraag 5, selecteer een optie",
          type: "select",
          rules: "required",
          options: ["Optie 1", "Optie 2", "Optie 3", "Optie 4", "Optie 5"],
        },
        {
          name: "Vraag6",
          label: "Handtekening",
          type: "canvas",
          rules: "required",
        },
        {
          name: "Bestand",
          label: "PDF toevoegen",
          type: "file",
          prepend: "mdi-file",
          rules: "required",
        },
      ],
    },
  ]);
  const [selectedForm, setSelectedForm] = useState(null);

  //   const fetchData = async () => {
  //     try {
  //       const response = await GetData(`forms/form${formSelect}`);
  //       const data = await response;
  //       setForms(data);
  //     } catch (error) {
  //       console.error("Error fetching form data:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const toggleForms = () => {
    setShowForms(!showForms);
    setSelectedForm(null);
  };

  const selectForm = (form) => {
    setSelectedForm(form);
  };
  return (
    <div>
      <Header loggedIn={false} />
      <div className="forms">
        <Side />
        <main>
          <Button
            onclick={toggleForms}
            text={showForms ? "Hide Forms" : "Show Forms"}
            style={"blue"}
          />
          {showForms && (
            <div>
              {forms &&
                forms.length > 0 &&
                forms.map((form, i) => (
                  <Button
                    key={`form-${form.title}-${i}`}
                    onclick={() => selectForm(form)}
                    text={form.title}
                    style={"orange"}
                  />
                ))}
            </div>
          )}
          <div className="private__content">
            {selectedForm && (
              <div>
                <h2>{selectedForm.title}</h2>
                <FormsBuilder forms={selectedForm} formSelect={formSelect} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Test;
