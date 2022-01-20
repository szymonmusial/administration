<template>
  <div>
    <DataTable :value="applications">
      <Column field="name" header="Name"> </Column>
      <Column field="reference_number" header="Reference"> </Column>
      <Column header="Priority">
        <template #body="slotProps">
          <PriorityColumn :priority="slotProps.data.priority" />
        </template>
      </Column>
      <Column field="application_type" header="Application Type"> </Column>
      <Column field="person" header="Person"> </Column>
      <Column field="department" header="Department"> </Column>
      <Column field="filing_date" header="Filing Date"> </Column>
      <Column field="event_date" header="Event Date"> </Column>
      <Column>
        <template #body="slotProps">
          <EditApplication :id="slotProps.data.id" /></template
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import EditApplication from "./ButtonEditApplication.vue";
import PriorityColumn from "../molecules/PriorityColumn.vue";

import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "ApplicationsTable",
  components: {
    DataTable,
    Column,
    EditApplication,
    PriorityColumn,
  },
  setup() {
    const store = useStore();
    const applications = computed(() => store.getters.getApplications);

    return { applications };
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>
