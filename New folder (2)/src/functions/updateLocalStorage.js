function updateLocalStorage(key, user) {
  const prevFavs = JSON.parse(localStorage.getItem(key));
  prevFavs.push(user);
  localStorage.setItem(key, JSON.stringify(prevFavs));
}

export default updateLocalStorage;
