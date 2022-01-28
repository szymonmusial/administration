<template>
  <!-- Input Text -->
  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <Calendar
      :class="{ 'p-invalid': showError }"
      :modelValue="stringToDate(modelValue)"
      @update:modelValue="$emit('update:modelValue', $event)"
      :maxDate="stringToDate(maxDate)"
      :manualInput="manualInput"
      :minDate="stringToDate(minDate)"
      :disabled="disabled"
    />

    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script lang="ts">
import Calendar from "primevue/calendar";
import LabelForm from "../atoms/LabelForm.vue";

import { computed, PropType } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

import { Validation } from "@vuelidate/core";

export default {
  name: "CalendarForm",
  components: { LabelForm, SmallErrorForm, Calendar },
  emits: ["update:modelValue"],
  props: {
    input: {
      type: Object as PropType<Validation>,
      required: true,
    },
    submitted: {
      type: Boolean,
      required: true,
    },
    label: String,
    modelValue: [String, Date],
    maxDate: String,
    manualInput: Boolean,
    minDate: String,
    disabled: Boolean,
  },
  setup(props) {
    const stringToDate = (string: string): Date | null => {
      let date: Date = new Date(string);
      if (!isNaN(+date)) {
        return date;
      } else {
        return null;
      }
    };
    const showError = computed((): boolean => props.input.$invalid && props.submitted);

    return { showError, stringToDate };
  },
};
</script>

<style></style>
