<template>
  <div id="Applications">
    <ModalAddApplication v-if="modal == 'add'" @closeModal="closeModal" />
    <ApplicationsTable />
    <ButtonNewApplication />
  </div>
</template>

<script>
import ApplicationsTable from "../components/organisms/ApplicationsTable.vue";
import ButtonNewApplication from "../components/organisms/ButtonNewApplication.vue";
import ModalAddApplication from "../components/organisms/ModalAddApplication.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "Applications",
  components: { ApplicationsTable, ButtonNewApplication, ModalAddApplication },
  setup() {
    const store = useStore();
    const modal = computed(() => store.getters.getModal);
    const closeModal = () => {
      store.commit("setModal", "close");
    };

    return { modal, closeModal };
  },
};
</script>
