<template>
  <div class="p-field p-col-12 p-md-6 test">
    <LabelForm :label="label" :showError="showError" />

    <MultiSelect
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

<script lang="ts">
import MultiSelect from "primevue/multiselect";
import LabelForm from "../atoms/LabelForm.vue";

import { computed, PropType } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";
import { Validation } from "@vuelidate/core";

export default {
  name: "MultiSelectForm",
  components: { MultiSelect, LabelForm, SmallErrorForm },
  emits: ["emitInput"],
  props: {
    input: {
      type: Object as PropType<Validation>,
      required: true,
    },
    submitted: Boolean,
    label: String,
    modelValue: Array,
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
