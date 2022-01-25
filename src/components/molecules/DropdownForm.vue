<template>
  <div class="p-field p-col-12 p-md-6 test">
    <LabelForm :label="label" :showError="showError" />

    <Dropdown
      :options="options"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :class="{ 'p-invalid': showError }"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :loading="loading"
    />

    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import LabelForm from "../atoms/LabelForm.vue";

import { computed } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

export default {
  name: "DropdownForm",
  components: { Dropdown, LabelForm, SmallErrorForm },
  emits: ["emitInput"],
  props: {
    input: Object,
    submitted: Boolean,
    label: String,
    modelValue: [String, Boolean],
    options: Object,
    placeholder: String,
    disabled: Boolean,
    loading: Boolean,
    optionLabel: {
      type: String,
      default: "name",
    },
    optionValue: {
      type: String,
      default: "name",
    },
  },
  setup(props) {
    const showError = computed(() => props.input.$invalid && props.submitted);
    return { showError };
  },
};
</script>

<style></style>
