<template>
    <div class="cart" v-if="status.isShow">
        <table class="table">
            <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
            </thead>
            <tbody>
                <tr v-for="(item, key) in cart.carts" :key="key">
                    <td class="align-middle">
                        <button type="button" class="btn btn-outline-danger btn-sm"
                        @click.prevent="removeCartItem(item.id)">
                        <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                    <td class="align-middle">
                        {{ item.product.title }}
                        <!-- <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                        </div> -->
                    </td>
                    <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ cart.total }}</td>
                </tr>
                <tr>
                    <td colspan="3" class="text-right text-success">折扣價</td>
                    <td class="text-right text-success">{{ cart.final_total }}</td>
                </tr>
            </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                套用優惠碼
                </button>
            </div>
        </div>
    </div>
</template>
<script>
// 可以用這個方式去閃過eslint的跳錯/* global $ */
// import $ from 'jquery';

export default {
  props: [
    'isUpdate',
  ],
  components: {
  },
  data() {
    return {
      cart: [],
      status: {
        isShow: false,
      },
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
          vm.cart = response.data.data;
          if (vm.cart.carts.length == 0) {
            vm.status.isShow = false;
          }
        }
      }).catch((error) => {
        this.$bus.$emit('message:push', error, 'danger');
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
        this.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
  },
  watch: {
    isUpdate() {
      if (this.isUpdate === true) {
        this.$emit('changeStatus', false);
        this.getCart();
      }
    },
    cart() {
      if (this.cart.carts.length !== 0) {
        this.status.isShow = true;
      }
    },
  },
  created() {
    this.getCart();
    console.log(this.cart.carts);
  },
};
</script>
