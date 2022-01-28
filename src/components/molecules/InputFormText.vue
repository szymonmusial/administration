<template>
  <!-- Input Text -->

  <div class="p-field p-col-12 p-md-6">
    <LabelForm :label="label" :showError="showError" />

    <InputText
      id="name"
      :type="texttype"
      :class="[{ 'p-invalid': showError }, className]"
      :modelValue="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script lang="ts">
import InputText from "primevue/inputtext";
import LabelForm from "../atoms/LabelForm.vue";

import { computed, PropType } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

import { Validation } from "@vuelidate/core";

export default {
  name: "InputFormText",
  components: { InputText, LabelForm, SmallErrorForm },
  emits: ["update:modelValue"],
  props: {
    input: {
      type: Object as PropType<Validation>,
      required: true,
    },
    submitted: Boolean,
    label: String,
    modelValue: String,
    className: String,
    texttype: String,
  },
  setup(props) {
    const showError = computed(() => props.input.$invalid && props.submitted);

    return { showError };
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
