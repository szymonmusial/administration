<template>
  <Modal
    @closeModal="closeModal"
    title="Edit date Application"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <FormVuelidateApplication @send="send" :rules="rules" :fields="form" />
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import FormVuelidateApplication from "./FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast";

import { required } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "ModalDateEditApplication",
  components: {
    Modal,
    FormVuelidateApplication,
  },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");
    const store = useStore();
    const { showSuccessToast, showErrorToast } = ownToast();

    const rules = reactive({
      filingDate: { required },
      eventDate: { required },
    });
    const applicationEditingId = computed(
      () => store.getters.getEditingApplicationId
    );

    const dataFromApplication = computed(() =>
      store.getters.getApplication(applicationEditingId.value)
    );

    const form = reactive({
      filingDate: dataFromApplication.value.filing_date,
      eventDate: dataFromApplication.value.event_date,
    });

    console.log(form);

    const send = (data) => {
      store.commit("setLoadingStatus", false);
      const application = {
        id: applicationEditingId.value,
        filing_date: data.filingDate,
        event_date: data.eventDate,
      };
      debugger;
      store
        .dispatch("editApplication", application)
        .then(() => {
          showSuccessToast("Success", "Zmodyfikowane zadanie!");
          closeModal();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się zmodyfikować zadania");
        })
        .finally(() => store.commit("setLoadingStatus", true));
    };
    return {
      closeModal,
      send,
      rules,
      form,
    };
  },
};
</script>
