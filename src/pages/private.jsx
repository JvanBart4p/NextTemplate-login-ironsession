import React, { useEffect } from "react";
import { withSessionSsr } from "./lib/config/withSession";
import { GetData } from "./api/fetch";
import { useState } from "react";
import FormsBuilder from "../components/forms/FormBuilder";
import Relations from "../components/Relations";

const PrivatePage = ({ user }) => {
  const [showForms, setShowForms] = useState(false);
  const [showRelations, setShowRelations] = useState(false);
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [relaties, setRelaties] = useState("");

  const getFormRelatie = async () => {
    const relatie = await GetData("relatie");
    setRelaties(relatie.relatie);
    setShowForms(false);
    setSelectedForm(null);
    setShowRelations(!showRelations);
  };

  const fetchData = async () => {
    try {
      const response = await GetData("forms/form1");
      const data = await response;
      setForms(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleForms = () => {
    setShowForms(!showForms);
    setSelectedForm(null);
    setShowRelations(false);
  };

  const selectForm = (form) => {
    setSelectedForm(form);
  };

  return (
    <div className="private">
      <div className="private__buttoncontainer">
        <button onClick={toggleForms}>
          {showForms ? "Hide Forms" : "Show Forms"}
        </button>
        <button
          onClick={() => {
            getFormRelatie();
          }}
        >
          {showRelations ? "Hide Relations" : "Get relatie"}
        </button>
      </div>
      <div>
        {showForms && (
          <div>
            {forms &&
              forms.length > 0 &&
              forms.map((form, i) => (
                <button
                  key={`form-${form.title}-${i}`}
                  onClick={() => selectForm(form)}
                >
                  {form.title}
                </button>
              ))}
          </div>
        )}
        <div className="private__content">
          {selectedForm && (
            <div>
              <h2>{selectedForm.title}</h2>
              <FormsBuilder forms={selectedForm} />
            </div>
          )}
          {showRelations && <Relations relaties={relaties} />}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user },
  };
});

export default PrivatePage;
