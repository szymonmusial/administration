<template>
  <small v-if="showError || input.$pending.$response" class="p-error form__small-error">
    {{ message }}
  </small>
</template>

<script lang="ts">
import { computed, PropType } from "@vue/runtime-core";
import { Validation, ErrorObject } from "@vuelidate/core";

export default {
  name: "SmallErrorForm",
  props: {
    input: {
      type: Object as PropType<Validation>,
      required: true,
    },
    showError: Boolean,
    label: String,
  },

  setup(props) {
    const message = computed(() => {
      const errorArray: Array<ErrorObject> = props.input.$silentErrors;
      let messages: string = "";
      for (let index = 0; index < errorArray.length; index++) {
        messages = messages + errorArray[index].$message;
      }
      return messages;
    });

    return { message };
  },
};
</script>

<style scoped>
.form__small-error {
  margin-top: 10px !important;
  display: block;
}
</style>
