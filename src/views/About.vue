<template>
    <div class="sub_page">
        <div class="hero_area">
            <div class="hero_bg_box">
                <div class="bg_img_box">
                    <img src="/images/hero-bg.png" alt="">
                </div>
            </div>
            <Navigation />
        </div>
        <AboutUs />
    </div>
</template>
<script>
    import Navigation from '../components/Navigation.vue'
    import AboutUs from '../components/AboutUs.vue'
    
    export default {
        components: {
            Navigation,
            AboutUs
        }
    }
</script>
