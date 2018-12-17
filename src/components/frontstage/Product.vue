<template>
    <div class="product">
        <loading :active.sync="isLoading"></loading>
        <Alert></Alert>
        <Breadcrumb></Breadcrumb>

        <!-- Product Detail -->
        <div class="container bgwhite p-t-35 p-b-80" v-if="product !== {}">
            <div class="flex-w flex-sb">
                <div class="w-size13 p-t-30 respon5">
                    <div class="wrap-slick3 flex-sb flex-w">
                        <div class="wrap-slick3-dots"></div>

                        <div class="slick3">
                            <div class="item-slick3"
                            data-thumb="/static/frontstage/images/thumb-item-01.jpg">
                                <div class="wrap-pic-w">
                                    <img :src="this.product.imageUrl"
                                    alt="IMG-PRODUCT">
                                </div>
                            </div>

                            <div class="item-slick3"
                            data-thumb="/static/frontstage/images/thumb-item-02.jpg">
                                <div class="wrap-pic-w">
                                    <img src="/static/frontstage/images/product-detail-02.jpg"
                                    alt="IMG-PRODUCT">
                                </div>
                            </div>

                            <div class="item-slick3"
                            data-thumb="/static/frontstage/images/thumb-item-03.jpg">
                                <div class="wrap-pic-w">
                                    <img src="/static/frontstage/images/product-detail-03.jpg"
                                    alt="IMG-PRODUCT">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-size14 p-t-30 respon5">
                    <h4 class="product-detail-name m-text16 p-b-13">
                        {{ this.product.title }}
                    </h4>

                    <span class="m-text17">
                        <small><del><i>原價：{{ this.product.origin_price | currency }}</i></del></small>
                        <small><span class="text-danger">  售價：{{ this.product.price | currency }}</span></small>
                    </span>

                    <p class="s-text8 p-t-10">
                        {{ this.product.content }}
                    </p>

                    <!--  -->
                    <div class="p-t-33 p-b-60">
                        <!-- <div class="flex-m flex-w p-b-10">
                            <div class="s-text15 w-size15 t-center">
                                Size
                            </div>

                            <div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                <select class="selection-2" name="size">
                                    <option>Choose an option</option>
                                    <option>Size S</option>
                                    <option>Size M</option>
                                    <option>Size L</option>
                                    <option>Size XL</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex-m flex-w">
                            <div class="s-text15 w-size15 t-center">
                                Color
                            </div>

                            <div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                <select class="selection-2" name="color">
                                    <option>Choose an option</option>
                                    <option>Gray</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Blue</option>
                                </select>
                            </div>
                        </div> -->

                        <div class="flex-r-m flex-w p-t-10">
                            <div class="w-size16 flex-m flex-w">
                                <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                    <button class="btn-num-product-down color1
                                    flex-c-m size7 bg8 eff2" @click.prevent="minusqty()">
                                        <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                                    </button>

                                    <input class="size8 m-text18 t-center num-product"
                                    type="number" name="num-product" v-model="qty">

                                    <button class="btn-num-product-up color1
                                    flex-c-m size7 bg8 eff2" @click.prevent="plusqty()">
                                        <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>

                                <div class="btn-addcart-product-detail
                                size9 trans-0-4 m-t-10 m-b-10">
                                    <!-- Button -->
                                    <button class="flex-c-m sizefull bg1
                                    bo-rad-23 hov1 s-text1 trans-0-4"
                                    @click="addtoCart()">
                                        加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-b-45">
                        <span class="s-text8 m-r-35">商品編號: {{ this.product.id }}</span>
                        <span class="s-text8">商品分類: {{ this.product.category }}</span>
                    </div>

                    <!--  -->
                    <div class="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                        <h5 class="js-toggle-dropdown-content flex-sb-m
                        cs-pointer m-text19 color0-hov trans-0-4">
                            商品描述
                            <i class="down-mark fs-12 color1 fa fa-minus dis-none"
                            aria-hidden="true"></i>
                            <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                        </h5>

                        <div class="dropdown-content dis-none p-t-15 p-b-23">
                            <p class="s-text8">
                                {{ this.product.description }}
                            </p>
                        </div>
                    </div>

                    <!-- <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
                        <h5 class="js-toggle-dropdown-content flex-sb-m
                        cs-pointer m-text19 color0-hov trans-0-4">
                            Additional information
                            <i class="down-mark fs-12 color1 fa fa-minus dis-none"
                            aria-hidden="true"></i>
                            <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                        </h5>

                        <div class="dropdown-content dis-none p-t-15 p-b-23">
                            <p class="s-text8">
                                Fusce ornare mi vel risus porttitor dignissim.
                                Nunc eget risus at ipsum blandit ornare vel sed velit.
                                Proin gravida arcu nisl, a dignissim mauris placerat
                            </p>
                        </div>
                    </div>

                    <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
                        <h5 class="js-toggle-dropdown-content flex-sb-m
                        cs-pointer m-text19 color0-hov trans-0-4">
                            Reviews (0)
                            <i class="down-mark fs-12 color1 fa fa-minus dis-none"
                            aria-hidden="true"></i>
                            <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                        </h5>

                        <div class="dropdown-content dis-none p-t-15 p-b-23">
                            <p class="s-text8">
                                Fusce ornare mi vel risus porttitor dignissim.
                                Nunc eget risus at ipsum blandit ornare vel sed velit.
                                Proin gravida arcu nisl, a dignissim mauris placerat
                            </p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <!-- Relate Product -->
        <IndexRelatedProduct
          v-if="product !== {}"
          v-on:bindgetthenewproduct="getProduct"
          :wording="wording"
        ></IndexRelatedProduct>

        <!-- Container Selection -->
        <div id="dropDownSelect1"></div>
        <div id="dropDownSelect2"></div>

    </div>
