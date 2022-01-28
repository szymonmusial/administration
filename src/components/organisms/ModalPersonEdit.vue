<template>
  <Modal
    @closeModal="closeModal"
    title="Edit date Application"
    class="p-fluid p-formgrid p-grid basic-application-form"
  >
    <FormVuelidateApplication @send="send" :rules="rules" :fields="form" :disabledFields="disabledFields" />
  </Modal>
</template>

<script lang="ts">
import Modal from "../atoms/Modal.vue";
import FormVuelidateApplication from "./FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../../composables/ownToast/ownToast";

import { required } from "@vuelidate/validators";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

import { Application, FormApplication, applicationStore } from "@/store/modules/application/applicationType";
import { appStore } from "@/store/modules/app/appTypes";

export default {
  name: "ModalPersonEdit",
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
    });

    const rules = reactive({
      subscriptionList: {},
      person: { required },
    });
    const applicationEditingId = computed((): Number => store.getters.getEditingApplicationId);

    const dataFromApplication = computed((): Application => store.getters.getApplication(applicationEditingId.value));

    const form = reactive({
      subscriptionList: dataFromApplication.value.subscriptionList,
      person: dataFromApplication.value.person,
    });

    const send = (data: FormApplication) => {
      store.commit(appStore.commit.setLoadingStatus, false);
      const application = {
        id: applicationEditingId.value,
        subscriptionList: data.subscriptionList,
        person: data.person,
      };
      store
        .dispatch(applicationStore.dispatch.editApplication, application)
        .then(() => {
          showSuccessToast("Success", "Zmodyfikowane zadanie!");
          closeModal();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się zmodyfikować zadania");
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
