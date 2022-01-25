<template>
  <!-- Input Text -->

  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <InputText
      id="name"
      type="text"
      :class="{ 'p-invalid': showError }"
      :modelValue="modelValue"
      @input="emitInput"
    />
    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import LabelForm from "../atoms/LabelForm.vue";

import { computed } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

export default {
  name: "InputFormText",
  components: { InputText, LabelForm, SmallErrorForm },
  emits: ["emitInput"],
  props: ["input", "submitted", "label", "modelValue"],
  setup(props, { emit }) {
    const emitInput = (event) => {
      emit("update:modelValue", event.target.value);
    };

    const showError = computed(() => props.input.$invalid && props.submitted);

    return { emitInput, showError };
  },
};
</script>

<style></style>
