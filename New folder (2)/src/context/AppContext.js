import { createContext, useEffect, useState } from "react";
import { getUsersLowProfiles, getUsersFullProfiles } from "../http/jsonp.js";

//................................................. default
const AppContext = createContext({ loading: false, error: "", posts: [] });
function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoading(true);

    getUsersLowProfiles(20)
      .then((lowProfileUsers) => {
        getUsersFullProfiles(lowProfileUsers).then((responseData) => {
          setUsers(responseData.map((user) => user.data));
        });
      })
      .catch((error) => {
        console.log(error);
        // TODO ERROR
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider
      value={{ error, loading, users, setUsers, favorites, setFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
