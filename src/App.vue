<template>
  <div class="container">
    <div class="word">
      <div class="letter" v-for="letter in letters" :key="letter.index">
        {{ letter }}
      </div>
    </div>
    <SimpleKeyboard @onKeyPress="onKeyPress" />
  </div>
</template>

<script>
import SimpleKeyboard from "./components/SimpleKeyboard";

export default {
  name: "App",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    letters: ['', '', ''],
    count: 0
  }),
  methods: {
    onKeyPress(button) {
      let letters = this.letters;
      letters[this.count] = button;
      this.letters = letters;
      this.count++;
    }
  }
};
</script>

<style>
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.container {
  margin: 0 auto;
  width: 840px;
}
.reset {
  min-height: 50px;
}
.word {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%
}
.letter {
  border-bottom: 4px solid gold;
  color: green;
  font-size: 45px;
  height: 50px;
  margin: 10px;
  text-align: center;
  width: 50px;
}
.simple-keyboard {
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-radius: 0;
  width: 100%;
}
.simple-keyboard .hg-button {
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  height: 50px;
  justify-content: center;
}
.simple-keyboard .hg-button:active {
  background: #1c4995;
  color: white;
}
</style>
