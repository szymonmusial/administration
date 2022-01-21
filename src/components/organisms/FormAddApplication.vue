<template>
  <div class="p-fluid p-formgrid p-grid basic-application-form">
    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
      <!-- Name -->
      <div v-if="v$.reference.$invalid && submitted">
        Name field has an error.
      </div>
      <div class="p-field p-col-12 p-md-6">
        <label for="name" :class="{ 'p-error': v$.name.$invalid && submitted }"
          >Name</label
        >

        <InputText
          id="name"
          type="text"
          v-model="form.name"
          :class="{ 'p-invalid': v$.name.$invalid && submitted }"
        />
        <small
          v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
          class="p-error"
          >{{ v$.name.required.$message.replace("Value", "Name") }}</small
        >
      </div>
      <!-- Reference -->
      <div class="p-field p-col-12 p-md-6">
        <label for="reference">Reference</label>
        <InputText id="reference" type="text" v-model="form.reference" />
      </div>
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
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Button from "primevue/button";

import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "BasicApplicationForm",
  components: { InputText, Dropdown, Calendar, Button },
  setup() {
    //store
    const store = useStore();
    //Priority
    const priorityOptions = ref([
      { name: "Yes", code: "true" },
      { name: "No", code: "false" },
    ]);
    const priority = ref(false);
    //Application Type
    const applicationTypeOptions = ref([
      { name: "Bank Pomysłów", id: 0 },
      { name: "Wniosek Ogólny", id: 1 },
      { name: "Zgłoszenie problemów", id: 2 },
    ]);
    const applicationType = ref("");
    //Person
    const personOptions = ref([
      { name: "Szymon Musiał", id: 0 },
      { name: "Kuba Musiał", id: 1 },
    ]);
    const person = ref("");
    person.value = "Szymon Musiał";
    const personIsEditable = ref(false);
    //Department
    const departmentOptions = computed(() => {
      return store.getters.getDepartments;
    });
    const department = ref("");
    //Filing Date
    const filingDate = ref("");
    const dateToday = ref(new Date("2022-01-20"));
    //Event Date
    const eventDate = ref("");
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
    const rules = computed(() => {
      return {
        name: { required },
        reference: { required },
        priority: { required },
        applicationType: { required },
        department: { required },
        filingDate: { required },
        eventDate: { required },
      };
    });
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
      priority,
      applicationType,
      applicationTypeOptions,
      personOptions,
      person,
      personIsEditable,
      departmentOptions,
      department,
      filingDate,
      dateToday,
      eventDate,
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
