<template>
  <!-- Input Text -->
  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <Calendar
      :class="{ 'p-invalid': showError }"
      :modelValue="stringToDate(modelValue)"
      @update:modelValue="emitInput"
      :maxDate="stringToDate(maxDate)"
      :manualInput="manualInput"
      :minDate="stringToDate(minDate)"
      :disabled="disabled"
    />

    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script>
import Calendar from "primevue/calendar";
import LabelForm from "../atoms/LabelForm.vue";

import { computed } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

export default {
  name: "CalendarForm",
  components: { LabelForm, SmallErrorForm, Calendar },
  emits: ["emitInput"],
  props: ["input", "submitted", "label", "modelValue", "maxDate", "manualInput", "minDate", "disabled"],
  setup(props, { emit }) {
    const emitInput = (event) => {
      emit("update:modelValue", event);
      console.log(event);
    };
    const stringToDate = (string) => {
      let date = new Date(string);
      if (!isNaN(date)) {
        return date;
      } else {
        return "";
      }
    };
    const showError = computed(() => {
      if (props.input.$invalid && props.submitted) {
        return true;
      } else {
        false;
      }
    });

    return { emitInput, showError, stringToDate };
  },
};
</script>

<style></style>
