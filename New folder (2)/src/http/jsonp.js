import axios from "axios";

const API_URL = "https://api.github.com/search/users";
const token = process.env.REACT_APP_GITHUB_TOKEN;
async function getUsersLowProfiles(num) {
  try {
    const response = await axios.get(
      `${API_URL}?q=followers:>=1000&per_page=${num}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.items;
  } catch (error) {
    throw new Error("somt w w w fetch");
  }
}

async function getUsersFullProfiles(lowProfileArray) {
  try {
    const promises = [];
    lowProfileArray.forEach((user) => {
      const fullInfoPromise = axios.get(user.url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      promises.push(fullInfoPromise);
    });
    return Promise.all(promises).then((res) => {
      return res;
    });
  } catch (error) {
    throw new Error("smt w w w fetch");
  }
}

async function getUserByName(name) {
  try {
    const response = await axios.get(`https://api.github.com/users/${name}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("smt w w w fetch");
  }
}

async function getOrganizations(url) {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("somt w w sdsdw fetch");
  }
}

async function getRepos(url) {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("somt w w sdsdw fetch");
  }
}

export {
  getUserByName,
  getUsersLowProfiles,
  getUsersFullProfiles,
  getOrganizations,
  getRepos,
};
