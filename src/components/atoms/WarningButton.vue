<template>
  <Button :label="label" class="p-button-warning" />
</template>

<script>
import Button from "primevue/button";

export default {
  name: "WarningButton",
  components: { Button },
  props: ["label"],
};
</script>
