<template>
  <div class="index_content">
        <Alert></Alert>
        <Slideshow></Slideshow>
        <MediumBanner></MediumBanner>
        <IndexFutureProduct></IndexFutureProduct>
        <BannerTwoCol></BannerTwoCol>
        <BlogNews></BlogNews>
        <InsgramNews></InsgramNews>
        <Ship></Ship>
  </div>
</template>
<script>
/* global $ */
import jQuery from 'jquery';
import Alert from '../AlertMessage';
import Slideshow from './components/Index/SlideShow';
import MediumBanner from './components/Index/IndexMediumBanner';
import IndexFutureProduct from './components/Index/IndexFutureProduct';
import BannerTwoCol from './components/Index/BannerTwoCol';
import BlogNews from './components/Index/BlogNews';
import InsgramNews from './components/Index/InsgramNews';
import Ship from './components/Index/Ship';

export default {
  components: {
    Alert,
    Slideshow,
    MediumBanner,
    IndexFutureProduct,
    BannerTwoCol,
    BlogNews,
    InsgramNews,
    Ship,
  },
  mounted() {
    (function ($) {
      /* [ Show header dropdown ]
      =========================================================== */
      $('.js-show-header-dropdown').on('click', function () {
        $(this).parent().find('.header-dropdown');
      });

      const menu = $('.js-show-header-dropdown');
      let sub_menu_is_showed = -1;

      for (let i = 0; i < menu.length; i += 1) {
        $(menu[i]).on('click', function () {
          if (jQuery.inArray( this, menu ) === sub_menu_is_showed) {
            $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
            sub_menu_is_showed = -1;
          } else {
            for (i = 0; i < menu.length; i += 1) {
              $(menu[i]).parent().find('.header-dropdown').removeClass('show-header-dropdown');
            }
            $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
            sub_menu_is_showed = jQuery.inArray(this, menu);
          }
        });
      }

      $('.js-show-header-dropdown, .header-dropdown').click(function (event) {
        event.stopPropagation();
      });

      $(window).on('click', function (){
        for (let i = 0; i < menu.length; i += 1){
          $(menu[i]).parent().find('.header-dropdown').removeClass('show-header-dropdown');
        }
        sub_menu_is_showed = -1;
      });

      /* [ Fixed Header ]
      =========================================================== */
      let posWrapHeader = $('.topbar').height();
      let header = $('.container-menu-header');

      $(window).on('scroll', function (){
        if ($(this).scrollTop() >= posWrapHeader){
          $('.header1').addClass('fixed-header');
          $(header).css('top',-posWrapHeader); 
        }  
        else{
          let x = - $(this).scrollTop(); 
          $(header).css('top',x); 
          $('.header1').removeClass('fixed-header');
        }

        if ($(this).scrollTop() >= 200 && $(window).width() > 992){
          $('.fixed-header2').addClass('show-fixed-header2');
          $('.header2').css('visibility','hidden'); 
          $('.header2').find('.header-dropdown').removeClass('show-header-dropdown');
        }
        else{
          $('.fixed-header2').removeClass('show-fixed-header2');
          $('.header2').css('visibility','visible'); 
          $('.fixed-header2').find('.header-dropdown').removeClass('show-header-dropdown');
        }
      });
        
      /* [ Show menu mobile ]
      =========================================================== */
      $('.btn-show-menu-mobile').on('click', function (){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
      });
      let arrowMainMenu = $('.arrow-main-menu');
      for(let i=0; i<arrowMainMenu.length; i += 1){
        $(arrowMainMenu[i]).on('click', function (){
          $(this).parent().find('.sub-menu').slideToggle();
          $(this).toggleClass('turn-arrow');
        })
      }
      $(window).resize( function (){
        if($(window).width() >= 992){
          if($('.wrap-side-menu').css('display') === 'block'){
            $('.wrap-side-menu').css('display','none');
            $('.btn-show-menu-mobile').toggleClass('is-active');
          }
          if ($('.sub-menu').css('display') === 'block'){
            $('.sub-menu').css('display','none');
            $('.arrow-main-menu').removeClass('turn-arrow');
          }
        }
      });
      /* [ remove top noti ]
      =========================================================== */
      $('.btn-romove-top-noti').on('click', function (){
        $(this).parent().remove();
      })
      /* [ Block2 button wishlist ]
      =========================================================== */
      $('.block2-btn-addwishlist').on('click', function (e){
        e.preventDefault();
        $(this).addClass('block2-btn-towishlist');
        $(this).removeClass('block2-btn-addwishlist');
        $(this).off('click');
      });
      /* [ +/- num product ]
      =========================================================== */
      $('.btn-num-product-down').on('click', function (e){
        e.preventDefault();
        let numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
      });

      $('.btn-num-product-up').on('click', function (e){
        e.preventDefault();
        let numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
      });

      /* [ Show content Product detail ]
      =========================================================== */
      $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
      $('.active-dropdown-content .dropdown-content').slideToggle('fast');

      $('.js-toggle-dropdown-content').on('click', function (){
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
      });

      /* [ Play video 01]
      =========================================================== */
      let srcOld = $('.video-mo-01').children('iframe').attr('src');

      $('[data-target="#modal-video-01"]').on('click', function (){
        $('.video-mo-01').children('iframe')[0].src += '&autoplay=1';

        setTimeout(function (){
          $('.video-mo-01').css('opacity','1');
        },300);      
      });
      $('[data-dismiss="modal"]').on('click', function (){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
      });
    })(jQuery);
  }
};
</script>
