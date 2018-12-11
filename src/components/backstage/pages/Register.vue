<template>
    <div class="register app flex-row align-items-center pace-done">
        <Alert></Alert>
        <form class="container" @submit.prevent="showMessage">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card mx-4">
                        <div class="card-body p-4">
                            <h1>註冊帳號</h1>
                            <p class="text-muted">建立你的帳號</p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="icon-user"></i>
                                    </span>
                                </div>
                                <input class="form-control" type="text" placeholder="使用者名稱">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input class="form-control" type="text" placeholder="電子郵件">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="icon-lock"></i>
                                    </span>
                                </div>
                                <input class="form-control" type="password" placeholder="密碼">
                            </div>
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="icon-lock"></i>
                                    </span>
                                </div>
                                <input class="form-control" type="password" placeholder="確認密碼">
                            </div>
                            <button class="btn btn-block btn-success"
                            type="button" @click.prevent="showMessage">建立帳號</button>
                        </div>
                        <div class="card-footer p-4">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-block btn-facebook"
                                    @click.prevent="showMessage"
                                    type="button">
                                    <span>facebook登入</span>
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-block btn-twitter"
                                    @click.prevent="showMessage"
                                    type="button">
                                    <span>twitter登入</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Alert from '../../AlertMessage';

export default {
  name: 'CustomRegister',
  components: {
    Alert,
  },
  data() {
    return {
      message: '目前這邊還沒有api哦',
    };
  },
  methods: {
    showMessage() {
      const vm = this;
      vm.$bus.$emit('message:push', this.message, 'danger');
    },
  },
};
</script>
<style lang="scss">
@import "../../../assets/backstage.scss";
</style>
