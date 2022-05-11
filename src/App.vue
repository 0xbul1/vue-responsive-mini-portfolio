<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

const darktheme = ref(false);
let selectedTheme = localStorage.getItem('selected-theme');
if (selectedTheme && selectedTheme === 'dark') {
  darktheme.value = true;
}

const changeTheme = () => {
  selectedTheme = localStorage.getItem('selected-theme');
  if (selectedTheme) {
    if(selectedTheme === 'light') {
      darktheme.value = true;
      localStorage.setItem('selected-theme', 'dark');
      localStorage.setItem('selected-icon', 'ri-sun-fill');
    } else {
      darktheme.value = false;
      localStorage.setItem('selected-theme', 'light');
      localStorage.setItem('selected-icon', 'ri-moon-line');
    }
  } else {
    darktheme.value = true;
    localStorage.setItem('selected-theme', 'dark');
    localStorage.setItem('selected-icon', 'ri-sun-fill');
  }
}
</script>

<template>
 <div class="theme-container" :class="darktheme ? 'dark-theme' : ''">
    <Header @changeTheme="changeTheme" :darkTheme="darktheme"/> 
    <Main />
    <Footer/> 
 </div>
</template>

<style>
.theme-container {
  height: 100%;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  transition: .3s; /* For animation dark mode */
}
</style>
