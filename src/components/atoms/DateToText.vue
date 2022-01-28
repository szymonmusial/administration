<template>
  <div>{{ formatDate }}</div>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  name: "DateToText",
  props: {
    date: {
      type: String,
      required: true,
    },
    locales: String,
    dateStyle: {
      type: String,
      default: "full",
    },
  },
  setup(props) {
    const formatDate = computed((): String => {
      let formatedDate: String | Date = new Date(props.date);
      let dateOptions: object = {
        dateStyle: props.dateStyle,
      };
      formatedDate = formatedDate.toLocaleString(props.locales, dateOptions);
      return formatedDate;
    });

    return { formatDate };
  },
};
</script>
<style></style>
