<template>
  <Modal
    @closeModal="closeModal"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <BasicApplicationForm />
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import BasicApplicationForm from "../organisms/FormAddApplication.vue";

export default {
  name: "AddApplicationDialog",
  components: {
    Modal,
    BasicApplicationForm,
  },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");
    return {
      closeModal,
    };
  },
};
</script>
