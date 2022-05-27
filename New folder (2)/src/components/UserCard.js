import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <main>
      <div className="post-item">
        <h2>{user.login}</h2>
        <img alt={user.login} src={user.avatar_url} />
        <h3>Followers: {user.followers}</h3>
        <h3>Following: {user.following}</h3>
        <Link to={`/preview/${user.login}`}>
          <button className="button">read me</button>
        </Link>
      </div>
    </main>
  );
}

export default UserCard;
