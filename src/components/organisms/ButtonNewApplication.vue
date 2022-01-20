<template>
  <div class="add-application">
    <LargeButton
      label="Add New Applications"
      @click="addNewApplication"
      :loading="loading"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LargeButton from "../atoms/LargeButton.vue";
import { useStore } from "vuex";

export default {
  name: "AddNewApplication",
  components: { LargeButton },
  setup() {
    const store = useStore();
    const loading = ref(false);

    const addNewApplication = () => {
      store.commit("setModal", "add");
    };
    return { addNewApplication, loading };
  },
};
</script>

<style scoped>
.add-application {
  background: #071426;
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid #0b213f;
  border-width: 0 0 1px 0;
  padding: 1rem 1rem;
  font-weight: 700;
  text-align: center;
}
</style>
