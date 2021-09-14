import axios from "axios";

export const namespaced = true;

export const state = () => ({
  loggedIn: localStorage.getItem("user") ? true : false,
  user: JSON.parse(localStorage.getItem("user")) || {},
});

export const getters = {};

export const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, rejected) => {
      axios
        .post("login", credentials)
        .then((response) => {
          localStorage.setItem("jwt", `${response.data.token}`);

          axios
            .get("me")
            .then((response) => {
              commit("login", response.data.data);

              resolve();
            })
            .catch((e) => rejected(e));
        })
        .catch((e) => rejected(e));
    });
  },

  async logout({ commit }) {
    return new Promise((resolve, rejected) => {
      axios
        .post("logout")
        .then(() => {
          commit("logout");

          resolve();
        })
        .catch((e) => rejected(e));
    });
  },
};

export const mutations = {
  login: (state, user) => {
    localStorage.setItem("user", JSON.stringify(user));

    state.loggedIn = true;
    state.user = user;
  },
  logout: (state) => {
    state.loggedIn = false;
    state.user = {};
    
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  },
};
