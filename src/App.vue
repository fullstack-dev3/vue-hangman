<template>
  <div class="container">
    <div class="mt-3 reset">
      <button class="btn btn-primary" v-if="count == letters.length" @click="onReset">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        Reset
      </button>
    </div>
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
      if (this.count < this.letters.length) {
        let letters = this.letters;
        letters[this.count] = button;
        this.letters = letters;
        this.count++;
      }
    },
    onReset() {
      let letters = [];
      for (let i = 0; i < this.letters.length; i++) {
        letters.push('');
      }
      this.letters = letters;

      this.count = 0;
    },
  },
  watch: {
    letters(letters) {
      this.letters = letters;
    },
    count(count) {
      this.count = count;
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
  line-height: 45px;
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
