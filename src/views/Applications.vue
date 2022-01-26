<template>
  <div id="Applications">
    <app-wrapper>
      <ModalAddApplication v-if="modal == 'add'" @closeModal="closeModal" />
      <ModalBasicEditApplication
        v-if="modal == 'basicEdit'"
        @closeModal="closeModal"
      />
      <ModalDateEditApplication
        v-if="modal == 'dateEdit'"
        @closeModal="closeModal"
      />

      <ModalPersonEdit v-if="modal == 'personEdit'" @closeModal="closeModal" />
      <ModalListSubscriptions
        v-if="modal == 'ListSubscription'"
        @closeModal="closeModal"
      />
      <ApplicationsTable />
      <ButtonNewApplication />
    </app-wrapper>
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
import ModalPersonEdit from "../components/organisms/ModalPersonEdit.vue";
import ModalListSubscriptions from "../components/organisms/ModalListSubscriptions.vue";
import AppWrapper from "../components/organisms/AppWrapper.vue";

export default {
  name: "Applications",
  components: {
    ApplicationsTable,
    ButtonNewApplication,
    ModalAddApplication,
    ModalBasicEditApplication,
    ModalDateEditApplication,
    ModalPersonEdit,
    ModalListSubscriptions,
    AppWrapper,
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
