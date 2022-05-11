<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header/> 
  <Main />
  <Footer/> 
</template>

<style>
#app {
  height: 100%;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  transition: .3s; /* For animation dark mode */
}
</style>
