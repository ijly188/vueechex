<template>
    <div class="orderform">
        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail"
                    :class="{'text-danger': errors.has('email')}"
                    >*Email</label>
                    <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email"
                    :class="{'is-invalid': errors.has('email')}"
                    v-validate="'required|email'"
                    placeholder="請輸入 Email">
                    <span class="text-danger" v-if="errors.has('email')">
                        {{ errors.first('email') }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="username"
                    :class="{'text-danger': errors.has('name')}"
                    >*收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('name')}"
                    v-model="form.user.name" placeholder="輸入姓名">
                    <!-- <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span> -->
                    <span class="text-danger" v-if="errors.has('name')">
                        {{ errors.first('name') }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="usertel"
                    :class="{'text-danger': errors.has('usertel')}"
                    >*收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" name="usertel"
                    v-model="form.user.tel"
                    :class="{'is-invalid': errors.has('usertel')}"
                    v-validate="{ required: true, regex: /\d{10}/, length: 10 }"
                    placeholder="請輸入電話,0212345678">
                    <span class="text-danger" v-if="errors.has('usertel')">
                        {{ errors.first('usertel') }}
                    </span>
                </div>
                <div class="form-group">
                    <label for="useraddress"
                    :class="{'text-danger': errors.has('address')}"
                    >*收件人地址</label>
                    <input type="address" class="form-control" name="address"
                    :class="{'is-invalid': errors.has('address')}"
                    v-validate="{ required: true }"
                    id="useraddress" v-model="form.user.address" placeholder="請輸入地址">
                    <span class="text-danger" v-if="errors.has('address')">
                        {{ errors.first('address') }}
                    </span>
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
      this.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: vm.form }).then((response) => {
            if (response.data.success) {
              vm.isLoading = false;
              // console.log('訂單已建立', response);
              vm.$bus.$emit('message:push', response.data.message, 'success');
              this.$emit('updatecart', '');
              vm.$router.push(`/backstage/checkout/${response.data.orderId}`);
            }
          }).catch((error) => {
            vm.$bus.$emit('message:push', error, 'danger');
            setTimeout(() => {
              vm.$router.push('/login');
            }, 5000);
          });
        } else {
          vm.$bus.$emit('message:push', '欄位資料不完整', 'danger');
        }
      });
    },
  },
  watch: {
  },
  created() {
  },
};
</script>
