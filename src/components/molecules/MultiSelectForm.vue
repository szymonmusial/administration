<template>
  <div class="p-field p-col-12 p-md-6 test">
    <LabelForm :label="label" :showError="showError" />

    <MultiSelect
      :options="options"
      :modelValue="modelValue"
      @update:modelValue="emitInput"
      :class="{ 'p-invalid': showError }"
      :optionLabel="optionLabel"
      :optionValue="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import LabelForm from "../atoms/LabelForm.vue";

import { computed } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

export default {
  name: "MultiSelectForm",
  components: { MultiSelect, LabelForm, SmallErrorForm },
  emits: ["emitInput"],
  props: {
    input: Object,
    submitted: Boolean,
    label: String,
    modelValue: Array,
    options: Object,
    placeholder: String,
    disabled: Boolean,
    optionLabel: {
      type: String,
      default: "name",
    },
    optionValue: {
      type: String,
      default: "name",
    },
  },
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
