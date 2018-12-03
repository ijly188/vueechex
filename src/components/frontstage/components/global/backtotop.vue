<template>
    <div class="backtotop_wrap">
        <!-- Back to top -->
        <div class="btn-back-to-top bg0-hov" id="myBtn">
            <span class="symbol-btn-back-to-top">
                <i class="fa fa-angle-double-up" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</template>
<script>
/* global $ */
export default{
  mounted() {
    /* [ Back to top ]
    =========================================================== */
    const windowH = $(window).height() / 2;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > windowH) {
        $('#myBtn').css('display', 'flex');
      } else {
        $('#myBtn').css('display', 'none');
      }
    });

    $('#myBtn').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 300);
    });
  },
};
</script>
