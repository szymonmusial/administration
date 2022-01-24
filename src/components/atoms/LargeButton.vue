<template>
  <Button
    :label="label"
    class="p-button-secondary button--large"
    :loading="loading"
  />
</template>

<script>
import Button from "primevue/button";

export default {
  name: "LargeButton",
  props: ["label", "loading"],
  components: { Button },
};
</script>

<style scoped>
.button--large {
  padding: 0.85rem 3.5rem;
}
</style>
