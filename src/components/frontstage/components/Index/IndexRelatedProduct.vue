<template>
    <div class="newproduct">
        <Alert></Alert>
        <!-- New Product -->
        <section class="newproduct bgwhite p-t-45 p-b-105">
            <div class="container">
                <div class="sec-title p-b-60">
                    <h3 class="m-text5 t-center">
                        {{ wording }}
                    </h3>
                </div>

                <!-- Slide2 -->
                <div class="wrap-slick2">
                    <div class="slick2">
                        <div class="item-slick2 p-l-15 p-r-15" v-for="(item, key) in products" :key="key" v-if="slideshowconfig">
                            <!-- {{ item }} -->
                            <!-- Block2 -->
                            <div class="block2">
                                <div class="block2-img wrap-pic-w of-hidden
                                pos-relative block2-labelnew">
                                    <span class="category" >{{ item.category }}</span>
                                    <img 
                                    :src="item.imageUrl"
                                    alt="IMG-PRODUCT">
                                    <div class="block2-overlay trans-0-4">
                                        <a href="#" class="block2-btn-addwishlist
                                        hov-pointer trans-0-4">
                                            <i class="icon-wishlist icon_heart_alt"
                                            aria-hidden="true"></i>
                                            <i class="icon-wishlist icon_heart dis-none"
                                            aria-hidden="true"></i>
                                        </a>

                                        <div class="block2-btn-addcart w-size1 trans-0-4">
                                            <button class="flex-c-m size1 bg4
                                            bo-rad-23 hov1 s-text1 trans-0-4"
                                            @click="addtoCart(item.id)">
                                                加入購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="block2-txt p-t-20">
                                    <router-link
                                    :to="'/product/' + item.id"
                                    class="block2-name dis-block s-text3 p-b-5">
                                        {{ item.title }}
                                    </router-link>

                                    <span class="block2-price m-text6 p-r-5">
                                        <del><small>原價：{{ item.origin_price }}</small></del>
                                        <span class="text-danger">售價：{{ item.price }}</span>
                                    </span>
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
/* global $ */
import Alert from '../../../AlertMessage';

export default {
  props:[
    'wording',
  ],
  components: {
    Alert,
  },
  data() {
    return {
      isLoading: false,
      products: {},
      maxNum: 8,
      slideshowconfig: false,
      status: {
        loadingItem: '',
        isUpdate: false,
      },
    };
  },
  methods:{
    getproducts() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.products = response.data.products;
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/');
        }, 5000);
      });
    },
    slick2effect() {
      /* [ Slick2 ]=========================================================== */
      $('.slick2').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick2'),
        prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    settheroute(itemid) {
      this.$emit('bindgetthenewproduct', itemid);
      $('html, body').animate({ scrollTop: 0 }, 300);
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          vm.status.isUpdate = true;
          vm.status.loadingItem = '';
          console.log(response.data.message);
          // $('#productModal').modal('hide');
          // vm.product = response.data.product;
          vm.$bus.$emit('message:push', response.data.message, 'success');
        }
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/');
        }, 5000);
      });
    },
  },
  created() {
    this.getproducts();
  },
  mounted() {
    let vm = this;
    vm.slideshowconfig = true;
    setTimeout(function(){
      vm.slick2effect();
    }, 1000);
  },
};
</script>
<style lang="scss">
.block2-labelnew::before{
    content: '';
    display: none;
}
.category{
    background-color: #66a8a6;
    z-index: 100;
    font-family: Montserrat-Regular;
    font-size: 12px;
    color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 70px;
    height: 22px;
    border-radius: 11px;
    position: absolute;
    top: 12px;
    left: 12px;
}
.block2-overlay, .block2-img.wrap-pic-w.of-hidden.pos-relative.block2-labelnew{
    max-height: 153px;
    overflow: hidden;
}
</style>
