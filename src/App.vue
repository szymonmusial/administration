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

    // TO DO: wynieś tą logike do innego komponetu
    onMounted(() => {
      store
        .dispatch("setAuth")
        .then(() => {
          store
            .dispatch("setApplications")
            .catch(() =>
              showErrorToast("Critical Error", "Application failed to load")
            );
          store
            .dispatch("setDepartments")
            .catch(() => showErrorToast("Error", "Departments failed to load"));
          store
            .dispatch("setUsers")
            .catch(() => showErrorToast("Error", "Users failed to load"));
        })
        .catch((e) => {
          console.log(e());
        })
        .finally(() => {
          store.commit("setLoadingStatus", true);
        });
    });
    return { loadingStatus };
  },
};
</script>
<style scoped></style>
