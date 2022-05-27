import Checkbox from "../components/Checkbox.js";
import UserCard from "../components/UserCard.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Favorites() {
  const [checked, setChecked] = useState(true);
  const favs = JSON.parse(localStorage.getItem("fav"));

  return (
    <div className="main-style">
      {favs.map((user) => {
        return (
          <div key={uuidv4()}>
            <UserCard user={user} />
            <Checkbox user={user} checked={checked} setChecked={setChecked} />
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
