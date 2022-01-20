<template>
  <div>
    {{ emitedText.value }}
    <FormInputText label="Name" @emitText="emitText" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormInputText from "../atoms/FormInputText.vue";

export default {
  name: "ApplicationNameInput",
  components: { FormInputText },
  setup() {
    const emitedText = ref("aaa");
    const emitText = (text) => {
      emitedText.value = text;
    };
    return { emitedText, emitText };
  },
};
</script>
