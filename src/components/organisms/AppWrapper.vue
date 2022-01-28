<template>
  <loading :loadingStatus="appIsLoaded" />
  <AppToolbar :person="userInfo" @logOut="logOut" />
  <slot></slot>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast/ownToast";
import Loading from "../atoms/Loading.vue";
import AppToolbar from "../atoms/AppToolbar.vue";
import { useRouter } from "vue-router";
import { UserInfo, authDispatch } from "@/store/modules/auth/authType";

export default {
  name: "AppWrapper",
  components: { Loading, AppToolbar },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { showErrorToast, showSuccessToast } = ownToast();
    const userInfo = computed((): UserInfo => store.getters.getUserInfo);
    const appIsLoaded = ref<boolean>(false);
    const logOut = () => {
      store.dispatch(authDispatch.signOut);
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
