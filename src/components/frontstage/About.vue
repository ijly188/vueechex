<template>
    <div class="aboutwrap">
        <Alert></Alert>
        <smallonepicslide
            v-bind:imgsrc="this.slideimgsrc"
        ></smallonepicslide>
        
        <!-- content page -->
        <section class="bgwhite p-t-66 p-b-38">
          <div class="container">
            <div class="row">
              <div class="col-md-4 p-b-30">
                <div class="hov-img-zoom">
                  <img src="/static/about/mypic.jpg" alt="IMG-ABOUT">
                </div>
              </div>

              <div class="col-md-8 p-b-30">
                <h3 class="m-text26 p-t-15 p-b-16">
                  My Resume
                </h3>

                <p class="p-b-28">
                  I am a Frontend engineer with 4 years’ professional experience.
                  I am looking for the opportunity to advance to a Management position
                  where I can use my skills in developing strategies and leading a team from front end views.
                </p>

                <div class="bo13 p-l-29 m-l-9 p-b-10">
                  <p class="p-b-11">
                    Creativity is just connecting things.
                    When you ask creative people how they did something,
                    they feel a little guilty because they didn't really do it,
                    they just saw something. It seemed obvious to them after a while.
                  </p>

                  <span class="s-text7">
                    - Steve Job’s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
</template>
<script>
import Alert from '../AlertMessage';
import smallonepicslide from './components/about/smallonepicslide';

export default {
  components: {
    Alert,
    smallonepicslide,
  },
  data() {
    return {
      slideimgsrc: '/static/about/about.jpg',
    };
  },
  methods: {
  },
};
</script>
<style>
.hov-img-zoom img{
  max-height: 378px;
}
</style>
