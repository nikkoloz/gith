import updateLocalStorage from "../functions/updateLocalStorage";
import removeFromLocalStorage from "../functions/removeLocalStorage";

function Checkbox({ user, checked, setChecked }) {
  return (
    <label>
      fav
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          if (e.target.checked) {
            updateLocalStorage("fav", user);
          } else {
            removeFromLocalStorage("fav", user);
          }
          setChecked(!checked);
        }}
      />
    </label>
  );
}

export default Checkbox;
