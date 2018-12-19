<template>
    <div class="leftbar">
        <div class="leftbar p-r-20 p-r-0-sm">
            <!--  -->
            <h4 class="m-text14 p-b-7">
                會員選項
            </h4>

            <ul class="p-b-54">
                <li class="p-t-4">
                    <router-link to="/member"
                    :class="{' active1': $route.path === '/member'}"
                    class="s-text13">
                        會員首頁
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/member/orderlist"
                    :class="{' active1': $route.path === '/member/orderlist'}"
                    class="s-text13">
                        訂單列表
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
</script>
