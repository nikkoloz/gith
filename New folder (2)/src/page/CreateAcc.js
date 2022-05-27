import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "../components/ErrorBox.js";
import ErrorMessage from "../components/ErrorMessage.js";
import ROUTES from "../config/ROUTES.js";
import { createNewUser } from "../http/auth.js";
import { v4 as uuidv4 } from "uuid";
function CreateAcc() {
  const [error, setError] = useState([]);
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`/${ROUTES.SIGNIN}`, { state: { success: true } });
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  return (
    <>
      <form style={{ marginTop: "2.5rem" }}>
        <label htmlFor="username">
          Username
          <input
            name="username"
            id="username"
            value={user.username}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="firstName">
          First Name
          <input
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name
          <input
            name="lastName"
            id="lastName"
            value={user.lastName}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            name="email"
            id="email"
            type="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="birthDate">
          Date of birth
          <input
            name="birthDate"
            id="birthDate"
            type="date"
            value={user.birthDate}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            type="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <br />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
      {error.length !== 0 && (
        <ErrorBox>
          {error.map((err) => {
            return <ErrorMessage key={uuidv4()} text={err} />;
          })}
        </ErrorBox>
      )}
    </>
  );
}

export default CreateAcc;
