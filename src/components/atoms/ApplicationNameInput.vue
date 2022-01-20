<template>
  <div>
    {{ emitedText }}
    <FormInputText v-model="emitedText" />
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

    return { emitedText };
  },
};
</script>
