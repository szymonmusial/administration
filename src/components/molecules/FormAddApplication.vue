<template>
  <div class="p-fluid p-formgrid p-grid basic-application-form">
    <!-- Name -->
    <div class="p-field p-col-12 p-md-6">
      <label for="name">Name</label>
      <InputText id="name" type="text" />
    </div>
    <!-- Reference -->
    <div class="p-field p-col-12 p-md-6">
      <label for="reference">Reference</label>
      <InputText id="reference" type="text" />
    </div>
    <!-- Priority -->
    <div class="p-field p-col-12 p-md-6">
      <label for="priority">Priority</label>
      <Dropdown
        :options="priorityOptions"
        v-model="priority"
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
        v-model="applicationType"
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
        v-model="person"
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
        v-model="department"
        optionLabel="name"
        optionValue="name"
        placeholder="Select a Department"
      />
    </div>
    <!-- Filing Date -->
    <div class="p-field p-col-12 p-md-6">
      <label for="person">Filing Date </label>
      <Calendar v-model="filingDate" :maxDate="dateToday" manualInput="false" />
    </div>
    <!-- Event Date -->
    <div class="p-field p-col-12 p-md-6">
      <label for="person">Event Date </label>
      <Calendar
        v-model="eventDate"
        manualInput="false"
        :disabled="!eventDateActive"
        :maxDate="filingDate"
      />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "BasicApplicationForm",
  components: { InputText, Dropdown, Calendar },
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
      store.getters("getDepartments");
    });
    const department = ref("");
    //Filing Date
    const filingDate = ref("");
    const dateToday = ref(new Date("2022-01-20"));
    //Event Date
    const eventDate = ref("");
    const eventDateActive = computed(() => {
      if (filingDate.value !== "") {
        return true;
      } else {
        return false;
      }
    });
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
.p-calendar {
  margin-top: 10px !important;
}
</style>
