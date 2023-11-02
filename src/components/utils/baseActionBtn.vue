<template>
  <button
    :class="buttonClasses" @click="toggleButtonText">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isClicked: false
    };
  },
  props: {
    initialText: {
      type: String,
      required: true,
    },
    clickedText: {
      type: String,
      default: "Clicked me!",
    },
    initialClass: {
      type: String,
      default: "bg-green hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
    },
    clickedClass: {
      type: String,
      default: "bg-white hover:bg-white-600 text-green font-semibold py-2 px-4 rounded border-2 border-green"
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
    cancel: {
      type: Function,
      default: () => {},
    }
  },
  methods: {
    toggleButtonText() {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        this.onSubmit();
      } else {
        this.cancel();
      }
    },
  },
  computed: {
    buttonText() {
      return this.isClicked ? this.clickedText : this.initialText;
    },
    buttonClasses() {
      return {
        [this.initialClass]: !this.isClicked,
        [this.clickedClass]: this.isClicked,
      };
    },
  },
};
</script>
