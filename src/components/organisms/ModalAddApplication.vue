<template>
  <Modal
    @closeModal="closeModal"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <FormVuelidateApplication @send="send" />
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import FormVuelidateApplication from "./FormVuelidateApplication.vue";
import { useStore } from "vuex";

export default {
  name: "AddApplicationDialog",
  components: {
    Modal,
    FormVuelidateApplication,
  },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");
    const store = useStore();
    const send = (data) => {
      const application = {
        name: data.name,
        reference_number: data.reference,
        priority: data.priority,
        application_type: data.type,
        person: data.person,
        department: data.department,
        filing_date: data.filingDate,
        event_date: data.eventDate,
      };
      store.dispatch("addApplication", application);
      console.log(application);
    };
    return {
      closeModal,
      send,
    };
  },
};
</script>
