<template>
  <label :class="{ 'p-error': showError }" class="form__label">{{ label }}</label>
</template>

<script>
export default {
  name: "LabelForm",
  props: {
    showError: String,
    label: String,
  },
};
</script>

<style>
.form__label {
  margin-bottom: 10px !important;
  display: block;
  font-weight: 600;
}
</style>
