<script setup lang="ts">
  import { ref } from 'vue' 

  const navOpen = ref(false)

</script>

<template>
  <nav class="quillver-pen-nav">
    <button @click="navOpen = !navOpen">
      <div>Quillver</div>
      {{ navOpen ? 'Hide ' : 'Show ' }}
    </button>
    <ul v-if="navOpen">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/persona-4-golden-guide">Persona</router-link></li>
      <li><router-link to="/poketcgplayground">PokeTCG Playground</router-link></li>
      <li><router-link to="/hydra-prime">Hydra Prime</router-link></li>
      <li><router-link to="/eureka">Eureka</router-link></li>
      <!-- // New Pens get added here to nav -->
      <!-- <li><router-link to="/new-pen">New Pen</router-link></li> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .quillver-pen-nav {
    color: #ddd;
    font-weight: bold;
    position: absolute;
    top: 30vh;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem;
    button {
      background-color: #474;
      box-shadow: -0.1rem -0.1rem 0.5rem #555, 0.5rem 0.5rem 0.5rem #222;
      border-radius: 0.5rem;
    }
    a {
      color: #ddd;
    }
  }
  ul {
    padding: 0;
    li {
      // height: 2rem;
      width: 6rem;
      padding: 0.5rem;
      list-style: none;
      background-color: #474;
      margin: 0.5rem;
      box-shadow: -0.1rem -0.1rem 0.5rem #555, 0.5rem 0.5rem 0.5rem #222;
      border-radius: 0.5rem;
    }
  }
  button {
    padding: 0.5rem;
  }
  a, li {
    text-decoration: none;
    display: block;
  }

</style>