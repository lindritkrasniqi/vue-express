import axios from "axios";

export const namespaced = true;

export const state = () => ({
  loggedIn: localStorage.getItem("loggedIn") || false,
  user: JSON.parse(localStorage.getItem("user")) || {},
});

export const getters = {};

export const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, rejected) => {
      axios
        .get("sanctum/csrf-cookie")
        .then(() => {
          axios
            .post("api/login", credentials)
            .then((response) => {
              axios.defaults.headers.common[
                `Authorization`
              ] = `Bearer ${response.data.token}`;

              localStorage.setItem("token", `Bearer ${response.data.token}`);

              axios
                .get("api/me")
                .then((response) => {
                  commit("login", response.data.data);

                  resolve();
                })
                .catch((e) => rejected(e));
            })
            .catch((e) => rejected(e));
        })
        .catch((e) => rejected(e));
    });
  },

  async logout({ commit }) {
    return new Promise((resolve, rejected) => {
      axios
        .post("api/logout")
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
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("user", JSON.stringify(user));

    state.loggedIn = true;
    state.user = user;
  },
  logout: (state) => {
    state.loggedIn = false;
    state.user = {};

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
