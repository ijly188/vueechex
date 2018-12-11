<template>
    <div class="backstage">
        <Header></Header>
        <div class="app-body">
            <Sidebar></Sidebar>
            <main class="main">
                <!-- 麵包屑 -->
                <Breadcrumb></Breadcrumb>
                <div class="container-fluid">
                    <div id="ui-view">
                        <router-view></router-view>
                    </div>
                </div>
            </main>
            <Aside></Aside>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import Aside from './layout/Aside';
import Footer from './layout/Footer';

export default {
  components: {
    Header,
    Sidebar,
    Breadcrumb,
    Aside,
    Footer,
  },
  mounted() {
  },
};
</script>
<style lang="scss">

</style>
