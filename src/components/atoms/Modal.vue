<template>
  <Dialog visible="true" @update:visible="closeModal">
    <template #header>
      <h3>Header</h3>
    </template>

    <slot></slot>

    <template #footer>
      <Button label="No" icon="pi pi-times" class="p-button-text" />
      <Button label="Yes" icon="pi pi-check" autofocus />
    </template>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
  name: "Modal",
  components: { Dialog },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");

    return { closeModal };
  },
};
</script>

<style></style>
