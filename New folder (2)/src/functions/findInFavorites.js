function findInFavorites(userInfo, setChecked) {
  const foundInFavorites = JSON.parse(localStorage.getItem("fav")).find((e) => {
    return e.login === userInfo.login;
  });
  if (foundInFavorites) {
    setChecked(true);
  }
}

export default findInFavorites;
