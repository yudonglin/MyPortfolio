import "bootstrap/dist/css/bootstrap.min.css";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);

app.use(router);

app.mount("#app");

