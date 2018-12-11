<template>
    <div class="product">
        <Alert></Alert>
        <loading :active.sync="isLoading"></loading>
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i> 優惠券列表
            </div>
            <div class="card-body">
                <div class="my-5 row justify-content-center">
                    <form class="col-md-6" @submit.prevent="payOrder">
                        <table class="table">
                        <thead>
                            <th>品名</th>
                            <th>數量</th>
                            <th>單價</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                            <td class="align-middle">{{ item.product.title }}</td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            <td colspan="2" class="text-right">總計</td>
                            <td class="text-right">{{ order.total }}</td>
                            </tr>
                        </tfoot>
                        </table>

                        <table class="table">
                        <tbody v-if="order.user">
                            <tr>
                            <th width="100">Email</th>
                            <td>{{ order.user.email }}</td>
                            </tr>
                            <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                            </tr>
                            <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                            </tr>
                            <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                            </tr>
                            <tr>
                            <th>付款狀態</th>
                            <td>
                                <span v-if="!order.is_paid">尚未付款</span>
                                <span v-else class="text-success">付款完成</span>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <div class="text-right" v-if="order.is_paid === false">
                            <button class="btn btn-danger">確認付款去</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from '../../AlertMessage';
import pagination from '../components/Pagination';

export default {
  name: 'checkout',
  components: {
    pagination,
    Alert,
  },
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      status: {
        isShow: false,
      },
      isLoading: false,
    };
  },
  methods: {
    getCheckout() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/order/${this.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          // console.log(response);
          vm.order = response.data.order;
          // vm.$bus.$emit('message:push', response.data.message, 'success');
        }
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/pay/${this.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          this.getCheckout();
          // console.log(response);
          vm.$bus.$emit('message:push', response.data.message, 'success');
        }
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
  },
  watch: {
  },
  created() {
    this.orderId = this.$route.params.order_id;
    this.getCheckout();
  },
};
</script>
<style>

</style>
