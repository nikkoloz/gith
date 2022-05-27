import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrganizations, getUserByName, getRepos } from "../http/jsonp.js";
import RepoCard from "../components/RepoCard.js";
import OrgCard from "../components/OrgsCard.js";
import findInFavorites from "../functions/findInFavorites.js";
import Checkbox from "../components/Checkbox.js";
function Preview() {
  const [user, setUser] = useState({});
  const [userOrgs, setUserOrgs] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [checked, setChecked] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    getUserByName(name).then((userInfo) => {
      setUser(userInfo);
      getOrganizations(userInfo.organizations_url).then((response) => {
        if (response.length !== 0) {
          setUserOrgs(response.filter((u, i) => i < 3));
        }
      });
      getRepos(userInfo.repos_url).then((res) => {
        setUserRepos(res.filter((u, i) => i < 10));
      });
      findInFavorites(userInfo, setChecked);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="">
          <h1>UserName:{name}</h1>
          <img alt={name} src={user.avatar_url} />
          {user.bio && <span>Bio: {user.bio}</span>}
          <h1>Followers: {user.followers}</h1>
          <h1>Following: {user.following}</h1>
          <Checkbox user={user} checked={checked} setChecked={setChecked} />
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <div className="container">
        {userOrgs.map((org) => {
          return <OrgCard key={org.id} login={org.login} avatar={org.avatar_url} />;
        })}
      </div>
      <hr />
      <hr />
      <hr />
      <div className="container">
        {userRepos.map((Repo) => {
          return <RepoCard key={Repo.id} name={Repo.name} login={name} />;
        })}
      </div>
    </>
  );
}

export default Preview;
