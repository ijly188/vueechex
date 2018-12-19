<template>
    <div class="index_content">
        <Alert></Alert>
        <!-- Shipping -->
        <section class="shipping bgwhite p-t-62 p-b-46">
            <div class="flex-w p-l-15 p-r-15">
                <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                    <h4 class="m-text12 t-center">
                        全球免費送達
                    </h4>

                    <router-link to="/member" class="s-text11 t-center">
                        點擊獲得更多資訊
                    </router-link>
                </div>

                <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
                    <h4 class="m-text12 t-center">
                        30天免費退換貨
                    </h4>

                    <span class="s-text11 t-center">
                        我們保證免費退換貨
                    </span>
                </div>

                <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
                    <h4 class="m-text12 t-center">
                        開幕慶
                    </h4>

                    <span class="s-text11 t-center">
                        開幕慶從禮拜一到禮拜五
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Alert from '../../../AlertMessage';

export default {
  components: {
    Alert,
  },
};
</script>
