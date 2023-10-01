<template>
  <div class="home">
    <div class="loading" v-if="loading">
      <div class="logo">
        <img src="../assets/logo.png" height="136" width="760" />
      </div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :aria-valuenow="percent"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="'width: ' + percent + '%'"
        >
          {{ percent == 100 ? 'Loading...' : '' }}
        </div>
      </div>
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
      loading: true,
      percent: 10
    }
  },
  created() {
    setInterval(() => {
      if (this.percent < 60) {
        this.percent = this.percent + 3;
      } else if (this.percent < 100) {
        this.percent++
      } else {
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      }
    }, 100);
  }
};
</script>

<style lang="less">
.home {
  background-image: url('../assets/home.png');
  background-position: center;
  height: 100vh;
}
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
  padding-bottom: 30vh;
  width: 33vw;
}
.loading .progress .progress-bar {
  background-color: white;
  border-radius: 15px;
  color: green;
  font-size: 18px;
  height: 30px;
}
</style>
