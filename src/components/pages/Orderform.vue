<template>
    <div class="orderform">
        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" name="email" id="useremail"
                        v-model="form.user.email" placeholder="請輸入 Email" required>
                    <span class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                        v-model="form.user.name" placeholder="輸入姓名">
                    <span class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel"
                    v-model="form.user.tel" placeholder="請輸入電話">
                </div>
                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="address" class="form-control" name="address"
                    id="useraddress" v-model="form.user.address" placeholder="請輸入地址">
                    <span class="text-danger">地址欄位不得留空</span>
                </div>
                <div class="form-group">
                    <label for="useraddress">留言</label>
                    <textarea name="" id="" class="form-control"
                    cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'isUpdate',
  ],
  components: {
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      status: {
        isShow: false,
      },
      isLoading: false,
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/order`;
      vm.isLoading = true;
      vm.$http.post(api, { data: vm.form }).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          // console.log('訂單已建立', response);
          vm.$bus.$emit('message:push', response.data.message, 'success');
          this.$emit('updatecart', '');
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
  },
};
</script>
