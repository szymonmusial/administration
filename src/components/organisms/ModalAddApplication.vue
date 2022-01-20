<template>
  <Modal
    @closeModal="closeModal"
    v-if="modal == 'add'"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <BasicApplicationForm />
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import BasicApplicationForm from "../molecules/FormAddApplication.vue";

export default {
  name: "AddApplicationDialog",
  components: {
    Modal,
    BasicApplicationForm,
  },
  setup() {
    const store = useStore();
    const modal = computed(() => store.getters.getModal);
    const closeModal = () => {
      store.commit("setModal", "close");
    };

    return {
      closeModal,
      modal,
    };
  },
};
</script>

<style scoped>
.p-dialog .p-dialog-header {
  padding: 0.5rem 1.5rem;
}
</style>
