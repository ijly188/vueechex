<template>
    <div class="SlideShow">
        <Alert></Alert>
        <carousel :items="1" :autoplay="true" :dots="false">
            <router-link to="/"><img src="https://www.lexus.com.tw/upload/bnr/201806/2018061511272900000000.jpg"></router-link>
            <img src="https://d.stat01.com/d354480/slide1.png?design=azure&lc=1537799177">
            <img src="http://www.z-suo.com/image/cache/catalog/slider/02-1920x570.jpg">
            <img src="https://www.chiceco.com/img/index/office-02.jpg">
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
.SlideShow{
  // position: relative;
  div:nth-child(2){
    // max-height: 570px;
    img {
      // max-height: 570px;
    }
  }
}
.owl-carousel.owl-loaded{
  position: relative;
}
.owl-carousel .owl-stage-outer{
  z-index: 1000;
}
.owl-theme{
  .owl-nav{
    // margin: -100% auto 100% auto;
    height: 100%;
    margin-top: 0;
    position: absolute;
    text-align: inherit;
    top: 0;
    width: 100%;
    div{
      background-color: initial;
      display: block;
      height: 100%;
      line-height: 100%;
      // position: absolute;
      width: 10%;
      i{
        margin: -24px 0 0 0;
        position: relative;
        top: 42%;
      }
    }
    .owl-prev{
      background-color: initial;
      margin-left: 0;
    }
    .owl-next{
      background-color: initial;
      margin-right: 0;
      right:0;
    }
  }
}
.owl-theme .owl-nav [class*='owl-']{
  font-size: 48px;
  line-height: 100%;
  margin: 0;
  position: absolute;
  text-align: center;
  z-index: 1001;
}
.owl-theme .owl-nav .owl-prev:hover{
  background: linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
}
.owl-theme .owl-nav .owl-next:hover{
  background: linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
}
</style>
