<template>
  <EditButton @click="editApplication" />
</template>

<script>
import EditButton from "../atoms/EditButton.vue";
import { useStore } from "vuex";

export default {
  name: "EditApplication",
  components: { EditButton },
  props: ["id"],
  setup(props) {
    const store = useStore();
    const editApplication = () => {
      store.commit("setModal", "basicEdit");
      store.commit("setEditingApplicationId", props.id);
    };

    return { editApplication };
  },
};
</script>

<style></style>
