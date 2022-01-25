<template>
  <Modal
    @closeModal="closeModal"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
  </Modal>
</template>

<script>
export default {
  name: "ModalListSubscriptions",
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");

    return { closeModal };
  },
};
</script>

<style></style>
