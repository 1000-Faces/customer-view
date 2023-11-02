<template>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
      <h1 class="bg-black bg-opacity-40 p-1 w-[80vw] md:w-96 lg:w-120 xl:w-[800px] text-[24px] md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white title">
        <span class="word" ref="wordSpan">{{ currentWord }}</span>
      </h1>
    </div>
  </template>
  
  
  
  <script lang="ts">
  export default {
    data() {
      return {
        msg1:"Experience the warmth and vibrancy of Italian and Sri Lankan cuisine at DineEase",
        words: [],
        currentWordIndex: 0,
        currentWord: ""
      };
    },
    mounted() {
      this.words = this.msg1.split(" ");
      this.startTyping();
    },
    methods: {
      startTyping() {
        setInterval(() => {
          if (this.currentWordIndex < this.words.length) {
            this.currentWord += this.words[this.currentWordIndex] + " ";
            this.currentWordIndex++;
          }
        }, 200); // Adjust the interval as needed
      },
    
    }
  };
  </script>
  
    
    <style>
    .custom_width {
      width: 100%;
    }
    
    .title {
      font-weight: bold;
      display: inline-block;
      opacity: 0;
      transform: translateY(12px);
      animation: fadeIn 1s ease-out forwards;
    }
    
    .word {
      /* font-weight: 700; */
      text-shadow: #ffff;
      /* color: #007400; */
      color: #ffff;
      font-weight: bolder;
    }
    
    /* Responsive font size */
    @media (max-width: 640px) {
      .text-2xl {
        font-size: 1.5rem; /* Adjust the font size as needed */
      }
    
      .md:text-3xl {
        font-size: 2rem; /* Adjust the font size as needed */
      }
    
      .lg:text-5xl {
        font-size: 3rem; /* Adjust the font size as needed */
      }
    
      /* Responsive top position */
      .top-40 {
        top: 20%; /* Adjust the top position as needed */
      }
      .md\:top-1\/2 {
        top: 50%; /* Adjust the top position as needed */
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(12px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    </style>
    