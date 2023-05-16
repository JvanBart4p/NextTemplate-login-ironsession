const Login = ({ handleLogin, setUsername, setPassword }) => {
  return (
    <section className="login">
      <input
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        type="text"
        placeholder="UserName"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      ></input>
      <button onClick={handleLogin}>Submit</button>
    </section>
  );
};

export default Login;
