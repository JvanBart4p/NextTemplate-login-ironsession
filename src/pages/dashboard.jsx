import { withSessionSsr } from "./lib/config/withSession";
import Header from "../components/Layout/Header";
import Side from "../components/Layout/Side";

const Dashboard = ({ user }) => {

  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}
      <div className="dashboard">
        <Side />
        <div>hello</div>
      </div>
    </>
  );
};

export default Dashboard;

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
