<template>
    <div class="bannertwocol">
        <Alert></Alert>
        <!-- Banner2 -->
        <section class="banner2 bg5 p-t-55 p-b-55">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                        <div class="hov-img-zoom pos-relative">
                            <img src="/static/frontstage/images/banner-08.jpg" alt="IMG-BANNER">

                            <div class="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
                                <span class="m-text9 p-t-45 fs-20-sm">
                                    The Beauty
                                </span>

                                <h3 class="l-text1 fs-35-sm">
                                    Lookbook
                                </h3>

                                <a href="#" class="s-text4 hov2 p-t-20 ">
                                    View Collection
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
                        <div class="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
                            <img src="/static/frontstage/images/shop-item-09.jpg" alt="IMG-BANNER">

                            <div class="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
                                <div class="t-center">
                                    <a href="product-detail.html" class="dis-block s-text3 p-b-5">
                                        Gafas sol Hawkers one
                                    </a>

                                    <span class="block2-oldprice m-text7 p-r-5">
                                        $29.50
                                    </span>

                                    <span class="block2-newprice m-text8">
                                        $15.90
                                    </span>
                                </div>

                                <div class="flex-c-m p-t-44 p-t-30-xl">
                                    <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                        <span class="m-text10 p-b-1 days">
                                            69
                                        </span>

                                        <span class="s-text5">
                                            days
                                        </span>
                                    </div>

                                    <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                        <span class="m-text10 p-b-1 hours">
                                            04
                                        </span>

                                        <span class="s-text5">
                                            hrs
                                        </span>
                                    </div>

                                    <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                        <span class="m-text10 p-b-1 minutes">
                                            32
                                        </span>

                                        <span class="s-text5">
                                            mins
                                        </span>
                                    </div>

                                    <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
                                        <span class="m-text10 p-b-1 seconds">
                                            05
                                        </span>

                                        <span class="s-text5">
                                            secs
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Alert from '../../../AlertMessage';

export default {
  components: {
    Alert,
  },
  mounted() {
    (function ($) {
      function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          total: t,
          days,
          hours,
          minutes,
          seconds,
        };
      }

      function initializeClock(id, endtime) {
        const daysSpan = $('.days');
        const hoursSpan = $('.hours');
        const minutesSpan = $('.minutes');
        const secondsSpan = $('.seconds');

        function updateClock() {
          const t = getTimeRemaining(endtime);
          daysSpan.html(t.days);
          hoursSpan.html(('0' + t.hours).slice(-2));
          minutesSpan.html(('0' + t.minutes).slice(-2));
          secondsSpan.html(('0' + t.seconds).slice(-2));
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      };

      const deadline = new Date(Date.parse(new Date()) + 69 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000); 
      initializeClock('clockdiv', deadline);
    })(jQuery);
  },
};
</script>
