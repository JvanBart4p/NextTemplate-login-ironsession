import React from "react";
import { withSessionSsr } from "./lib/config/withSession";

const PrivatePage = ({ user }) => {

  return (
    <div className="private">
      <div className="private__content">
        <h1>Hello {user.username}</h1>
        <h2>{user.id}</h2>
        <p>Secret Content</p>
      </div>
    </div>
  );};

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
