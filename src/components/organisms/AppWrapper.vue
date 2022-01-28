<template>
  <loading :loadingStatus="appIsLoaded" />
  <AppToolbar :person="userInfo" @logOut="logOut" />
  <slot></slot>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast/ownToast";
import Loading from "../atoms/Loading.vue";
import AppToolbar from "../atoms/AppToolbar.vue";
import { useRouter } from "vue-router";

export default {
  name: "AppWrapper",
  components: { Loading, AppToolbar },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { showErrorToast, showSuccessToast } = ownToast();
    const userInfo = computed(() => store.getters.getUserInfo);
    const appIsLoaded = ref(false);
    const logOut = () => {
      store.dispatch("signOut");
      router.push("/signin");
      showSuccessToast("Logged out", "You have been logged out");
    };
    onMounted(() => {
      store
        .dispatch("setApplications")
        .then(() => {
          appIsLoaded.value = true;
        })
        .catch(() => showErrorToast("Critical Error", "Application failed to load"));
      store.dispatch("setDepartments").catch(() => showErrorToast("Error", "Departments failed to load"));
      store.dispatch("setUsers").catch(() => showErrorToast("Error", "Users failed to load"));
    });

    return { appIsLoaded, userInfo, logOut };
  },
};
</script>
