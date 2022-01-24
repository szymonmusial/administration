<template>
  <EditButton @click="editApplication" :label="label" />
</template>

<script>
import EditButton from "../atoms/EditButton.vue";
import { useStore } from "vuex";

export default {
  name: "ButtonEditApplication",
  components: { EditButton },
  props: ["id", "label", "editType"],
  setup(props) {
    const store = useStore();
    const editApplication = () => {
      store.commit("setModal", props.editType);
      store.commit("setEditingApplicationId", props.id);
    };

    return { editApplication };
  },
};
</script>

<style></style>
