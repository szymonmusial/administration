<template>
  <Modal @closeModal="closeModal" title="Add New Applications" class="p-fluid p-formgrid p-grid basic-application-form">
    <FormVuelidateApplication
      @send="send"
      :rules="rules"
      :fields="form"
      :disabledFields="disabledFields"
      :userInfo="userInfo"
    />
  </Modal>
</template>

<script lang="ts">
import Modal from "../atoms/Modal.vue";
import FormVuelidateApplication from "./FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast/ownToast";

import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "@/vuelidateForm/businessRules";
import { reactive } from "@vue/reactivity";
import { canSetApplicationPriority } from "@/infrastructure/permission/usePermission";

import { FormApplication, applicationStore } from "@/store/modules/application/applicationType";
import { appStore } from "@/store/modules/app/appTypes";

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

    const form: FormApplication = reactive({
      name: "",
      reference: "",
      priority: false,
      type: "",
      person: "",
      department: "",
      filingDate: "",
      eventDate: "",
      subscriptionList: [],
    });

    const send = (data: FormApplication) => {
      store.commit(appStore.commit.setLoadingStatus, false);
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
        .dispatch(applicationStore.dispatch.addApplication, application)
        .then(() => {
          showSuccessToast("Success", "Dodano Wniosek!");
          closeModal();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się dodać wniosku");
        })
        .finally(() => store.commit(appStore.commit.setLoadingStatus, true));
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
