function removeFromLocalStorage(key, user) {
  const prevFavs = JSON.parse(localStorage.getItem(key));
  const i = prevFavs.findIndex((element) => {
    return element.login === user.login;
  });
  prevFavs.splice(i, 1);
  localStorage.setItem(key, JSON.stringify(prevFavs));
}

export default removeFromLocalStorage;
