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
      <Column header="Filing Date">
        <template #body="slotProps">
          <DateToText
            :date="slotProps.data.filing_date"
            locales="pl-PL"
            dateStyle="short"
          />
        </template>
      </Column>
      <Column header="Event Date">
        <template #body="slotProps">
          <DateToText
            :date="slotProps.data.event_date"
            locales="pl-PL"
            dateStyle="short"
          />
        </template>
      </Column>
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
import DateToText from "../atoms/DateToText.vue";

import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "ApplicationsTable",
  components: {
    DataTable,
    Column,
    EditApplication,
    PriorityColumn,
    DateToText,
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
