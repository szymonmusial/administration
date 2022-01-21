<template>
  <!-- Input Text -->
  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <Calendar
      :class="{ 'p-invalid': showError }"
      :modelValue="modelValue"
      @update:modelValue="emitInput"
      :maxDate="maxDate"
      :manualInput="manualInput"
      :minDate="minDate"
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
  name: "InputFormText",
  components: { LabelForm, SmallErrorForm, Calendar },
  emits: ["emitInput"],
  props: [
    "input",
    "submitted",
    "label",
    "modelValue",
    "maxDate",
    "manualInput",
    "minDate",
    "disabled",
  ],
  setup(props, { emit }) {
    const emitInput = (event) => {
      emit("update:modelValue", event);
      console.log(event);
    };

    const showError = computed(() => {
      if (props.input.$invalid && props.submitted) {
        return true;
      } else {
        false;
      }
    });

    return { emitInput, showError };
  },
};
</script>

<style></style>
