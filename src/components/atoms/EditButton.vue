<template>
  <Button label="Edit" class="button-edit" :loading="loading" />
</template>

<script>
import Button from "primevue/button";
export default {
  name: "Edit Button",
  components: { Button },
  props: ["loading"],
};
</script>
<style scoped>
.button-edit {
  padding: 12px 28px;
}
</style>
