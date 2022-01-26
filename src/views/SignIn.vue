<template>
  <div class="sign-in" id="sign-in">
    <SignInForm class="sign-in__form" @send="signin" />
    <SignInBanner class="sign-in__banner" />
  </div>
</template>

<script>
import SignInBanner from "../components/molecules/SignInBanner.vue";
import SignInForm from "../components/molecules/SignInForm.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ownToast from "../composables/ownToast";

export default {
  name: "SignIn",
  components: { SignInForm, SignInBanner },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { showErrorToast, showSuccessToast } = ownToast();
    const signin = (form) => {
      store
        .dispatch("signIn", form)
        .then(() => {
          showSuccessToast("Zalogowano!", "Zostałeś pomyślnie zalogowany!");
          router.push("/");
        })
        .catch(() => {
          showErrorToast("Błąd", "Nie udało się zalogować!");
        });
    };
    return { signin };
  },
};
</script>

<style scoped>
#sign-in {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
}

.sign-in__form {
  flex: 1.25;
}

.sign-in__banner {
  flex: 1.75;
}
</style>
