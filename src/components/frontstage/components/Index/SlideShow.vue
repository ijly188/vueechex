<template>
    <div class="SlideShow">
        <Alert></Alert>
        <carousel :items="1" :autoplay="true" :dots="false">
            <router-link to="/category/all">
              <img src="/static/index/slide1.jpg">
            </router-link>
            <router-link to="/category/messengerbag">
              <img src="/static/index/slide2.jpg">
            </router-link>
            <router-link to="/category/casualstyle">
              <img src="/static/index/slide3.jpg">
            </router-link>
            <router-link to="/category/beauty">
              <img src="/static/index/slide4.jpg">
            </router-link>
        </carousel>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import Alert from '../../../AlertMessage';

export default {
  components: {
    Alert,
    carousel,
  },
  mounted() {
    const owlprev = document.getElementsByClassName('owl-prev')[0];
    owlprev.innerHTML = '<i class="fas fa-arrow-left"></i>';
    const owlnext = document.getElementsByClassName('owl-next')[0];
    owlnext.innerHTML = '<i class="fas fa-arrow-right"></i>';
  },
};
</script>

<style lang="scss">

</style>
