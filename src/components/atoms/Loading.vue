<template>
  <div id="loading" v-if="!loadingStatus">
    <ProgressSpinner class="spinner" />
  </div>
</template>

<script>
import ProgressSpinner from "primevue/progressspinner";

export default {
  name: "Loading",
  components: { ProgressSpinner },
  props: ["loadingStatus"],
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
