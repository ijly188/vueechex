<template>
    <div class="register app flex-row align-items-center pace-done">
        <Alert></Alert>
        <form class="container" @submit.prevent="showMessage">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card mx-4">
                        <div class="card-body p-4">
                            <h1>忘記密碼</h1>
                            <p class="text-muted">輸入帳號</p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="icon-user"></i>
                                    </span>
                                </div>
                                <input class="form-control" type="text" placeholder="輸入使用者帳號">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input class="form-control" type="text" placeholder="輸入電子郵件">
                            </div>
                            <button class="btn btn-block btn-success"
                            type="button" @click.prevent="showMessage">送出查詢</button>
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
