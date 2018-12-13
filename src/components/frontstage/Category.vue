<template>
    <div class="category">
        <Alert></Alert>
        <smallonepicslide
            v-bind:title="this.category"
            v-bind:imgsrc="this.slideimgsrc"
        ></smallonepicslide>
        <!-- Content page -->
        <section class="bgwhite p-t-55 p-b-65">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                        <Leftbar></Leftbar>
                    </div>
                    <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                        <!--  -->
                        <div class="flex-sb-m flex-w p-b-35">
                            <div class="flex-w">
                                <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                    <select class="selection-2" name="sorting">
                                        <option>Default Sorting</option>
                                        <option>Popularity</option>
                                        <option>Price: low to high</option>
                                        <option>Price: high to low</option>
                                    </select>
                                </div>

                                <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                    <select class="selection-2" name="sorting">
                                        <option>Price</option>
                                        <option>$0.00 - $50.00</option>
                                        <option>$50.00 - $100.00</option>
                                        <option>$100.00 - $150.00</option>
                                        <option>$150.00 - $200.00</option>
                                        <option>$200.00+</option>

                                    </select>
                                </div>
                            </div>

                            <span class="s-text8 p-t-5 p-b-5">
                                Showing {{ pagination.showmin }}–{{ pagination.showmax }} of {{ filterbyrouteProduct.length }} results
                            </span>
                        </div>

                        <!-- Product -->
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4 p-b-50" v-for="(item, key) in showProduct" :key="key">
                                <!-- {{item}} -->
                                <!-- Block2 -->
                                <div class="block2">
                                    <div class="block2-img wrap-pic-w
                                    of-hidden pos-relative"><!-- block2-labelnew-->
                                        <span class="catetext">
                                            {{item.category}}
                                        </span>
                                        <img 
                                        :src="item.imageUrl"
                                        alt="IMG-PRODUCT">

                                        <div class="block2-overlay trans-0-4">
                                            <a href="#" class="block2-btn-addwishlist hov-pointer
                                            trans-0-4">
                                                <i class="icon-wishlist icon_heart_alt"
                                                aria-hidden="true"></i>
                                                <i class="icon-wishlist icon_heart dis-none"
                                                aria-hidden="true"></i>
                                            </a>

                                            <div class="block2-btn-addcart w-size1 trans-0-4">
                                                <!-- Button -->
                                                <button class="flex-c-m size1 bg4 bo-rad-23
                                                hov1 s-text1 trans-0-4">
                                                    加入購物車
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="block2-txt p-t-20">
                                        <router-link :to="'/product/' + item.id" class="block2-name
                                        dis-block s-text3 p-b-5">
                                            {{ item.title }}
                                        </router-link>

                                        <span class="block2-price m-text6 p-r-5">
                                            售價：{{ item.origin_price | currency }}  特價：{{ item.price | currency }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <pagination
                            :pagination="pagination"
                            v-on:bindgetcurentpage="setCurrentPage"
                        ></pagination>
                    </div>
                </div>
            </div>
        </section>


        <!-- Container Selection -->
        <div id="dropDownSelect1"></div>
        <div id="dropDownSelect2"></div>
    </div>
</template>
<script>
/* global $ */
// import noUiSlider from '../../../static/frontstage/vendor/noui/nouislider';
import Alert from '../AlertMessage';
import smallonepicslide from './components/category/smallonepicslide';
import Leftbar from './components/category/Leftbar';
import pagination from './components/global/Pagination';

export default {
  components: {
    Alert,
    smallonepicslide,
    Leftbar,
    pagination,
  },
  data() {
    return {
      message: '目前這邊還沒有api哦',
      pagination: {
        total_pages: 1,
        current_page: 1,
        showmin: 1,
        showmax: 1,
      },
      // category: '',
      products: '',
      maxshow: 10,
      showProduct: '',
    };
  },
  methods: {
    getAllproduct() {
      const vm = this;
      const api = `${process.env.API_DOMAINNAME}/api/${process.env.CUSTOM_PATH}/admin/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        // console.log(response.data);
        vm.products = response.data.products;
        vm.setPagination();
      }).catch((error) => {
        vm.$bus.$emit('message:push', error, 'danger');
        setTimeout(() => {
          vm.$router.push('/');
        }, 5000);
      });
    },
    setPagination() {
      let maxshow = this.maxshow;
      let products = this.filterbyrouteProduct;
      let current_page = this.pagination.current_page;
      // console.log(products);
      this.pagination.total_pages = Math.floor( products.length / maxshow );

      this.pagination.showmin = 1 + ( (current_page - 1 ) * maxshow );
      this.pagination.showmax = ( (current_page ) * maxshow );
      // console.log(this.pagination.total_pages);

      // set the filterproduct
      this.filtershowproduct();
    },
    setCurrentPage(page = 1) {
      this.pagination.current_page = page;
      this.setPagination();
    },
    filtershowproduct() {
      if( this.pagination.showmax !== 1 ) {
        // console.log(this.pagination.showmin);
        // console.log(this.pagination.showmax);
        // console.log(this.filterbyrouteProduct);
        let min = this.pagination.showmin - 1;
        let max = this.pagination.showmax - 1;
        let products = this.filterbyrouteProduct;
        let newarray = [];

        // console.log(min, max, products, newarray);

        for(let i = min; i <= max; i += 1) {
          let array = products[i];
          newarray.push(array);
        }
        this.showProduct = newarray;
        // console.log(newarray);
      }
    }
  },
  computed: {
    filterbyrouteProduct() {
      // console.log(this.products);
      const products = this.products;
      let filterarray = [];

      // set key
      let key = '';

      // get the idList
      const idList = Object.keys(products);
      // console.log(idList);

      switch ( this.category ) {
        default:
          key = '-';
          // filterarray = products;
          break;
          // return 'all';
        case 'all':
          key = '-';
          // filterarray = products;
          break;
          // return 'all';
        case 'backpack':
          key = '包包-後背';
          break;
          // return 'backpack';
        case 'messengerbag':
          key = '包包-側背';
          break;
          // return 'messengerbag';
        case 'attachecase':
          return 'attachecase';
        case 'casualstyle':
          return 'casualstyle';
        case 'designforwomen':
          return 'designforwomen';
        case 'beauty':
          return 'beauty';
        case 'hipster':
          return 'hipster';
      }
      for(let i = 0; i < idList.length; i++) {
        // console.log(products[idList[i]]);
        let checkcategory = products[idList[i]].category;
        if ( checkcategory.indexOf(key) >= 0 ){
          filterarray.push(products[idList[i]]);
        }
      }
      return filterarray;
    },
    category() {
      return this.$route.params.category;
    },
    slideimgsrc() {
      const idList = Object.keys(this.filterbyrouteProduct);
      let src = this.filterbyrouteProduct[idList[0]];
      if ( src !== undefined ) {
        src = src.imageUrl;
      }
      return src;
    },
  },
  watch: {
    filterbyrouteProduct() {
      this.setCurrentPage();
    },
  },
  created() {
    this.getAllproduct();
  },
  mounted() {
    $('.selection-2').select2({
      minimumResultsForSearch: 20,
      dropdownParent: $('#dropDownSelect2'),
    });

    /* [ No ui ]
    =========================================================== */
    // const filterBar = document.getElementById('filter-bar');

    // noUiSlider.create(filterBar, {
    //   start: [50, 200],
    //   connect: true,
    //   range: {
    //     min: 50,
    //     max: 200,
    //   },
    // });

    // const skipValues = [
    //   document.getElementById('value-lower'),
    //   document.getElementById('value-upper'),
    // ];

    // filterBar.noUiSlider.on('update',
    //   (values, handle) => {
    //     skipValues[handle].innerHTML = Math.round(values[handle]);
    //   });
  },
};
</script>

<style lang="scss">
@import "../../../static/frontstage/vendor/noui/nouislider.min.css";
.wrap-pic-w img {
    width: auto;
    height: auto;
    max-height: 344px;
}
.catetext {
    background-color: #66a8a6;
    z-index: 100;
    font-family: Montserrat-Regular;
    font-size: 12px;
    color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 65px;
    height: 22px;
    border-radius: 11px;
    position: absolute;
    top: 12px;
    left: 12px;
}
</style>
