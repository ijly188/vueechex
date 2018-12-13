<template>
    <div class="smallonepicslide">
        <!-- Title Page -->
        <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m"
        :style="{backgroundImage: 'url(' + imgsrc + ')'}">
            <h2 class="l-text2 t-center">
                {{ title }}
            </h2>
        </section>
    </div>
</template>
<script>
export default {
  props: [
    'imgsrc'
  ],
  data() {
    return {
      title: 'Abby Shop',
      message: '',
    };
  },
  methods: {
  },
  created() {
  },
};
</script>
<style lang="scss">
.bg-title-page{
  background-size: cover;
  background-position: center;
}
</style>
