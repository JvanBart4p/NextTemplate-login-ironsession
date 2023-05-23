import { useRouter } from "next/router";
import { GetData } from "../pages/api/fetch";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    console.log("hello")
    const results = await GetData("logout");
    if (results.status === 200) {
      const response = await fetch("/api/logout");
      if (response.ok) {
        return router.push("/");
      }
    }
  };
  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
