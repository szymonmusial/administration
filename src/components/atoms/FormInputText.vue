<template>
  <div class="p-field p-col-12 p-md-6">
    <label for="name">{{ label }}</label>
    <InputText
      class="text"
      type="text"
      :modelValue="modelValue"
      @input="emitText"
    />
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import { ref } from "@vue/reactivity";

export default {
  name: "FormInputText",
  props: ["label", "modelValue"],
  components: { InputText },
  setup(props, { emit }) {
    const text = ref("");
    const emitText = (event) => {
      emit("update:modelValue", event.target.value);
    };
    return { text, emitText };
  },
};
</script>

<style scoped>
.p-field {
  margin: 24px 0px;
}
.p-inputtext,
.p-dropdown,
.p-calendar {
  margin-top: 10px !important;
}
</style>
>
