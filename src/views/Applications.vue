<template>
  <div id="Applications">
    <ApplicationsTable />
    <AddNewApplication />
  </div>
</template>

<script>
import ApplicationsTable from "../components/organisms/ApplicationsTable.vue";
import AddNewApplication from "../components/organisms/AddNewApplication.vue";
export default {
  name: "Applications",
  components: { ApplicationsTable, AddNewApplication },
};
</script>
