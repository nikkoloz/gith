import { AppContext } from "../context/AppContext.js";
import { useContext } from "react";
import UserCard from "../components/UserCard.js";

function Dashboard() {
  const { users, error, loading } = useContext(AppContext);
  if (loading) {
    // TODO LOADING HANDLING
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="main-style">
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
      <button>Load more</button>
    </div>
  );
}

export default Dashboard;
