<template>
  <Button :label="label" class="button" :loading="loading" :class="className" />
</template>

<script>
// TO DO: replace with one button
import Button from "primevue/button";
export default {
  name: "OwnButton",
  components: { Button },
  props: ["loading", "label", "type", "className"],
};
</script>
<style scoped>
.p-button-large {
  padding: 0.85rem 3.5rem;
}
</style>
