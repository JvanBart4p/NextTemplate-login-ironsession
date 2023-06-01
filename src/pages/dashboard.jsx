import { withSessionSsr } from "./lib/config/withSession";
import Header from "../components/Layout/Header";
import Side from "../components/Layout/Side";
// import { redirect } from "next/dist/server/api-utils";

const Dashboard = ({ user }) => {
  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}
      <div className="dashboard">
        <Side />
        <main>hello</main>
      </div>
    </>
  );
};

export default Dashboard;

export const getServerSideProps = withSessionSsr(async ( { req, res }) => {
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
