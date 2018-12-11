<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">平台後台</li>
            <li class="breadcrumb-item">
                <router-link to="/backstage">儀表板</router-link>
            </li>
            <li class="breadcrumb-item active">{{this.name}}</li>
            <li class="breadcrumb-menu d-md-down-none">
                <div class="btn-group" role="group" aria-label="Button group">
                    <router-link class="btn" to="/backstage/user">
                        <i class="icon-speech"></i>
                    </router-link>
                    <router-link class="btn" to="/backstage">
                        <i class="icon-graph"></i> &nbsp;Dashboard
                    </router-link>
                    <router-link class="btn" to="/backstage/settings">
                        <i class="icon-settings"></i> &nbsp;Settings
                    </router-link>
                </div>
            </li>
        </ol>
    </nav>
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
      name: '',
      path: '',
    };
  },
  created() {
    const vm = this;
    // console.log(vm.$route);
    vm.name = vm.$route.name;
  },
};
</script>
