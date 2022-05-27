import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleSubmit}>Sign In</button>
        <br />
      </form>

      <button onClick={() => navigate("/create-account")}>create</button>
    </>
  );
}

export default SignIn;

