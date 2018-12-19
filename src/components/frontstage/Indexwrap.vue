<template>
  <div class="index_wrap">
    <Header></Header>
    <Alert></Alert>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
/* global $ */
import Header from './Header';
import Footer from './Footer';
import Alert from '../AlertMessage';

export default {
  components: {
    Header,
    Footer,
    Alert,
  },
  mounted() {
    /* [ Load page ]
    =========================================================== */
    $('.animsition').animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'animsition-loading-1',
      loadingInner: '<div data-loader="ball-scale"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function (url) { window.location.href = url; },
    });
  },
};
</script>

<style lang="scss">

@import "../../assets/all.scss";
// <!-- set bootstrap 3 -->
@import "../../../static/frontstage/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
@import "../../../static/frontstage/fonts/themify/themify-icons.css";
@import "../../../static/frontstage/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
@import "../../../static/frontstage/fonts/elegant-font/html-css/style.css";
@import "../../../static/frontstage/vendor/animate/animate.css";
@import "../../../static/frontstage/vendor/css-hamburgers/hamburgers.min.css";
@import "../../../static/frontstage/vendor/animsition/css/animsition.min.css";
@import "../../../static/frontstage/vendor/select2/select2.min.css";
@import "../../../static/frontstage/vendor/daterangepicker/daterangepicker.css";
@import "../../../static/frontstage/vendor/slick/slick.css";
@import "../../../static/frontstage/vendor/lightbox2/css/lightbox.min.css";
@import "../../../static/frontstage/css/util.css";
@import "../../../static/frontstage/css/main.css";

@import "../../assets/frontstage.scss";
</style>
