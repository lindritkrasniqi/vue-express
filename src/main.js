import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";

import Default from "@/layouts/default";
import Error from "@/layouts/error";
import LoggedIn from "@/layouts/loggedIn";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .component("default", Default)
  .component("error", Error)
  .component("loggedIn", LoggedIn)
  .mount("#app");
