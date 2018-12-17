<template>
    <div class="cart">
        <Alert></Alert>
        <smallonepicslide></smallonepicslide>
        <!-- Cart -->
        <section class="cart bgwhite p-t-70 p-b-100">
            <div class="container" v-if="cart_total == 0">
                快去加入商品進購物車哦！！
            </div>
            <div class="container" v-else>
                <!-- Cart item -->
                <div class="container-table-cart pos-relative">
                    <div class="wrap-table-shopping-cart bgwhite">
                        <table class="table-shopping-cart">
                            <tr class="table-head">
                                <th class="column-1"></th>
                                <th class="column-2">商品</th>
                                <th class="column-3">價格</th>
                                <th class="column-4 p-l-70">數量</th>
                                <th class="column-5">總價</th>
                            </tr>

                            <tr class="table-row" v-for="(item, key) in cart.carts" :key="key">
                                <td class="column-1">
                                    <div class="cart-img-product b-rad-4 o-f-hidden"
                                    @click.prevent="removeCartItem(item.id)">
                                        <div>
                                            <img
                                            :src="item.product.imageUrl"
                                            alt="IMG-PRODUCT">
                                        </div>
                                    </div>
                                </td>
                                <td class="column-2">
                                    {{ item.product.title }}
                                    <div class="text-success" v-if="item.coupon">
                                    已套用優惠券
                                    </div>
                                </td>
                                <td class="column-3">
                                    {{ item.product.price | currency}}
                                </td>
                                <td class="column-4 text-center">
                                    <!-- <div class="flex-w bo5 of-hidden w-size17">
                                        <button class="btn-num-product-down color1
                                        flex-c-m size7 bg8 eff2">
                                            <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                                        </button>

                                        <input class="size8 m-text18 t-center num-product"
                                        type="number" name="num-product1" value="1">

                                        <button class="btn-num-product-up
                                        color1 flex-c-m size7 bg8 eff2">
                                            <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                    </div> -->
                                    {{ item.qty }} {{ item.product.unit }}
                                </td>
                                <td class="column-5">
                                    {{ item.total | currency }}
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div class="flex-w flex-sb-m p-t-25 p-b-25 bo8
                p-l-35 p-r-60 p-lr-15-sm container text-right">
                    <div class="col-6">
                    </div>

                    <div class="col-6">
                        <span class="px-3">總定價：{{ cart_total | currency }}</span>
                        <span class="text-danger" v-if="cart.final_total !== cart.total">
                            折扣價：{{ cart_final_total | currency }}
                        </span>
                    </div>
                </div>

                <div class="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                    <div class="size10 trans-0-4 m-t-10 m-b-10">
                        <!-- Button -->
                        <router-link to="/check/"
                        class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                        v-if="false">
                            填寫訂購私訊
                        </router-link>
                    </div>
                    <div class="flex-w flex-m w-full-sm">
                        <div class="size11 bo4 m-r-10">
                            <input class="sizefull s-text7 p-l-22 p-r-22"
                            type="text" name="coupon-code"
                            v-model="coupon_code" placeholder="請輸入優惠碼">
                        </div>

                        <div class="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                            <!-- Button -->
                            <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                            @click="addCouponCode">
                                套用折扣碼
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Total -->
                <div class="bo9 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30
                m-r-0 m-l-auto p-lr-15-sm"><!-- w-size18-->
                    <h5 class="m-text20 p-b-24">
                        填入訂單資訊
                    </h5>

                    <!--  -->
                    <div class="flex-w flex-sb-m p-b-12">
                        <span class="s-text18 w-size19 w-full-sm">
                            訂購總價：
                        </span>

                        <span class="m-text21 w-size20 w-full-sm">
                            {{ cart_total | currency }}
                        </span>
                    </div>

                    <!--  -->
                    <div class="flex-w flex-sb bo10 p-t-15 p-b-20">
                        <span class="s-text18 w-size19 w-full-sm">
                            訂購資料：
                        </span>

                        <div class="w-size20 w-full-sm">
                            <orderForm
                                v-on:updatecart="getCart()"
                            ></orderForm>
                        </div>
                    </div>

                    <!--  -->
                    <div class="flex-w flex-sb-m p-t-26 p-b-30">
                        <span class="m-text22 w-size19 w-full-sm">
                            促銷總價：
                        </span>

                        <span class="m-text21 w-size20 w-full-sm">
                            {{ cart_final_total | currency }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Container Selection -->
        <div id="dropDownSelect1"></div>
        <div id="dropDownSelect2"></div>

    </div>
</template>
<script>
/* global $ */
import Alert from '../AlertMessage';
import smallonepicslide from './components/cart/smallonepicslide';
import '../../../static/frontstage/vendor/select2/select2.js';
import orderForm from './components/cart/Orderform';

export default {
  components: {
    Alert,
    smallonepicslide,
    orderForm,
  },
  data() {
    return {
      cart: [],
      status: {
        isShow: false,
      },
      isLoading: false,
      coupon_code: '',
      cart_total: '',
      cart_final_total: '',
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          // console.log(response.data);
          vm.cart_total = response.data.data.total;
          vm.cart_final_total = response.data.data.final_total;
          vm.cart = response.data.data;
          if (vm.cart.carts.length === 0) {
            vm.status.isShow = false;
          }
        }
      }).catch((error) => {
        // console.log(error);
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      vm.isLoading = true;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          // console.log(response.data);
          // vm.cart = response.data.data;
          vm.getCart();
        }
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    addCouponCode() {
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/coupon`;
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then((response) => {
        let status = '';
        if (response.data.success) {
          status = 'success';
          vm.isLoading = false;
          // console.log(response.data);
          // vm.cart = response.data.data;
          vm.getCart();
        } else {
          status = 'danger';
          // console.log(response.data);
        }
        vm.$bus.$emit('message:push', response.data.message, status);
      }).catch((error) => {
        // console.log(error);
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    $(".selection-2").select2({
      minimumResultsForSearch: 20,
      dropdownParent: $('#dropDownSelect2'),
    });
  },
};
</script>
