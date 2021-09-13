import { createStore } from "vuex";

const auth = require("./auth");
const errors = require("./errors");

export default createStore({
  modules: { auth, errors },
});
