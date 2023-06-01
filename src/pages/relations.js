import { useEffect, useState } from "react";
import { withSessionSsr } from "./lib/config/withSession";
import { GetData } from "./api/fetch";
import RelationComponent from "../components/RelationComponent";
import Header from "../components/Layout/Header";
import Side from "../components/Layout/Side";

const Relations = ({ user }) => {
  const [client, setClient] = useState("");

  const getClient = async () => {
    const relatie = await GetData("relatie");
    setClient(relatie.relatie);
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}
      <div className="relations">
        <Side />
        <main>{client && <RelationComponent relaties={client} />}</main>
      </div>
    </>
  );
};

export default Relations;

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
