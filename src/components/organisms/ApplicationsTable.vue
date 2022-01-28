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
      <Column field="person" header="Person" v-if="modifyUserInfo"> </Column>
      <Column field="department" header="Department"> </Column>
      <Column header="Subscriptions">
        <template #body="slotProps">
          <ButtonOpenModal
            :id="slotProps.data.id"
            label="Show"
            editType="ListSubscription"
            :disabled="!modifyUserInfo"
          /> </template
      ></Column>
      <Column header="Filing Date">
        <template #body="slotProps">
          <DateToText :date="slotProps.data.filing_date" locales="pl-PL" dateStyle="short" />
        </template>
      </Column>
      <Column header="Event Date">
        <template #body="slotProps">
          <DateToText :date="slotProps.data.event_date" locales="pl-PL" dateStyle="short" />
        </template>
      </Column>
      <Column>
        <template #body="slotProps">
          <ButtonOpenModal
            :id="slotProps.data.id"
            label="Basic Edit"
            editType="basicEdit"
            className="p-button-secondary"
          /> </template
      ></Column>
      <Column>
        <template #body="slotProps">
          <ButtonOpenModal :id="slotProps.data.id" label="Date Edit" editType="dateEdit" /> </template
      ></Column>
      <Column>
        <template #body="slotProps">
          <ButtonOpenModal
            :id="slotProps.data.id"
            label="Person Edit"
            editType="personEdit"
            className="p-button-help"
            :disabled="!modifyUserInfo"
          /> </template
      ></Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import ButtonOpenModal from "./ButtonOpenModal.vue";
import PriorityColumn from "../molecules/PriorityColumn.vue";
import DateToText from "../atoms/DateToText.vue";

import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { canModifyUserInfo } from "../../infrastructure/permission/usePermission";
import { Applications } from "@/store/modules/application/applicationType";

export default {
  name: "ApplicationsTable",
  components: {
    DataTable,
    Column,
    ButtonOpenModal,
    PriorityColumn,
    DateToText,
  },
  setup() {
    const store = useStore();
    const applications = computed((): Applications => store.getters.getApplications);
    const modifyUserInfo = canModifyUserInfo();
    return { applications, modifyUserInfo };
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>
