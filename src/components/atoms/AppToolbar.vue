<template>
  <Toolbar>
    <template #start>
      <div class="name toolbar__text">
        {{ person.Name }}
      </div>
      <div class="position toolbar__text">{{ person.Job }}</div>
    </template>

    <template #end>
      <own-button
        label="Log Out"
        icon="pi"
        className="p-button-secondary"
        @click="$emit('logOut')"
      />
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from "primevue/toolbar";

import OwnButton from "./OwnButton.vue";

export default {
  name: "AppToolbar",
  props: ["person"],
  emits: ["logOut"],
  components: { Toolbar, OwnButton },
};
</script>

<style scoped>
.toolbar__text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-right: 1.5rem;
}
.p-toolbar {
  background: #091b33;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #0d274b;
  padding: 0.8rem 1.25rem;
}
</style>
