<template>
    <div class="user">
        <Alert></Alert>
        
    </div>
</template>
<script>
import Alert from '../../AlertMessage';

export default {
  name: 'User',
  components: {
    Alert,
  },
  data() {
    return {
      message: '目前這邊還沒有api哦',
    }
  },
  mounted() {
    const vm = this;
    const api = `${process.env.API_DOMAINNAME}/api/user/check`;
    vm.$http.post(api).then((response) => {
      if (response.data.success) {
        vm.loginstatus = response.data.success;
      } else {
        vm.$bus.$emit('message:push', response.data.message, 'danger');
      }
    });
  },
};
</script>
<style>

</style>
