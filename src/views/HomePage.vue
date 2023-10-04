<template>
  <div class="loading">
    <div class="logo">
      <img src="../assets/logo.png" height="136" width="760" />
    </div>
    <div class="progress mb-5">
      <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="percent"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="'width: ' + percent + '%'"
      >
        {{ loading ? 'Loading...' : '' }}
      </div>
    </div>
    <div class="start">
      <div class="button" v-if="!loading" @click="startPlay" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      loading: true,
      interval: 0,
      percent: 30,
    }
  },
  created() {
    this.interval = setInterval(() => {
      if (this.percent < 80) {
        this.percent = this.percent + 4;
      } else if (this.percent < 100) {
        this.percent++
      } else {
        clearInterval(this.interval);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    }, 100);
  },
  methods: {
    startPlay() {
      this.$router.push('/playnow');
    }
  }
};
</script>

<style lang="less">
.loading {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
.loading .logo {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
}
.loading .progress {
  background: transparent;
  border-radius: 15px;
  height: 30px;
  margin: 0 auto;
  width: 33vw;
}
.loading .progress .progress-bar {
  background-color: white;
  border-radius: 15px;
  color: green;
  font-size: 18px;
  height: 30px;
}
.start {
  min-height: 150px;
}
.start .button {
  background: url('../assets/start.png') no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 65px;
  margin: 0 auto;
  width: 150px;
}
</style>
