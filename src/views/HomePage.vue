<template>
  <div class="container">
    <div class="loading">
      <img v-bind:src="require('../assets/home.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style lang="less">
.loading {
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>
