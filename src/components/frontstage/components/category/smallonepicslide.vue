<template>
    <div class="smallonepicslide">
        <!-- Title Page -->
        <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m"
        :style="{backgroundImage: 'url(' + imgsrc + ')'}">
            <h2 class="l-text2 t-center">
                {{ this.title }}
            </h2>
            <p class="m-text13 t-center">
                New Arrivals {{ this.title | firstwordupper }} Collection 2018
            </p>
        </section>
    </div>
</template>
<script>
export default {
  props: [
    'title',
    'imgsrc',
  ],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    getAllproduct() {
    },
  },
  created() {
  },
};
</script>
<style lang="scss">
.bg-title-page{
  background-size: cover;
}
</style>
