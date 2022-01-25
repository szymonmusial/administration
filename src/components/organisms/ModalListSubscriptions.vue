<template>
  <Modal
    @closeModal="closeModal"
    title="Subscription List"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <Listbox :options="dataFromApplication.subscriptionList" />
  </Modal>
</template>

<script>
import { computed } from "@vue/runtime-core";
import Modal from "../atoms/Modal.vue";
import { useStore } from "vuex";
import Listbox from "primevue/listbox";

export default {
  name: "ModalListSubscriptions",
  components: { Modal, Listbox },
  setup(props, { emit }) {
    const store = useStore();
    const closeModal = () => emit("closeModal");
    const applicationEditingId = computed(
      () => store.getters.getEditingApplicationId
    );

    const dataFromApplication = computed(() =>
      store.getters.getApplication(applicationEditingId.value)
    );

    return { closeModal, dataFromApplication };
  },
};
</script>

<style></style>
