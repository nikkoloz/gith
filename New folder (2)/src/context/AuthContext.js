import { createContext, useEffect, useState } from "react";
import { parse, removeToken, setToken } from "../helpers/jwt";
import { signInUser } from "../http/auth.js";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isInitialized: false,
});

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token } = response;
    setToken(token);
    const { payload } = parse(token);
    setIsAuthenticated(true);
    setUser(payload);
  }

  function logout() {
    removeToken();
    setIsAuthenticated(false);
    setUser(null);
  }

  function handleFailInit() {
    setIsInitialized(true);
    setIsAuthenticated(false);
  }

  useEffect(() => {
    try {
      console.log("starting init");
      const token = localStorage.getItem("accessToken");
      const { valid, payload } = parse(token);
      if (token && valid) {
        setIsInitialized(true);
        setIsAuthenticated(true);
        setUser(payload);
      } else {
        handleFailInit();
      }
    } catch (error) {
      handleFailInit();
    }
    console.log("finish init");
  }, []);

  if (!isInitialized) {
    return <h1>Loading ...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isInitialized, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
