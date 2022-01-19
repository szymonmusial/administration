<template>
  <div id="Applications">
    <ApplicationsTable />
  </div>
</template>

<script>
import ApplicationsTable from "../components/organisms/ApplicationsTable.vue";

export default {
  name: "Applications",
  components: { ApplicationsTable },
};
</script>
