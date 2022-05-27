import { useState } from "react";
import { getUserByName } from "../http/jsonp.js";
import UserCard from "../components/UserCard.js";
import Checkbox from "../components/Checkbox.js";

function Search() {
  const [searchText, setText] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function handleSearch() {
    setLoading(true);
    setError("");
    getUserByName(searchText)
      .then((userInfo) => {
        setUser(userInfo);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div>
      <label htmlFor="Search">
        Search
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button onClick={handleSearch} disabled={!searchText}>
        Search
      </button>

      <div className="container">
        {loading ? (
          <h1>loading</h1>
        ) : (
          <>
            {error ? (
              <h1>no user</h1>
            ) : (
              <>
                {!isObjEmpty(user) && (
                  <div>
                    <UserCard user={user} />
                    <Checkbox
                      user={user}
                      checked={checked}
                      setChecked={setChecked}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
