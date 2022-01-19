<template>
  <div id="loading" v-if="false">
    <ProgressSpinner class="spinner" />
  </div>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Loading",
  components: { ProgressSpinner },
  setup() {
    const store = useStore();
    const loadingStatus = computed(() => store.getters.getLoadingStatus);

    return loadingStatus;
  },
};
</script>

<style scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #0b213f;
  z-index: 10;
}
</style>
>
