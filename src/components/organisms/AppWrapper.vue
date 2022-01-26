<template>
  <loading :loadingStatus="appIsLoaded" />
  <slot></slot>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast";
import Loading from "../atoms/Loading.vue";

export default {
  name: "AppWrapper",
  components: { Loading },
  setup() {
    const store = useStore();
    const { showErrorToast } = ownToast();
    const appIsLoaded = ref(false);
    onMounted(() => {
      store
        .dispatch("setApplications")
        .then(() => {
          appIsLoaded.value = true;
        })
        .catch(() =>
          showErrorToast("Critical Error", "Application failed to load")
        );
      store
        .dispatch("setDepartments")
        .catch(() => showErrorToast("Error", "Departments failed to load"));
      store
        .dispatch("setUsers")
        .catch(() => showErrorToast("Error", "Users failed to load"));
    });

    return { appIsLoaded };
  },
};
</script>
