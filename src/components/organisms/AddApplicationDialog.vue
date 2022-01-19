<template>
  <Modal @closeModal="closeModal" v-if="Modal == 'add'">ab </Modal>
</template>

<script>
import Modal from "../atoms/Modal.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "AddApplicationDialog",
  components: { Modal },
  setup() {
    const store = useStore();
    const Modal = computed(() => store.getters.getModal);
    const closeModal = () => {
      store.commit("setModal", "close");
    };

    return { closeModal, Modal };
  },
};
</script>

<style></style>
