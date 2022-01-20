<template>
  <div id="Applications">
    <AddApplicationDialog />
    <ApplicationsTable />
    <AddNewApplication />
  </div>
</template>

<script>
import ApplicationsTable from "../components/organisms/ApplicationsTable.vue";
import AddNewApplication from "../components/organisms/ButtonNewApplication.vue";
import AddApplicationDialog from "../components/organisms/ModalAddApplication.vue";

export default {
  name: "Applications",
  components: { ApplicationsTable, AddNewApplication, AddApplicationDialog },
};
</script>
