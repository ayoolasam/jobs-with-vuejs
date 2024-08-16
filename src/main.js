import "./assets/styles.css";
import router from "./router/router";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import Basebutton from "./components/Basebutton.vue";
import JobCard from "./components/JobCard.vue";


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