</template>
<script>
/* global $ */
import Alert from '../AlertMessage';
import Breadcrumb from './components/global/Breadcrumb';
import IndexRelatedProduct from './components/product/IndexRelatedProduct';

export default {
  components: {
    Alert,
    Breadcrumb,
    IndexRelatedProduct,
  },
  data() {
    return {
      isLoading: false,
      product: {},
      wording: 'RELATED PRODUCTS',
      qty: 1,
      message: '加入購物車數值不得為零',
      status: {
        loadingItem: '',
        isUpdate: false,
      },
      id: this.$route.params.itemname,
    }
  },
  methods: {
    getProduct (itemid) {
      // console.log(this.message);
      // console.log(itemid);
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/product/${itemid}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.product = response.data.product;
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/');
        }, 5000);
      });
    },
    effect () {
      // set selection effect
      $('.selection-1').select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1'),
      });

      $('.selection-2').select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect2'),
      });

      // set block addcart effect
      $('.block2-btn-addcart').each(function () {
        const nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
        $(this).on('click', function () {
            swal(nameProduct, 'is added to cart !', 'success');
        });
      });

      $('.block2-btn-addwishlist').each(function () {
        const nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
        $(this).on('click', function () {
            swal(nameProduct, 'is added to wishlist !', 'success');
        });
      });

      $('.btn-addcart-product-detail').each(function () {
        // const nameProduct = $('.product-detail-name').html();
        const nameProduct = $('h4.product-detail-name.m-text16.p-b-13').html();
        $(this).on('click', function () {
            swal(nameProduct, '已經加入購物車!', 'success');
        });
      });

      // set slick effect

      /* [ Slick3 ]
      =========================================================== */
      $('.slick3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        appendDots: $('.wrap-slick3-dots'),
        dotsClass: 'slick3-dots',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: false,
        customPaging: function (slick, index) {
          const portrait = $(slick.$slides[index]).data('thumb');
          return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
        },
      });

      // set dropdown
      /* [ Show content Product detail ]
      =========================================================== */
      $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
      $('.active-dropdown-content .dropdown-content').slideToggle('fast');

      $('.js-toggle-dropdown-content').on('click', function () {
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
      });
    },
    plusqty() {
      this.qty++;
    },
    minusqty() {
      let vm = this;
      if(this.qty > 0) {
        this.qty--;
      }
      if(this.qty === 0) {
        this.qty = 1;
        vm.$bus.$emit('message:push', this.message, 'danger');
      }
    },
    addtoCart() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/cart`;
      const id = this.$route.params.itemname;
      const qty = this.qty;
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
    let itemid = this.$route.params.itemname;
    this.getProduct(itemid);
  },
  mounted() {
    if( this.product.imageUrl !== {} ){
      this.effect();
    }
  },
};
</script>

<style>

</style>
