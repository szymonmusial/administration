<template>
  <small
    v-if="showError || input.$pending.$response"
    class="p-error form__small-error"
  >
    {{ message }}
  </small>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "SmallErrorForm",
  props: ["input", "showError", "label"],

  setup(props) {
    const message = computed(() => {
      return props.input.required.$message.replace("Value", props.label);
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
