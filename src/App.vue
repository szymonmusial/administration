<template>
  <div class="main">
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from "primevue/toast";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "App",
  components: { Toast },
  setup() {
    onMounted(() => {
      const store = useStore();
      store.dispatch("setAuth");
    });
  },
};
</script>
<style scoped></style>
