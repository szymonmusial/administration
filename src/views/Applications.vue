<template>
  <div id="Applications">
    <ModalAddApplication v-if="modal == 'add'" @closeModal="closeModal" />
    <ModalBasicEditApplication
      v-if="modal == 'basicEdit'"
      @closeModal="closeModal"
    />
    <modal-date-edit-application
      v-if="modal == 'dateEdit'"
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
import ModalDateEditApplication from "../components/organisms/ModalDateEditApplication.vue";

export default {
  name: "Applications",
  components: {
    ApplicationsTable,
    ButtonNewApplication,
    ModalAddApplication,
    ModalBasicEditApplication,
    ModalDateEditApplication,
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
