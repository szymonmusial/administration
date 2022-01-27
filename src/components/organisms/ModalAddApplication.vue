<template>
  <Modal
    @closeModal="closeModal"
    title="Add New Applications"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <FormVuelidateApplication
      @send="send"
      :rules="rules"
      :fields="form"
      :disabledFields="disabledFields"
      :userInfo="userInfo"
    />
  </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import FormVuelidateApplication from "./FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast";

import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "../../vuelidateForm/businessRules.js";
import { reactive } from "@vue/reactivity";
import { canSetApplicationPriority } from "../../infrastructure/permission/usePermission";
import { computed } from "@vue/runtime-core";

export default {
  name: "ModalAddApplication",
  components: {
    Modal,
    FormVuelidateApplication,
  },
  setup(props, { emit }) {
    const closeModal = () => emit("closeModal");
    const store = useStore();
    const { showSuccessToast, showErrorToast } = ownToast();
    const disabledFields = reactive({
      person: true,
      priority: !canSetApplicationPriority(),
    });

    const rules = reactive({
      name: { required, nameRule },
      reference: { required, referenceRule },
      priority: { required },
      person: { required },
      type: { required },
      department: { required },
      filingDate: { required },
      eventDate: { required },
      subscriptionList: {},
    });

    const form = computed(() =>
      reactive({
        name: "",
        reference: "",
        priority: "false",
        type: "",
        person: "",
        department: "",
        filingDate: "",
        eventDate: "",
      })
    );

    const send = (data) => {
      store.commit("setLoadingStatus", false);
      const application = {
        name: data.name,
        reference_number: data.reference,
        priority: data.priority,
        application_type: data.type,
        person: data.person,
        department: data.department,
        filing_date: data.filingDate,
        event_date: data.eventDate,
        subscriptionList: data.subscriptionList,
      };
      store
        .dispatch("addApplication", application)
        .then(() => {
          showSuccessToast("Success", "Dodano Wniosek!");
          closeModal();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się dodać wniosku");
        })
        .finally(() => store.commit("setLoadingStatus", true));
    };
    return {
      closeModal,
      send,
      rules,
      form,
      disabledFields,
    };
  },
};
</script>
