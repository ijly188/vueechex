<template>
    <div class="pagination_wrap">
        <div class="pagination flex-m flex-w p-t-26">
            <a href="#"
            :class="{'active-pagination': (pagination.current_page === page)}"
            v-for="page in pagination.total_pages" :key="page"
            class="item-pagination flex-c-m trans-0-4"
            @click.prevent="setvalue(page)">
                {{ page }}
            </a>
        </div>
    </div>
</template>

<script>
/* global $ */
export default {
  props: [
    'pagination',
  ],
  data() {
    return {
    };
  },
  methods: {
    setvalue(page) {
      this.$emit('bindgetcurentpage', page);
      $('html, body').animate({ scrollTop: 0 }, 300);
    },
  },
};
</script>

<style lang="scss">
</style>
