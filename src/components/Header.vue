<script setup>

const props = defineProps({
    darkTheme: Boolean
})

</script>
<template>
    <!--=============== HEADER ===============-->
    <header class="profile container">
        <!-- Theme button -->
        <i class="ri-moon-line change-theme" :class="darkTheme ? 'ri-sun-fill' : 'ri-moon-line'" id="theme-button"
            @click="$emit('changeTheme')"></i>

        <div class="profile__container grid">
            <div class="profile__data">
                <div class="profile__border" v-scroll-reveal="{delay: 200}">
                    <div class="profile__perfil">
                        <!-- Insert your image, according to the example size of the portfolio -->
                        <img src="../assets/img/perfil.png" alt="">
                    </div>
                </div>

                <h2 class="profile__name" v-scroll-reveal="{delay: 500}">Gianell Vusy</h2>
                <h3 class="profile__profession" v-scroll-reveal="{delay: 600}">Web developer</h3>

                <ul class="profile__social" v-scroll-reveal="{delay: 700}">
                    <a href="https://www.instagram.com/" target="_blank" class="profile__social-link">
                        <i class="ri-instagram-line"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" class="profile__social-link">
                        <i class="ri-linkedin-box-line"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" class="profile__social-link">
                        <i class="ri-github-line"></i>
                    </a>
                </ul>
            </div>

            <div class="profile__info grid">
                <div class="profile__info-group" v-scroll-reveal="{interval:100, delay: 700}">
                    <h3 class="profile__info-number">7</h3>
                    <p class="profile__info-description">
                        Years of <br> work
                    </p>
                </div>
                <div class="profile__info-group" v-scroll-reveal="{interval:100, delay: 700}">
                    <h3 class="profile__info-number">+124</h3>
                    <p class="profile__info-description">
                        Completed <br> projects
                    </p>
                </div>
                <div class="profile__info-group" v-scroll-reveal="{interval:100, delay: 700}">
                    <h3 class="profile__info-number">96</h3>
                    <p class="profile__info-description">Satisfied <br> customers</p>
                </div>
            </div>

            <div class="profile__buttons" v-scroll-reveal="{delay: 800}">
                <!-- Insert your CV -->
                <a download="" href="../assets/pdf/Gianell-Cv.pdf" class="button">
                    Download CV <i class="ri-download-line"></i>
                </a>

                <div class="profile__buttons-small">
                    <!-- Insert a real number plus country code -->
                    <a href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                        target="_blank" class="button button__small button__gray">
                        <i class="ri-whatsapp-line"></i>
                    </a>
                    <!-- Insert your brand name or profile -->
                    <a href="https://m.me/bedimcode" target="_blank" class="button button__small button__gray">
                        <i class="ri-messenger-line"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>