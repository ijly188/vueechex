<template>
    <div class="member">
        <Alert></Alert>
        <smallonepicslide
            v-bind:title="this.category"
            v-bind:imgsrc="this.slideimgsrc"
        ></smallonepicslide>
        <Breadcrumb></Breadcrumb>
        <section class="bgwhite p-t-55 p-b-65">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                        <Leftbar></Leftbar>
                    </div>
                    <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                        <!-- Product -->
                        <div class="row">
                            <div class="col-12">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
/* global $ */
import Alert from '../AlertMessage';
import Breadcrumb from './components/global/Breadcrumb';
import smallonepicslide from './components/member/smallonepicslide';
import Leftbar from './components/member/Leftbar';

export default {
  components: {
    Alert,
    Breadcrumb,
    smallonepicslide,
    Leftbar,
  },
  data() {
    return {
      message: '目前這邊還沒有api哦',
      category: '會員中心',
      slideimgsrc: '/static/about/about.jpg',
      status: {
        loadingItem: '',
        isUpdate: false,
      },
    };
  },
  methods: {
    
  },
  created() {
  },
  mounted() {
    
  },
};
</script>
