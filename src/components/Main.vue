<script setup>
import { ref } from 'vue';

const currentValue = ref(0);
const button1Click = () => {
  currentValue.value = 0;
  console.log(currentValue);
}
const button2Click = () => {
  currentValue.value = 1;
  console.log(currentValue);
}
</script>

<template>
  <!--=============== MAIN ===============-->
  <main class="main">
    <section class="filters container" v-scroll-reveal="{delay: 1000}">
      <!--=============== FILTERS TABS ===============-->
      <ul class="filters__content" v-scroll-reveal="{delay: 900}">
        <button ref="button" @click="button1Click" class="filters__button"
          :class="currentValue === 0 ? 'filter-tab-active' : ''" data-target="#projects">
          Projects
        </button>
        <button ref="button" @click="button2Click" class="filters__button"
          :class="currentValue === 1 ? 'filter-tab-active' : ''" data-target="#skills">
          Skills
        </button>
      </ul>

      <div class="filters__sections">
        <!--=============== PROJECTS ===============-->
        <div class="projects__content grid" :class="currentValue === 0 ? 'filters__active' : ''" data-content
          id="projects">
          <article class="projects__card">
            <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) -->
            <img src="../assets/img/project1.jpg" alt="" class="projects__img">

            <div class="projects__modal">
              <div>
                <span class="projects__subtitle">Web</span>
                <h3 class="projects__title">Payment Site</h3>
                <a href="#" class="projects__button button button__small">
                  <i class="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article class="projects__card">
            <img src="../assets/img/project2.jpg" alt="" class="projects__img">

            <div class="projects__modal">
              <div>
                <span class="projects__subtitle">Web</span>
                <h3 class="projects__title">Portfolio website</h3>
                <a href="#" class="projects__button button button__small">
                  <i class="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article class="projects__card">
            <img src="../assets/img/project3.jpg" alt="" class="projects__img">

            <div class="projects__modal">
              <div>
                <span class="projects__subtitle">Movil</span>
                <h3 class="projects__title">Fast food app</h3>
                <a href="#" class="projects__button button button__small">
                  <i class="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article class="projects__card">
            <img src="../assets/img/project4.jpg" alt="" class="projects__img">

            <div class="projects__modal">
              <div>
                <span class="projects__subtitle">Movil</span>
                <h3 class="projects__title">Travel app</h3>
                <a href="#" class="projects__button button button__small">
                  <i class="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article class="projects__card">
            <img src="../assets/img/project5.jpg" alt="" class="projects__img">

            <div class="projects__modal">
              <div>
                <span class="projects__subtitle">Design</span>
                <h3 class="projects__title">Music app design</h3>
                <a href="#" class="projects__button button button__small">
                  <i class="ri-link"></i>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!--=============== SKILLS ===============-->
        <div class="skills__content grid" :class="currentValue === 1 ? 'filters__active' : ''" data-content id="skills">
          <div class="skills__area">
            <h3 class="skills__title">Frontend Developer</h3>

            <div class="skills__box">
              <div class="skills__group">
                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">HTML</h3>
                    <span class="skills__level">Basic</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">CSS</h3>
                    <span class="skills__level">Advanced</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">JavaScript</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div class="skills__group">
                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">React</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">Bootstrap</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">Git</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skills__area">
            <h3 class="skills__title">Backend Developer</h3>

            <div class="skills__box">
              <div class="skills__group">
                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">PHP</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">MySQL</h3>
                    <span class="skills__level">Advance</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">Firebase</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div class="skills__group">
                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">Python</h3>
                    <span class="skills__level">Basic</span>
                  </div>
                </div>

                <div class="skills__data">
                  <i class="ri-checkbox-circle-line"></i>

                  <div>
                    <h3 class="skills__name">Node Js</h3>
                    <span class="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>