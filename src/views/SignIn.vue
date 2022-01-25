<template>
  <div class="sign-in" id="sign-in">
    <SignInForm class="sign-in__form" />
    <SignInBanner class="sign-in__banner" />
  </div>
</template>

<script>
import SignInBanner from "../components/molecules/SignInBanner.vue";
import SignInForm from "../components/molecules/SignInForm.vue";

export default {
  name: "SignIn",
  components: { SignInForm, SignInBanner },
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
