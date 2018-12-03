<template>
    <div class="orders">
        <loading :active.sync="isLoading"></loading>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>購買時間</th>
                    <th>email</th>
                    <th>購買款項</th>
                    <th>應付金額</th>
                    <th>是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="orders.length == 0">
                    <td colspan="5">尚無訂單</td>
                </tr>
                <tr v-for="(item) in orders" :key="item.id" v-else>
                    <td>{{ item.create_at }}</td>
                    <td v-if="item.user">
                      {{ item.user.email }}
                    </td>
                    <td v-else>
                      尚未填入email
                    </td>
                    <td v-if="item.products">
                      <span v-for="(product, key) in item.products" :key="key">
                        {{ item.products[key].product.title +
                        '數量：' +
                        item.products[key].qty + item.products[key].product.unit }} <br>
                      </span>
                    </td>
                    <td class="text-right">{{ item.total | currency }}</td>
                    <td>
                        <span v-if="item.is_paid" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination
            :pagination="pagination"
            v-on:bindgetProducts="getOrders"
        ></pagination>
    </div>
</template>

<script>
// import $ from 'jquery';
import pagination from '../Pagination';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      // products: [],
      orders: [],
      pagination: {},
      // tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
