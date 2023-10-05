<template>
  <div class="container d-flex flex-column justify-content-between py-5">
    <img class="back" src="../assets/back.png" @click="goBack" />
    <div class="d-flex align-items-center justify-content-center">
      <img :src="getImgUrl(category)" v-bind:alt="category">
      <h1 class="title">{{ category }}</h1>
    </div>
    <div>
      <div class="mt-3 reset">
        <img src="../assets/reset.png" v-if="count > 0 && current != total" @click="onReset" />
      </div>
      <div class="progress mt-3">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          :aria-valuenow="Math.floor(current / total * 100)"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="'width: ' + Math.floor(current / total * 100) + '%'"
        >
          {{ Math.floor(current / total * 100) }}%
        </div>
      </div>
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
import SimpleKeyboard from "../components/SimpleKeyboard";
import animals from '../data/animals.json';
import colors from '../data/colors.json';
import foods from '../data/foods.json';
import fruits from '../data/fruits.json';
import jobs from '../data/jobs.json';
import shapes from '../data/shapes.json';
import sports from '../data/sports.json';

export default {
  name: "PlayWords",
  components: {
    SimpleKeyboard
  },
  data() {
    return {
      category: '',
      tasks: [],
      total: 0,
      current: 0,
      word: '',
      letters: [],
      rand1: 0,
      rand2: 0,
      count: 0
    }
  },
  created() {
    this.category = this.$route.params.category;
    let words = [];

    switch (this.category) {
      case 'animals':
        words = animals;
        break;
      case 'colors':
        words = colors;
        break;
      case 'foods':
        words = foods;
        break;
      case 'fruits':
        words = fruits;
        break;
      case 'jobs':
        words = jobs;
        break;
      case 'shapes':
        words = shapes;
        break;
      case 'sports':
        words = sports;
        break;
      case 'all':
        words = animals.concat(colors, foods, fruits, jobs, shapes, sports);
        break;
    }

    while (this.tasks.length < 5) {
      const task = words[Math.floor(Math.random() * (words.length - 1))];
      if (!this.tasks.includes(task)) {
        this.tasks.push(task);
        this.total += task.length;
      }
    }

    this.word = this.tasks[0];

    const rand1 = Math.floor(Math.random() * (this.word.length - 2)) + 1;
    let rand2 = -1;
    if (this.word.length > 4) {
      rand2 = rand1;
      while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * (this.word.length - 2)) + 1;
      }
    }

    for (let i = 0; i < this.word.length; i++) {
      if (rand1 == i || rand2 == i) {
        this.letters.push(this.word[i]);
      } else {
        this.letters.push('');
      }
    }

    this.rand1 = rand1;
    this.rand2 = rand2;

    this.count = ref(0);
  },
  methods: {
    goBack() {
      this.$router.push('/playnow');
    },
    getImgUrl(url) {
      const images = require.context('../assets/', false, /\.png$/);
      return images('./' + url + ".png");
    },
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
        
        if (this.count == this.letters.length) {
          let letters = '';
          for (let i = 0; i < this.letters.length; i++) {
            letters += this.letters[i];
          }

          if (this.word == letters) {
            this.current += this.count;

            if (this.tasks.length > 1) {
              this.tasks.shift();
              this.next();
            }
          }
        }
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
    next() {
      const word = this.tasks[0];

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

      this.word = word;
      this.letters = letters;
      this.rand1 = rand1;
      this.rand2 = rand2;
      this.count = ref(0);
    }
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
.container {
  min-height: 100vh;
}
.back {
  cursor: pointer;
  height: 60px;
  position: absolute;
  width: 60px;
}
.title {
  color: white;
  font-family: cursive;
  font-size: 50px;
  font-weight: bold;
  margin-left: 20px;
  text-transform: capitalize;
}
.reset {
  min-height: 50px;
}
.reset img {
  cursor: pointer;
  height: 50px;
  width: 50px;
}
.progress {
  margin: 0 50px;
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
  color: gold;
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
