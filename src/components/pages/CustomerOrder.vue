<template>
    <div class="customerorders">
        <loading :active.sync="isLoading"></loading>
        <div class="row mt-4">
            <div class="col-md-4 mb-4" v-for="(item, key) in products" :key="key">
                <div class="card border-0 shadow-sm">
                    <div style="height: 150px; background-size: cover; background-position: center"
                    :style="{backgroundImage: `url(${item.imageUrl})`}"
                    >
                    </div>
                    <div class="card-body">
                    <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                    <h5 class="card-title">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                    <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h5" v-if="!item.price">
                            {{ item.origin_price | currency }} 元
                        </div>
                        <del class="h6" v-if="item.price">
                            原價 {{ item.origin_price | currency }} 元
                        </del>
                        <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                    </div>
                    </div>
                    <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm"
                    @click.prevent="getProduct(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                        查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                    @click.prevent="addtoCart(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                        加到購物車
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <pagination
            :pagination="pagination"
            v-on:bindgetProducts="getProducts"
        ></pagination>
        <cartComponent
            :isUpdate="status.isUpdate"
            v-on:changeStatus="updateCart"
        ></cartComponent>
        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img :src="product.imageUrl" class="img-fluid" alt="">
                    <blockquote>
                        <p class="mb-0">{{ product.content }}</p>
                        <footer class="blockquote-footer text-right">
                            {{ product.description }}
                        </footer>
                    </blockquote>
                    <div class="d-flex justify-content-between align-items-baseline">
                        <div class="h4" v-if="!product.price">
                            {{ product.origin_price | currency }} 元
                        </div>
                        <del class="h6" v-if="product.price">
                            原價 {{ product.origin_price | currency }} 元
                        </del>
                        <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
                    </div>
                    <select name="" class="form-control mt-3" v-model="product.num">
                        <option :value="item" v-for="(item, key) in maxbuynum" :key="key">
                            選購 {{ item }} {{ product.unit }}
                        </option>
                    </select>
                </div>
                <div class="modal-footer">
                    <div class="text-muted text-nowrap mr-3">
                        小計 <strong>{{ product.num * product.price }}</strong> 元
                    </div>
                    <!-- <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary"
                    @click.prevent="addtoCart(product.id, product.num)">
                        加到購物車
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 可以用這個方式去閃過eslint的跳錯/* global $ */
import $ from 'jquery';
import pagination from '../Pagination';
import cartComponent from '../pages/Cart';

export default {
  components: {
    pagination,
    cartComponent,
  },
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '',
        isUpdate: false,
      },
      maxbuynum: 10, //  最大選購數
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      }).catch((error) => {
        this.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    getProduct(id) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      vm.status.loadingItem = id;
      vm.$http.get(api).then((response) => {
        vm.status.loadingItem = '';
        // console.log(response.data);
        vm.product = response.data.product;
        $('#productModal').modal('show');
        // vm.products = response.data.products;
        // vm.pagination = response.data.pagination;
      }).catch((error) => {
        this.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
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
          $('#productModal').modal('hide');
          // vm.product = response.data.product;
        }
      }).catch((error) => {
        this.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    // getCart() {
    //   const vm = this;
    //   const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/cart`;
    //   vm.isLoading = true;
    //   vm.$http.get(api).then((response) => {
    //     vm.isLoading = false;
    //     // console.log(response.data);
    //     // vm.products = response.data.products;
    //     // vm.pagination = response.data.pagination;
    //   }).catch((error) => {
    //     this.$bus.$emit('message:push', error, 'danger');
    //     setTimeout(() => {
    //       vm.$router.push('/login');
    //     }, 5000);
    //   });
    // },
    updateCart() {
      this.status.isUpdate = false;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
