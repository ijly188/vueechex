<template>
    <div class="pagination_wrap">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': !pagination.has_pre }">
                <a class="page-link" href="#" aria-label="Previous"
                @click.prevent="getProducts(pagination.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages"
                :class="{'active': pagination.current_page === page}"
                :key="page">
                    <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled': !pagination.has_next }">
                <a class="page-link" href="#" aria-label="Next"
                @click.prevent="getProducts(pagination.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  props: [
    'pagination',
  ],
  data() {
    return {
    };
  },
  methods: {
    getProducts(page) {
      this.$emit('bindgetProducts', page);
    },
  },
};
</script>

<style>

</style>
