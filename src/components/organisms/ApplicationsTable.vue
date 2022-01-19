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
          <EditButton @click="editApplications(slotProps.data.id)" /></template
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import EditButton from "../atoms/EditButton.vue";
import PriorityColumn from "./PriorityColumn.vue";

import { reactive } from "@vue/reactivity";

export default {
  name: "ApplicationsTable",
  components: {
    DataTable,
    Column,
    EditButton,
    PriorityColumn,
  },
  setup() {
    const applications = reactive([
      {
        id: "0",
        name: "Wniosek o dofinansowanie kotów",
        reference_number: "111-11",
        priority: true,
        application_type: "Wniosek Ogólny",
        person: "Szymon Musiał",
        person_id: 0,
        department: "Dział Badawczo-Rozwojowy",
        filing_date: "19-01-2020",
        event_date: "10-01-2020",
      },
      {
        id: "1",
        name: "Wniosek o dofinansowanie Psów",
        reference_number: "111-12",
        priority: true,
        application_type: "Wniosek Ogólny",
        person: "Szymon Musiał",
        person_id: 1,
        department: "Dział Badawczo-Rozwojowy",
        filing_date: "19-01-2020",
        event_date: "01-01-2020",
      },
    ]);

    const editApplications = (id) => {
      alert(id);
    };

    return { applications, editApplications };
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>
