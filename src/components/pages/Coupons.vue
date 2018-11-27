<template>
    <div class="coupons">
        <loading :active.sync="isLoading"></loading>
        <div class="text-right mt-4">
            <button class="btn btn-primary"
                @click.prevent="openModal(true)">建立新的優惠券</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>折扣百分比</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="coupons.length == 0">
                    <td colspan="5">目前沒有優惠券</td>
                </tr>
                <tr v-for="(item, key) in coupons" :key="key" v-else>
                    <td>{{ item.title }}</td>
                    <td>{{ item.percent }}</td>
                    <td class="text-right">{{ item.due_date }}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm"
                        @click.prevent="openModal(false, item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm"
                        @click.prevent="opendelModal(item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination
            :pagination="pagination"
            v-on:bindgetProducts="getCoupons"
        ></pagination>
        <!-- Modal -->
        <div class="modal fade" id="CouponModal"
        tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="titleInput">標題</label>
                            <input type="text" class="form-control"
                            v-model="tempCoupon.title"
                            id="titleInput" placeholder="標題">
                        </div>
                        <div class="form-group">
                            <label for="CouponCode">優惠碼</label>
                            <input type="text" class="form-control"
                            v-model="tempCoupon.code"
                            id="CouponCode" placeholder="優惠碼">
                        </div>
                        <div class="form-group">
                            <label for="expiryday">到期日</label>
                            <input type="date" class="form-control"
                            v-model="tempCoupon.due_date"
                            id="expiryday" placeholder="到期日">
                        </div>
                        <div class="form-group">
                            <label for="discountpercent">折扣百分比</label>
                            <input type="email" class="form-control"
                            v-model="tempCoupon.percent"
                            id="discountpercent" placeholder="%">
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                            v-model="tempCoupon.is_enabled"
                            :true-value= "1"
                            :false-value= "0"
                            value="" id="is_enabled">
                            <label class="form-check-label" for="is_enabled">
                                是否啟用
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                        data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary"
                        @click.prevent="updateCoupon">更新優惠券</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除Coupon</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除
                        <strong class="text-danger">{{ tempCoupon.title }}</strong>
                        優惠券(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary"
                        data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger"
                        @click.prevent="deleteCoupon"
                        >確認刪除</button>
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

export default {
  components: {
    pagination,
  },
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getCoupons(page = 1) {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      }).catch((error) => {
        this.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/login');
        }, 5000);
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $('#CouponModal').modal('show');
    },
    updateCoupon() {
      const vm = this;
      let api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/coupon`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          $('#CouponModal').modal('hide');
          vm.getCoupons();
        } else {
          $('#CouponModal').modal('hide');
          vm.getCoupons();
          // console.log('新增失敗');
          this.$bus.$emit('message:push', '新增失敗', 'danger');
        }
      });
    },
    opendelModal(item) {
      // console.log(item);
      $('#delCouponModal').modal('show');
      this.tempCoupon = Object.assign({}, item);
    },
    deleteCoupon() {
      const vm = this;
      const id = this.tempCoupon.id;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/coupon/${id}`;
      vm.$http.delete(api).then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
        } else {
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
          // console.log('刪除產品失敗');
          this.$bus.$emit('message:push', '刪除產品失敗', 'danger');
        }
      });
    },
  },
  created() {
    this.getCoupons();
    // this.$bus.$emit('message:push', '這裡是一段訊息', 'success');
  },
};
</script>
