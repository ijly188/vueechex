<template>
    <div class="settings">
        <Alert></Alert>
        <div>
            <div class="animated fadeIn">
                <div class="card">
                    <div class="card-header">系統設定</div>
                    <div class="card-body">
                        <div class="list-group list-group-accent">
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
      suggestion: '目前這邊還沒有api哦',
    };
  },
  mounted() {
  },
};
</script>
<style>

</style>
