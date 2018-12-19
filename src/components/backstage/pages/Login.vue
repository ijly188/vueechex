<template>
    <div class="backstagelogin app flex-row align-items-center">
        <Alert></Alert>
        <div class="container">
            <form class="form-signin" @submit.prevent="signin">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card-group">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h1>請先登入</h1>
                                    <p class="text-muted">輸入帳號密碼</p>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                        <i class="icon-user"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="text"
                                    placeholder="帳號" v-model="user.username">
                                    </div>
                                    <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                        <i class="icon-lock"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="password"
                                    placeholder="密碼" v-model="user.password">
                                    </div>
                                    <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-primary px-4"
                                        type="submit" @click.prevent="signin">登入</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <router-link to="/customforgetpassword">
                                            <button class="btn btn-link px-0"
                                            type="button">忘記密碼</button>
                                        </router-link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card text-white bg-primary py-5 d-md-down-none">
                                <div class="card-body text-center">
                                    <div>
                                    <h2>加入我們</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <router-link to="customregister">
                                        <button class="btn btn-primary active mt-3"
                                        type="button">現在註冊</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Alert from '../../AlertMessage';

export default {
  name: 'CustomLogin',
  components: {
    Alert,
  },
  data() {
    return {
      msg: 'Login',
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/admin/signin`;
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/backstage');
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss">
@import "../../../assets/backstage.scss";
</style>
