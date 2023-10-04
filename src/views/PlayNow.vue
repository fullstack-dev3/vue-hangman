<template>
  <div class="play">
    <h1 class="title text-center pt-5">Select Category</h1>
    <div class="content d-flex flex-wrap p-3 justify-content-center">
      <div
        class="category d-flex flex-column justify-content-between text-center"
        v-bind:key="index"
        v-for="(item, index) in categories"
        @click="onSetCategory(item)"
      >
        <div>
          <img :src="getImgUrl(item)" v-bind:alt="item">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img src="../assets/checked.png" v-if="category == item" />
          <img src="../assets/check.png" v-else />
          <h3 class="name">{{ item }}</h3>
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
      categories: [
        'animals',
        'colors',
        'foods',
        'fruits',
        'jobs',
        'shapes',
        'sports',
        'all'
      ],
      category: ''
    }
  },
  methods: {
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/);
      return images('./' + url + ".png");
    },
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
  margin-bottom: 0;
  margin-left: 20px;
  text-transform: capitalize;
}
.play .content .category:hover .name {
  text-shadow: gray 2px 3px;
}
.play .button {
  background: url('../assets/play.png') no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 54px;
  margin: 0 auto;
  width: 150px;
}
</style>
