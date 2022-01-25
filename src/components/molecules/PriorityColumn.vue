<template>
  <div class="priority-column">
    <own-button
      v-if="priority === 'true'"
      label="Yes"
      className="p-button-warning"
      class="priority-column__button"
    />
    <div v-else>No</div>
  </div>
</template>

<script>
import OwnButton from "../atoms/OwnButton.vue";

export default {
  name: "PriorityColumn",
  components: { OwnButton },
  props: ["priority"],
};
</script>

<style scoped>
.priority-column__button {
  cursor: default !important;
}

.priority-column {
  text-align: center;
}
</style>
