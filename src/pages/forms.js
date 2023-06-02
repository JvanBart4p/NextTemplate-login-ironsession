import { useEffect, useState } from "react";
import { withSessionSsr } from "./lib/config/withSession";
import { GetData } from "./api/fetch";
import Header from "../components/Layout/Header";
import FormsBuilder from "../components/forms/FormBuilder";
import Side from "../components/Layout/Side";
import Button from "../components/Layout/Button";
// import { redirect } from "next/dist/server/api-utils";

const Forms = ({ user }) => {
  const [formSelect, setFormSelect] = useState(1);
  const [showForms, setShowForms] = useState(false);
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  const fetchData = async () => {
    try {
      const response = await GetData(`forms/form${formSelect}`);
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
  };

  const selectForm = (form) => {
    setSelectedForm(form);
  };

  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}
      <div className="forms">
        <Side />
        <main>
          <Button
            onclick={toggleForms}
            text={showForms ? "Hide Forms" : "Show Forms"}
            style={"orange"}
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
    </>
  );
};

export default Forms;

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (!user) {
      // redirect(res, "/");
        return {
          notFound: true,
        };
  }
  return {
    props: { user },
  };
});
