<template>
  <app-wrapper>
    <div class="p-dialog-content p-component p-dialog AddNewApplication">
      <FormVuelidateApplication @send="send" :rules="rules" :fields="form" :disabledFields="disabledFields" />
    </div>
  </app-wrapper>
</template>

<script lang="ts">
import FormVuelidateApplication from "../components/organisms/FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../composables/ownToast/ownToast";

import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "@/vuelidateForm/businessRules";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import AppWrapper from "../components/organisms/AppWrapper.vue";
import { canSetApplicationPriority } from "../infrastructure/permission/usePermission";
import { FormApplication, applicationStore } from "@/store/modules/application/applicationType";
import { appStore } from "@/store/modules/app/appTypes";

export default {
  name: "AddNewApplication",
  components: {
    FormVuelidateApplication,
    AppWrapper,
  },
  setup() {
    const close = () => router.push("/");
    const store = useStore();
    const { showSuccessToast, showErrorToast } = ownToast();
    const router = useRouter();
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
          close();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się dodać wniosku");
        })
        .finally(() => store.commit(appStore.commit.setLoadingStatus, true));
    };
    return {
      close,
      send,
      rules,
      form,
      router,
      disabledFields,
    };
  },
};
</script>
<style scoped>
.AddNewApplication {
  background: #071426;
  color: rgba(255, 255, 255, 0.87);
  max-width: 33%;
  margin: 0 auto;
  padding: 0 1.5rem 2rem 1.5rem;
}
</style>
