<template>
  <Dialog visible="true" @update:visible="closeModal">
    <template #header>
      <h3>{{ title }}</h3>
    </template>

    <slot></slot>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
  name: "Modal",
  components: { Dialog },
  props: ["title"],
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");

    return { closeModal };
  },
};
</script>

<style></style>
