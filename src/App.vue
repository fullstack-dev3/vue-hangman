<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-image: url('./assets/home.png');
  background-position: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  min-height: 100vh;
}
.container {
  margin: 0 auto;
  width: 840px !important;
}
</style>
