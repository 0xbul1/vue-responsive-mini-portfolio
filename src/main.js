import { createApp } from 'vue'
import App from './App.vue'
import 'remixicon/fonts/remixicon.css'
import './assets/css/style.css'
import ScrollReveal from 'scrollreveal'

const app = createApp(App);
app.directive('scroll-reveal', {
  mounted(el, binding) {
    const options = binding.value || {};
    ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    }).reveal(el.childNodes, options || { delay: 200 });
  }
})

app.mount('#app')
