<template>
  <div class="priority-column">
    <WarningButton
      v-if="priority"
      label="Yes"
      class="warning-button"
    ></WarningButton>
    <div v-else>No</div>
  </div>
</template>

<script>
import WarningButton from "../atoms/WarningButton.vue";

export default {
  name: "PriorityColumn",
  components: { WarningButton },
  props: ["priority"],
};
</script>

<style scoped>
.warning-button {
  cursor: default !important;
}

.priority-column {
  text-align: center;
}
</style>
