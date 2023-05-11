import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { PostData, GetData } from "./api/fetch";
import Login from "../components/login";
import Dashboard from "../components/Dashboard";

export default function Home() {
  // const [user, setUser] = useState(null);
  // const [userName, setUsername] = useState("");
  // const [passWord, setPassword] = useState("");

  // useEffect(() => {
  //   const userCookie = Cookies.get("user");
  //   if (userCookie) {
  //     setUser(userCookie);
  //   }
  // }, []);

  // const handleLogin = async (user) => {
  //   const body = {
  //     email: userName,
  //     password: passWord,
  //   };
  //   const results = await PostData("login", body);
  //   setUser(user);
  //   Cookies.set("user", user, { expires: 7 });
  // };

  // const handleLogout = async () => {

  //   console.log("logout")
  //   const results = await GetData("logout");
  //   if (results.status === 200) {
  //     setUser(null);
  //     Cookies.remove("user");
  //   }
  // };

  return (
    <div className={"home"}>
      hello
      {/* {!user ? (
        <Login
          setUser={setUser}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <Dashboard setUser={setUser} handleLogout={handleLogout} />
      )} */}
    </div>
  );
}
