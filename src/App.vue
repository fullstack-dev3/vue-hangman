<template>
  <div class="container">
    <div class="mt-3 reset">
      <button class="btn btn-primary" v-if="count > 0" @click="onReset">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        Reset
      </button>
    </div>
    <div class="word">
      <div
        :key="index"
        :class="count == index ? 'active letter' : 'letter'"
        v-for="(letter, index) in letters"
      >
        {{ letter }}
      </div>
    </div>
    <SimpleKeyboard @onKeyPress="onKeyPress" />
  </div>
</template>

<script>
import { ref } from "vue";
import SimpleKeyboard from "./components/SimpleKeyboard";

const words = [
  'apple',
  'banana',
  'cherry',
  'grape',
  'lemon',
  'mango',
  'orange',
  'pineapple',
  'peach',
  'pear',
  'strawberry',
  'watermelon',
];

export default {
  name: "App",
  components: {
    SimpleKeyboard
  },
  setup: () => {
    const word = words[Math.floor(Math.random() * (words.length - 1))];

    const rand1 = Math.floor(Math.random() * (word.length - 2)) + 1;
    let rand2 = -1;
    if (word.length > 4) {
      rand2 = rand1;
      while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * (word.length - 2)) + 1;
      }
    }

    let letters = [];
    for (let i = 0; i < word.length; i++) {
      if (rand1 == i || rand2 == i) {
        letters.push(word[i]);
      } else {
        letters.push('');
      }
    }

    const count = ref(0)

    return {
      word,
      letters,
      rand1,
      rand2,
      count
    }
  },
  methods: {
    onKeyPress(button) {
      if (this.count < this.letters.length) {
        this.letters[this.count] = button;
        if (this.rand1 == this.count + 1 || this.rand2 == this.count + 1) {
          this.count++;
          if (this.rand1 == this.count + 1 || this.rand2 == this.count + 1) {
            this.count++;
          }
        }
        this.count++;
      }
    },
    onReset() {
      for (let i = 0; i < this.letters.length; i++) {
        if (this.rand1 == i || this.rand2 == i) {
          this.letters[i] = this.word[i];
        } else {
          this.letters[i] = '';
        }
      }

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
.letter.active {
  border-bottom: 2px solid black;
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
