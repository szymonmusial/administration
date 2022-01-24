<template>
  <div>{{ formatDate }}</div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "DateToText",
  props: {
    date: String,
    locales: String,
    dateStyle: {
      type: String,
      default: "full",
    },
  },
  setup(props) {
    const formatDate = computed(() => {
      let formatedDate = new Date(props.date);
      let dateOptions = {
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
