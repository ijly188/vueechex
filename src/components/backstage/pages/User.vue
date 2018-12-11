<template>
    <div class="user">
        <Alert></Alert>
        <div>
            <div class="animated fadeIn">
                <div class="card">
                    <div class="card-header">使用者資訊</div>
                    <div class="card-body">
                        <div class="list-group list-group-accent">
                            <div class="list-group-item list-group-item-accent-primary">
                              連結網址：<strong>{{this.link}}</strong>
                            </div>
                            <div class="list-group-item list-group-item-accent-secondary">
                              使用路徑：<strong>{{this.custompath}}</strong>
                            </div>
                            <div class="list-group-item list-group-item-accent-primary">
                              登入狀態：<strong>{{this.loginstatus}}</strong>
                            </div>
                            <br><strong>api許願：{{this.suggestion}}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
      link: process.env.API_DOMAINNAME,
      custompath: process.env.CUSTOM_PATH,
      loginstatus: '',
      suggestion: '希望未來這邊可以打了checklogin api以後，取得會員資料',
    };
  },
  methods: {
    showMessage() {
    },
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
