<template>
    <div class="breadcrumb_wrap">
        <!-- breadcrumb -->
        <div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
            <router-link to="/" class="s-text16">
                Abby Shop
                <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </router-link>

            <router-link :to="'/' + this.category" class="s-text16">
                {{ category }}
                <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </router-link>

            <router-link
            :to="
                '/' + this.category + '/' + this.classname"
                class="s-text16"
                v-if="this.itemname !== ''">
                {{ classname }}
                <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
            </router-link>

            <span class="s-text17" v-else>
                {{ classname }}
            </span>

            <span class="s-text17" v-if="this.itemname !== ''">
                Boxy T-Shirt with Roll Sleeve Detail
            </span>
        </div>
    </div>
</template>
<script>
export default {
  components: {
    category: '',
    classname: '',
    itemname: '',
  },
  created() {
    // 商品分類，可以想一下要不要用name去顯示中文
    const key = this.$route.params;
    const category = Object.keys(key);
    this.category = category[0];

    // 商品名稱
    const classname = this.$route.params[category[0]];
    this.classname = classname;

    const itemname = '';
    this.itemname = itemname;
    // if ( Object.keys(this.$route.params) === 'itemname' ) {}
  },
};
</script>
<style>

</style>
