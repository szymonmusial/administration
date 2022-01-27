import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-dark-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(store);
app.use(router);

app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
