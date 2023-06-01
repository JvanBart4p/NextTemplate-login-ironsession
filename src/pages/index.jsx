import { useEffect, useState } from "react";
import { PostData } from "./api/fetch";
import Login from "../components/forms/login";
import { useRouter } from "next/router";
import { withSessionSsr } from "./lib/config/withSession";
import Link from "next/link";
import Header from "../components/Layout/Header";
import Side from "../components/Layout/Side";

export default function Home({ user }) {
  const router = useRouter();
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");

  const handleSession = async (id) => {
    const email = userName;
    const password = passWord;
    const uniqueId = id;
    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, uniqueId }),
    });
    if (response.ok) {
      return router.push("/dashboard");
    }
  };


  const handleLogin = async () => {
    const body = {
      email: userName,
      password: passWord,
    };
    const results = await PostData("login", body);
    if (results.status === 200) {
      handleSession(results.data.user.UUID_UserAccount);
    }
  };

  return (
    <>
      {!user ? <Header loggedIn={false} /> : <Header loggedIn={true} />}

      <div className="home">
        {!user ? (
          <div className="home__login">
            <Login
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          </div>
        ) : (
          <div div className="home__loggedin">
            <Side />
            <main>
              <Link href="/dashboard">private</Link>
            </main>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user ?? false;
  return {
    props: { user },
  };
});
