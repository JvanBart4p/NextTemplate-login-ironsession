import { useState } from "react";
import { PostData } from "./api/fetch";
import Login from "../components/forms/login";
import { useRouter } from "next/router";
import { withSessionSsr } from "./lib/config/withSession";
import Link from "next/link";

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
      return router.push("/private");
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
    <div className={"home"}>
      {!user ? (
        <Login
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <div>
          <Link href="/private">private</Link>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user ?? false;
  return {
    props: { user },
  };
});
