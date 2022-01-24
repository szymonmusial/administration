<template>
  <Button :label="label" class="p-button-warning" :loading="loading" />
</template>

<script>
// TO DO: replace with one button
import Button from "primevue/button";

export default {
  name: "WarningButton",
  components: { Button },
  props: ["label", "loading"],
};
</script>
