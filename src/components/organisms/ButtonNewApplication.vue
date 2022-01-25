<template>
  <div class="add-application">
    <OwnButton
      label="Add New Application in modal"
      @click="addNewApplication"
      :loading="loading"
      className="p-button-large"
    />
    <OwnButton
      label="Add New Applications in the new card"
      @click="addNewApplicationInNewCard"
      :loading="loading"
      className="p-button-large"
    />
  </div>
</template>

<script>
// TO DO: replace with one button for add and other edits
import { ref } from "@vue/reactivity";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import OwnButton from "../atoms/OwnButton.vue";

export default {
  name: "ButtonNewApplication",
  components: { OwnButton },
  setup() {
    const router = useRouter();
    const store = useStore();
    const loading = ref(false);

    const addNewApplication = () => {
      store.commit("setModal", "add");
    };

    const addNewApplicationInNewCard = () => router.push("/add");
    return { addNewApplication, loading, addNewApplicationInNewCard, router };
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

.add-application .p-button {
  margin: 0 36px;
}
</style>
