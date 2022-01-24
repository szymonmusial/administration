<template>
  <div class="main">
    <loading :loadingStatus="loadingStatus" />
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from "primevue/toast";
import Loading from "./components/atoms/Loading.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ownToast from "./composables/ownToast";

export default {
  name: "App",
  components: { Toast, Loading },
  setup() {
    const store = useStore();
    const { showErrorToast } = ownToast();
    const loadingStatus = computed(() => store.getters.getLoadingStatus);

    onMounted(() => {
      store
        .dispatch("setApplications")
        .then(() => {
          store.commit("setLoadingStatus", true);
        })
        .catch(() => {
          showErrorToast("Critical Error", "Application failed to load");
        });
      store.dispatch("setDepartments").catch(() => {
        showErrorToast("Error", "Departments failed to load");
      });
    });

    return { loadingStatus };
  },
};
</script>
<style scoped>
.main {
  background-color: #204887;
}
</style>
