<script setup lang="ts">

</script>

<template>
  <div class="main-page">
    <h1>Welcome to Quillver</h1>
    <h2>Available Pens</h2>
    <nav>
      <ul>
        <li><router-link to="/persona-4-golden-guide">Persona</router-link></li>
        <li><router-link to="/poketcgplayground">PokeTCG Playground</router-link></li>
        <!-- // New Pens get added here to home -->
        <!-- <li><router-link to="/new-pen">New Pen</router-link></li> -->
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .main-page {
    padding: 1rem 2rem;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    max-width: 48rem;
    margin: auto;
  }
  li {
    list-style: none;
  }



</style>