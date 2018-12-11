<template>
    <div class="dashboard">
        <Navbar/>
        <Alert/>
        <div class="container-fluid">
        <div class="row">
            <Sidebar></Sidebar>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <router-view></router-view>
            </main>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Alert from './AlertMessage';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
};
</script>
<style lang="scss">
@import "../assets/all.scss";
</style>

