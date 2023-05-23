import { withSessionSsr } from "./lib/config/withSession";
import { GetData } from "./api/fetch";
import Header from "../components/Layout/Header";
import Side from "../components/Layout/Side";
import { useState, useEffect } from "react";

const UserDataPage = ({ user }) => {
  const [users, setUsers] = useState("");

  const getUsers = async () => {
    const usersres = await GetData("user");
    setUsers(usersres.data.user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users)

  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}
      <div className="user">
        <Side />
        <div>
          <h2>
            {users.UUID_UserAccount}
          </h2>
          <h2>{users.Username}</h2>
        </div>
      </div>
    </>
  );
};

export default UserDataPage;

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  const relatie = await GetData("user");

  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user, relatie },
  };
});
