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
      <div class="p-field p-col-12 p-md-6">
        <label for="priority">Priority</label>
        <Dropdown
          :options="priorityOptions"
          v-model="form.priority"
          optionLabel="name"
          optionValue="code"
          placeholder="Is Priority"
        />
      </div>
      <!-- Type -->
      <div class="p-field p-col-12 p-md-6">
        <label for="applicationType">Application Type</label>
        <Dropdown
          :options="applicationTypeOptions"
          v-model="form.applicationType"
          optionLabel="name"
          optionValue="name"
          placeholder="Select a Application Type"
        />
      </div>
      <!-- Person -->
      <div class="p-field p-col-12 p-md-6">
        <label for="person">Person </label>
        <Dropdown
          :options="personOptions"
          v-model="form.person"
          optionLabel="name"
          optionValue="name"
          placeholder="Select Person"
          :disabled="!personIsEditable"
        />
      </div>
      <!-- Department -->
      <div class="p-field p-col-12 p-md-6">
        <label for="person">Department </label>
        <Dropdown
          :options="departmentOptions"
          v-model="form.department"
          optionLabel="name"
          optionValue="name"
          placeholder="Select a Department"
        />
      </div>
      <!-- Filing Date -->
      <div class="p-field p-col-12 p-md-6">
        <label for="person">Filing Date </label>
        <Calendar
          v-model="form.filingDate"
          :maxDate="dateToday"
          manualInput="false"
        />
      </div>
      <!-- Event Date -->
      <div class="p-field p-col-12 p-md-6">
        <label for="person">Event Date </label>
        <Calendar
          v-model="form.eventDate"
          manualInput="false"
          :disabled="!eventDateActive"
          :maxDate="form.filingDate"
        />
      </div>
      <!-- Submit -->
      <Button type="submit" label="Submit" class="mt-2" />
    </form>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import InputFormText from "../molecules/InputFormText.vue";

import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { referenceRule, nameRule } from "../../vuelidateForm/businessRules.js";

export default {
  name: "BasicApplicationForm",
  components: { Dropdown, Calendar, Button, InputFormText },
  setup() {
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
    const personOptions = ref([
      { name: "Szymon Musiał", id: 0 },
      { name: "Kuba Musiał", id: 1 },
    ]);

    //Department
    const departmentOptions = computed(() => {
      return store.getters.getDepartments;
    });

    //Filing Date

    const dateToday = ref(new Date("2022-01-20"));
    //Event Date

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
      applicationType: "",
      person: "",
      department: "",
      filingDate: "",
      eventDate: "",
    });
    const rules = {
      name: { required, nameRule },
      reference: { required, referenceRule },
      priority: { required },
      applicationType: { required },
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

      if (!isFormValid) {
        return;
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
