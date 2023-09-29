<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <img v-bind:src="require('../assets/home.png')" />
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
};
</script>

<style lang="less">
.loading {
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>
