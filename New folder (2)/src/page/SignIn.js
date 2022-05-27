import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  // useLocation ინფორმაციას ვიღებთ იქიდან სტეიტის სახელით რო გამოვატანეთ ნავიგეითს
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  // ასინქრონული აქ იმიტო წერია რო შიგნით ევეითი ვქნა, 'სხვა გზაც რო ვნახოთ then ის გარდაო'
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

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import ROUTES from "../config/ROUTES.js";
// import ErrorBox from "../components/ErrorBox.js";
// import ErrorMessage from "../components/ErrorMessage.js";

// function SignIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   function handleSubmit() {
//     if (username !== "dd" || password !== "dd") {
//       setError(true);
//     } else {
//       // setLoggedin(true);
//       setError(false);
//     }
//   }

//   return (
//     <main className="container">
//       <section className="login">
//         <div className="login-wrapper">
//           <label htmlFor="username">
//             Username
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//           </label>
//           <label htmlFor="password">
//             Password
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </label>
//           <button
//             className="button"
//             disabled={!username && !password}
//             onClick={handleSubmit}
//           >
//             Login
//           </button>
//           <br />
//           <Link to={ROUTES.CREATEACC}>
//             <button>
//               Create
//             </button>
//           </Link>

//           {error && (
//             <ErrorBox>
//               <ErrorMessage text="something went wrong" />
//             </ErrorBox>
//           )}
//         </div>
//       </section>
//     </main>
//   )
// }

// export default SignIn;
