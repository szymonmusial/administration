<template>
  <div id="Applications">
    <ModalAddApplication v-if="modal == 'add'" @closeModal="closeModal" />
    <ModalBasicEditApplication
      v-if="modal == 'basicEdit'"
      @closeModal="closeModal"
    />
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
import ModalBasicEditApplication from "../components/organisms/ModalBasicEditApplication.vue";

export default {
  name: "Applications",
  components: {
    ApplicationsTable,
    ButtonNewApplication,
    ModalAddApplication,
    ModalBasicEditApplication,
  },
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
