<template>
  <OwnButton @click="editApplication" :label="label" :className="className" />
</template>

<script>
// TO DO: replace with one button for add and other edits

import OwnButton from "../atoms/OwnButton.vue";
import { useStore } from "vuex";

export default {
  name: "ButtonEditApplication",
  components: { OwnButton },
  props: ["id", "label", "editType", "className"],
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
