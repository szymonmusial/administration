<template>
  <div class="p-field p-col-12 p-md-6 test">
    <LabelForm :label="label" :showError="showError" />

    <Dropdown
      :options="options"
      :modelValue="modelValue"
      @update:modelValue="emitInput"
      :class="{ 'p-invalid': showError }"
      optionLabel="name"
      optionValue="code"
      :placeholder="placeholder"
    />

    <SmallErrorForm :input="input" :showError="showError" :label="label" />
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import LabelForm from "../atoms/LabelForm.vue";

import { computed, ref } from "@vue/runtime-core";
import SmallErrorForm from "../atoms/SmallErrorForm.vue";

export default {
  name: "InputFormText",
  components: { Dropdown, LabelForm, SmallErrorForm },
  emits: ["emitInput"],
  props: {
    input: Object,
    submitted: Boolean,
    label: String,
    modelValue: Object,
    options: Object,
    placeholder: String,
    optionLabel: {
      type: String,
      default: "name",
    },
    optionValue: {
      type: String,
      default: "code",
    },
  },
  setup(props, { emit }) {
    const test = ref("");
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

    return { emitInput, showError, test };
  },
};
</script>

<style></style>
