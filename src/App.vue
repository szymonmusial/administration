<template>
  <div class="app">
    <loading />
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from "primevue/toast";
import Loading from "./components/organisms/Loading.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ownToast from "./composables/ownToast";

export default {
  name: "App",
  components: { Toast, Loading },
  setup() {
    const store = useStore();
    const { showErrorToast } = ownToast();

    onMounted(() => {
      store.dispatch("setApplications").catch(() => {
        showErrorToast("Critical Error", "Application failed to load");
      });
    });
  },
};
</script>
