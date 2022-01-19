<template>
  <div class="app">
    <Toast />
    <router-view />
  </div>
</template>

<script>
import Toast from "primevue/toast";

export default {
  name: "app",
  components: { Toast },
};
</script>
