<template>
  <Dialog :visible="true" @update:visible="closeModal" class="form__dialog">
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
  props: { title: String },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");
    return { closeModal };
  },
};
</script>

<style>
.form__dialog {
  min-width: 28% !important;
  max-width: 100%;
}
</style>
