<template>
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
  <div class="play" v-else>
    <h1 class="title text-center pt-5">Select Category</h1>
    <div class="content d-flex flex-wrap p-3 justify-content-center">
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('animals')"
      >
        <div>
          <img src="../assets/animals.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'animals'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Animals</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('colors')"
      >
        <div>
          <img src="../assets/colors.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'colors'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Colors</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('foods')"
      >
        <div>
          <img src="../assets/foods.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'foods'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Foods</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('fruits')"
      >
        <div>
          <img src="../assets/fruits.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'fruits'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Fruits</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('jobs')"
      >
        <div>
          <img src="../assets/jobs.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'jobs'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Jobs</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('shapes')"
      >
        <div>
          <img src="../assets/shapes.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'shapes'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Shapes</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('sports')"
      >
        <div>
          <img src="../assets/sports.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'sports'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">Sports</h3>
        </div>
      </div>
      <div
        class="category d-flex flex-column justify-content-between text-center"
        @click="onSetCategory('all')"
      >
        <div>
          <img src="../assets/all.png" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == 'all'" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">All</h3>
        </div>
      </div>
    </div>
    <div class="button" v-if="category != ''" @click="goToPlay" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      loading: true,
      percent: 10,
      category: ''
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
  },
  methods: {
    onSetCategory(value) {
      this.category = value;
    },
    goToPlay() {
      this.$router.push(`/playnow/${this.category}`)
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
.play .title {
  color: white;
  font-family: cursive;
  font-size: 50px;
  font-weight: bold;
}
.play .content {
  margin: 0 auto;
  max-width: 1200px;
}
.play .content .category {
  cursor: pointer;
  height: 230px;
  margin-bottom: 30px;
  width: 250px;
}
.play .content .category .name {
  color: white;
  font-family: system-ui;
  margin-left: 20px;
}
.play .content .category:hover .name {
  text-shadow: gray 2px 3px;
}
.play .button {
  background: url('../assets/button.png') no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 54px;
  margin: 0 auto;
  width: 150px;
}
</style>
