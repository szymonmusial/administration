<template>
  <div class="p-fluid p-formgrid p-grid basic-application-form">
    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
      <!-- Name -->
      <InputFormText
        :input="v$.name"
        :submitted="submitted"
        v-model="form.name"
        label="Name"
      />
      <!-- Reference -->
      <InputFormText
        :input="v$.reference"
        :submitted="submitted"
        v-model="form.reference"
        label="Reference"
      />
      <!-- Priority -->
      <DropdownForm
        :input="v$.priority"
        :submitted="submitted"
        v-model="form.priority"
        :options="priorityOptions"
        placeholder="Is Priority"
        label="Priority"
        optionValue="code"
      />
      <!-- Type -->
      <DropdownForm
        :input="v$.type"
        :submitted="submitted"
        v-model="form.type"
        :options="applicationTypeOptions"
        placeholder="Select a Application Type"
        label="Application Type"
        optionValue="name"
      />
      <!-- Person -->
      <DropdownForm
        :input="v$.person"
        :submitted="submitted"
        v-model="form.person"
        :options="personOptions"
        placeholder="Select a Person"
        label="Person"
        optionValue="name"
        :disabled="!personIsEditable"
      />
      <!-- Department -->
      <DropdownForm
        :input="v$.department"
        :submitted="submitted"
        v-model="form.department"
        :options="departmentOptions"
        placeholder="Select Department"
        label="Department"
        optionValue="name"
      />
      <!-- Filing Date -->
      <CalendarForm
        v-model="form.filingDate"
        :maxDate="dateToday"
        :input="v$.filingDate"
        :submitted="submitted"
        label="Filing Date"
        manualInput="false"
      />
      <!-- Event Date -->
      <CalendarForm
        v-model="form.eventDate"
        :maxDate="form.filingDate"
        :input="v$.eventDate"
        :submitted="submitted"
        label="Event Date"
        manualInput="false"
        :disabled="!eventDateActive"
      />
      <!-- Submit -->
      <Button type="submit" label="Submit" class="mt-2" />
    </form>
  </div>
</template>

<script>
import Button from "primevue/button";
import InputFormText from "../molecules/InputFormText.vue";
import DropdownForm from "../molecules/DropdownForm.vue";
import CalendarForm from "../molecules/CalendarForm.vue";

import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "../../vuelidateForm/businessRules.js";

export default {
  name: "FormVuelidateApplication",
  components: { Button, InputFormText, DropdownForm, CalendarForm },
  setup(props, { emit }) {
    //store
    const store = useStore();

    //Priority
    const priorityOptions = ref([
      { name: "Yes", code: "true" },
      { name: "No", code: "false" },
    ]);

    //Application Type
    const applicationTypeOptions = ref([
      { name: "Bank Pomysłów", id: 0 },
      { name: "Wniosek Ogólny", id: 1 },
      { name: "Zgłoszenie problemów", id: 2 },
    ]);

    //Person
    const personOptions = computed(() => {
      store.dispatch("setUsers");
      return store.getters.getUsers;
    });

    //Department
    const departmentOptions = computed(() => {
      return store.getters.getDepartments;
    });

    //Today Date
    const dateToday = ref(new Date());

    const eventDateActive = computed(() => {
      if (form.filingDate !== "") {
        return true;
      } else {
        return false;
      }
    });
    //Vuelidate

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
    const rules = {
      name: { required, nameRule },
      reference: { required, referenceRule },
      priority: { required },
      person: { required },
      type: { required },
      department: { required },
      filingDate: { required },
      eventDate: { required },
    };
    form.person = "Szymon Musiał";
    const personIsEditable = ref(false);
    const v$ = useVuelidate(rules, form);

    const submitted = ref(false);
    const handleSubmit = (isFormValid) => {
      submitted.value = true;
      if (isFormValid) {
        emit("send", form);
      }
    };
    return {
      priorityOptions,
      applicationTypeOptions,
      personOptions,
      personIsEditable,
      departmentOptions,
      dateToday,
      eventDateActive,
      form,
      v$,
      handleSubmit,
      submitted,
    };
  },
};
</script>

<style scoped>
.p-field {
  margin: 24px 0px;
}
.p-inputtext,
.p-dropdown,
.button--submit,
.p-calendar {
  margin-top: 10px !important;
}
</style>
