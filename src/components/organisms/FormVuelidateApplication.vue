<template>
  <div class="p-fluid p-formgrid p-grid basic-application-form">
    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
      <!-- Name -->
      <InputFormText
        :input="v$.name"
        :submitted="submitted"
        v-model="form.name"
        label="Name"
        v-if="isActiveField('name')"
      />
      <!-- Reference -->
      <InputFormText
        :input="v$.reference"
        :submitted="submitted"
        v-model="form.reference"
        label="Reference"
        v-if="isActiveField('reference')"
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
        v-if="isActiveField('priority')"
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
        v-if="isActiveField('type')"
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
        v-if="isActiveField('person')"
        :loading="!personLoading"
      />
      <!-- Person list -->
      <MultiSelectForm
        :input="v$.subscriptionList"
        :submitted="submitted"
        v-model="form.subscriptionList"
        :options="personOptions"
        placeholder="Select persons"
        label="Subscription List"
        optionValue="name"
        v-if="isActiveField('subscriptionList')"
        :loading="!personLoading"
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
        v-if="isActiveField('department')"
      />
      <!-- Filing Date -->
      <CalendarForm
        v-model="form.filingDate"
        :maxDate="dateToday"
        :input="v$.filingDate"
        :submitted="submitted"
        label="Filing Date"
        manualInput="false"
        v-if="isActiveField('filingDate')"
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
        v-if="isActiveField('eventDate')"
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
import MultiSelectForm from "../molecules/MultiSelectForm.vue";

import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import { useVuelidate } from "@vuelidate/core";

export default {
  name: "FormVuelidateApplication",
  components: {
    Button,
    InputFormText,
    DropdownForm,
    CalendarForm,
    MultiSelectForm,
  },
  props: ["rules", "fields", "personIsEditable"],
  setup(props, { emit }) {
    //store
    const store = useStore();

    //Priority
    const priorityOptions = ref([
      { name: "Yes", code: "true" },
      { name: "No", code: "false" },
    ]);

    //Application Type
    const applicationTypeOptions = computed(() => {
      return store.getters.getApplicationTypes;
    });

    const personLoading = ref(false);
    const personOptions = computed(() => {
      store.dispatch("setUsers").then(() => {
        personLoading.value = true;
      });
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

    const isActiveField = (key) => {
      if (Object.prototype.hasOwnProperty.call(props.rules, key)) {
        return true;
      }
      return false;
    };

    //Vuelidate

    const form = reactive({
      name: props.fields.name,
      reference: props.fields.reference,
      priority: props.fields.priority,
      type: props.fields.type,
      person: props.fields.person,
      department: props.fields.department,
      filingDate: props.fields.filingDate,
      eventDate: props.fields.eventDate,
      subscriptionList: props.fields.subscriptionList,
    });

    form.person = "Szymon Musiał";

    const v$ = useVuelidate(props.rules, form);

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

      departmentOptions,
      dateToday,
      eventDateActive,
      form,
      v$,
      handleSubmit,
      submitted,
      isActiveField,
      personLoading,
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
