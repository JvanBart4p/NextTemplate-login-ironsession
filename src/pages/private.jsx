import React from "react";
import { withSessionSsr } from "./lib/config/withSession";
import { GetData } from "./api/fetch";
import { useState } from "react";
import FormsBuilder from "../components/forms/FormBuilder";
import Relations from "../components/Relations";

const PrivatePage = ({ user }) => {
  const [forms, setForms] = useState("");
  const [relaties, setRelaties] = useState("");

  const getFormData = async () => {
    const form = await GetData("forms/form1");
    setForms(form);
  };

   const getFormRelatie = async () => {
     const relatie = await GetData("relatie");
     setRelaties(relatie.relatie)
   };

  return (
    <div className="private">
      <div className="private__content">
        <h1>Hello {user.username}</h1>
        <h2>{user.id}</h2>
        <p>Secret Content</p>
        <button
          onClick={() => {
            getFormData();
          }}
        >
          Get Forms
        </button>
        <button
          onClick={() => {
            getFormRelatie();
          }}
        >
          Get relatie
        </button>
        <FormsBuilder forms={forms} />
        <Relations relaties={relaties }/>
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
