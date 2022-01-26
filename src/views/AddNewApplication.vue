<template>
  <app-wrapper>
    <div class="p-dialog-content p-component p-dialog AddNewApplication">
      <FormVuelidateApplication
        @send="send"
        :rules="rules"
        :fields="form"
        :personIsEditable="false"
      />
    </div>
  </app-wrapper>
</template>

<script>
import FormVuelidateApplication from "../components/organisms/FormVuelidateApplication.vue";
import { useStore } from "vuex";
import ownToast from "../composables/ownToast";

import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "../vuelidateForm/businessRules.js";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import AppWrapper from "../components/organisms/AppWrapper.vue";

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

    const form = reactive({
      name: "",
      reference: "",
      priority: false,
      type: "",
      person: "",
      department: "",
      filingDate: "",
      eventDate: "",
    });

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
          close();
        })
        .catch(() => {
          showErrorToast("Error", "Nie udało się dodać wniosku");
        })
        .finally(() => store.commit("setLoadingStatus", true));
    };
    return {
      close,
      send,
      rules,
      form,
      router,
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
