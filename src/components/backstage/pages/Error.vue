<template>
    <div class="error app flex-row align-items-center">
        <Alert></Alert>
        <div class="container">
            <form @submit.prevent="showMessage">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="clearfix">
                            <h1 class="float-left display-3 mr-4">404</h1>
                            <h4 class="pt-3">Oops! You're lost.</h4>
                            <p class="text-muted">The page you are looking for was not found.</p>
                        </div>
                        <div class="input-prepend input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fa fa-search"></i>
                                </span>
                            </div>
                            <input class="form-control" id="prependedInput" size="16"
                            type="text" placeholder="What are you looking for?">
                            <span class="input-group-append">
                                <button class="btn btn-info" type="submit">Search</button>
                            </span>
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
  name: 'CustomError',
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
      setTimeout(() => {
        vm.$router.push('/customlogin');
      }, 3000);
    },
  },
};
</script>
<style lang="scss">
@import "../../../assets/backstage.scss";
</style>
