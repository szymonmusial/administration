<template>
  <!-- Input Text -->

  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <InputText
      id="name"
      :type="texttype"
      :class="[{ 'p-invalid': showError }, className]"
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
  props: ["input", "submitted", "label", "modelValue", "className", "texttype"],
  setup(props, { emit }) {
    const emitInput = (event) => {
      emit("update:modelValue", event.target.value);
    };

    const showError = computed(() => props.input.$invalid && props.submitted);

    return { emitInput, showError };
  },
};
</script>

<style scoped>
.outlined {
  color: #0b213f !important;
  border-width: 2px !important;
  background: #fff !important;
}

.p-field {
  margin: 24px 0px;
}
</style>
