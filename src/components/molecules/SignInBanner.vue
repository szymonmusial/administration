<template>
  <div class="p-component">
    <div class="header">
      <h1 class="header__h1">
        Very good works<br />
        are waiting for you
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInBanner",
};
</script>

<style scoped>
.sign-in__banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #071426;
  background: rgb(34, 100, 191);
  background: linear-gradient(
    -135deg,
    rgba(34, 100, 191, 1) 0%,
    rgba(7, 20, 38, 1) 100%
  );
}

.header__h1 {
  color: #fff;
  font-size: 72px;
  text-align: center;
  line-height: 1.4;
}
</style>
