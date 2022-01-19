<template>
  <EditButton @click="editApplication" :loading="loading" />
</template>

<script>
import { ref } from "@vue/reactivity";
import EditButton from "../atoms/EditButton.vue";
export default {
  name: "EditApplication",
  components: { EditButton },
  props: ["id"],
  setup(props) {
    const loading = ref(false);
    const editApplication = () => {
      loading.value = true;
      alert(props.id);
    };

    return { editApplication, loading };
  },
};
</script>

<style></style>
