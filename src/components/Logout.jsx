import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async (e) => {
    const response = await fetch("/api/logout");
    if (response.ok) {
      return router.push("/");
    }
  };

  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
