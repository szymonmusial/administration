<template>
  <div class="add-application">
    <LargeButton
      label="Add New Application in modal"
      @click="addNewApplication"
      :loading="loading"
    />
    <LargeButton
      label="Add New Applications in the new card"
      @click="addNewApplicationInNewCard"
      :loading="loading"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LargeButton from "../atoms/LargeButton.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "ButtonNewApplication",
  components: { LargeButton },
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
