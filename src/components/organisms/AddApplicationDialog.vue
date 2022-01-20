<template>
  <Modal
    @closeModal="closeModal"
    v-if="Modal == 'add'"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <BasicApplicationForm />
    <ApplicationNameInput />
    <!--- w sloce daje formularze i pola które potrzebuję. np edit form a w nim inputName itd -->
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import BasicApplicationForm from "../molecules/BasicApplicationForm.vue";
import ApplicationNameInput from "../atoms/ApplicationNameInput.vue";
export default {
  name: "AddApplicationDialog",
  components: { Modal, BasicApplicationForm, ApplicationNameInput },
  setup() {
    const store = useStore();
    const Modal = computed(() => store.getters.getModal);
    const closeModal = () => {
      store.commit("setModal", "close");
    };

    return { closeModal, Modal };
  },
};
</script>

<style scoped>
.p-dialog .p-dialog-header {
  padding: 0.5rem 1.5rem;
}
</style>
