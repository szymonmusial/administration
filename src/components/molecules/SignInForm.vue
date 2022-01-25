<template>
  <div class="p-dialog-content p-component">
    <div class="container">
      <div class="title">
        <h2>Logowanie do panelu administratora</h2>
        <h4>Życzymy miłego dnia pracy</h4>
      </div>
      <div class="form p-fluid p-formgrid p-grid basic-application-form">
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <!-- Login -->
          <InputFormText
            :input="v$.login"
            :submitted="submitted"
            v-model="form.login"
            label="Login"
            className="outlined"
          />
          <!-- Password -->
          <InputFormText
            :input="v$.password"
            :submitted="submitted"
            v-model="form.password"
            label="Password"
            className="outlined"
            texttype="password"
          />
          <Button type="submit" label="Submit" class="mt-2 p-button" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import InputFormText from "../molecules/InputFormText.vue";

import { required } from "@vuelidate/validators";
import { reactive, ref } from "@vue/reactivity";

import { useVuelidate } from "@vuelidate/core";
export default {
  name: "FormSignIn",
  components: { Button, InputFormText },
  emits: ["send"],
  setup(props, { emit }) {
    const form = reactive({
      login: "a",
      password: "a",
    });
    const rules = reactive({
      login: { required },
      password: { required },
    });

    const v$ = useVuelidate(rules, form);
    const submitted = ref(false);
    const handleSubmit = (isFormValid) => {
      submitted.value = true;
      if (isFormValid) {
        emit("send", form);
      }
    };

    return { v$, handleSubmit, form, rules, submitted };
  },
};
</script>
<style scoped>
.title {
  color: #08172c;
}

.sign-in__form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-button {
  color: #fff;
  background-color: #3a3db3;
  padding: 0.9rem;
  margin-top: 10px;
}

.form {
  margin-top: 48px;
}

h4 {
  margin: 0px;
  font-weight: 500;
}

h2 {
  margin: 1rem 0;
}
</style>
