<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const display = {
  'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F',
  'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L',
  'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R',
  's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X',
  'y': 'Y', 'z': 'Z'
}

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    }
  },
  data: () => ({
    keyboard: null
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      layout: {
        'default': [
          ' q w e r t y u i o p ',
          ' a s d f g h j k l  ',
          ' z x c v b n m   '
        ]
      },
      display,
      physicalKeyboardHighlight: true,
      physicalKeyboardHighlightPress: true,
      onKeyPress: this.onKeyPress
    });
  },
  methods: {
    onKeyPress(button) {
      this.$emit("onKeyPress", button);
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>
