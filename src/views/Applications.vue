<template>
  <div id="Applications">
    <ModalAddApplication />
    <ApplicationsTable />
    <ButtonNewApplication />
  </div>
</template>

<script>
import ApplicationsTable from "../components/organisms/ApplicationsTable.vue";
import ButtonNewApplication from "../components/organisms/ButtonNewApplication.vue";
import ModalAddApplication from "../components/organisms/ModalAddApplication.vue";

export default {
  name: "Applications",
  components: { ApplicationsTable, ButtonNewApplication, ModalAddApplication },
};
</script>
