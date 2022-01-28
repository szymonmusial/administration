<template>
  <OwnButton @click="editApplication" :label="label" :className="className" :disabled="disabled" />
</template>

<script lang="ts">
import OwnButton from "../atoms/OwnButton.vue";
import { useStore } from "vuex";
import { modalType, appStore } from "@/store/modules/app/appTypes";
import { PropType } from "@vue/runtime-core";

export default {
  name: "ButtonEditApplication",
  components: { OwnButton },
  props: {
    id: Number,
    label: String,
    editType: {
      type: String as PropType<modalType>,
      required: true,
    },
    className: String,
    disabled: Boolean,
  },
  setup(props) {
    const store = useStore();
    const editApplication = () => {
      store.commit(appStore.commit.setModal, props.editType);
      store.commit(appStore.commit.setEditingApplicationId, props.id);
    };

    return { editApplication };
  },
};
</script>

<style></style>
