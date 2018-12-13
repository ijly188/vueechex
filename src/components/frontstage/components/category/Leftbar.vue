<template>
    <div class="leftbar">
        <div class="leftbar p-r-20 p-r-0-sm">
            <!--  -->
            <h4 class="m-text14 p-b-7">
                Categories
            </h4>

            <ul class="p-b-54">
                <li class="p-t-4">
                    <router-link to="/category/all"
                    :class="{' active1': $route.path === '/category/all'}"
                    class="s-text13">
                        全部
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/backpack"
                    :class="{' active1': $route.path === '/category/backpack'}"
                    class="s-text13">
                        後揹包
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/messengerbag"
                    :class="{' active1': $route.path === '/category/messengerbag'}"
                    class="s-text13">
                        側背包
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/attachecase"
                    :class="{' active1': $route.path === '/category/attachecase'}"
                    class="s-text13">
                        公事包
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/casualstyle"
                    :class="{' active1': $route.path === '/category/casualstyle'}"
                    class="s-text13">
                        休閒包
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/designforwomen"
                    :class="{' active1': $route.path === '/category/designforwomen'}"
                    class="s-text13">
                        女用推薦
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/beauty"
                    :class="{' active1': $route.path === '/category/beauty'}"
                    class="s-text13">
                        女神風
                    </router-link>
                </li>

                <li class="p-t-4">
                    <router-link to="/category/hipster"
                    :class="{' active1': $route.path === '/category/hipster'}"
                    class="s-text13">
                        文青風
                    </router-link>
                </li>

                <li class="p-t-4" v-if="false">
                    <router-link to="/category/casualstyle"
                    :class="{' active1': $route.path === '/category/casualstyle'}"
                    class="s-text13">
                        休閒包
                    </router-link>
                </li>
            </ul>

            <!--  -->
            <!-- <h4 class="m-text14 p-b-32">
                Filters
            </h4>

            <div class="filter-price p-t-22 p-b-50 bo3">
                <div class="m-text15 p-b-17">
                    Price
                </div>

                <div class="wra-filter-bar">
                    <div id="filter-bar"></div>
                </div>

                <div class="flex-sb-m flex-w p-t-16">
                    <div class="w-size11">
                        <button class="flex-c-m size4 bg7
                        bo-rad-15 hov1 s-text14 trans-0-4">
                            Filter
                        </button>
                    </div>

                    <div class="s-text3 p-t-10 p-b-10">
                        Range: $<span id="value-lower">610</span> - $
                        <span id="value-upper">980</span>
                    </div>
                </div>
            </div>

            <div class="filter-color p-t-22 p-b-50 bo3">
                <div class="m-text15 p-b-12">
                    Color
                </div>

                <ul class="flex-w">
                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter1"
                        type="checkbox" name="color-filter1">
                        <label class="color-filter color-filter1"
                        for="color-filter1"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter2"
                        type="checkbox" name="color-filter2">
                        <label class="color-filter color-filter2"
                        for="color-filter2"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter3"
                        type="checkbox" name="color-filter3">
                        <label class="color-filter color-filter3"
                        for="color-filter3"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter4"
                        type="checkbox" name="color-filter4">
                        <label class="color-filter color-filter4"
                        for="color-filter4"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter5"
                        type="checkbox" name="color-filter5">
                        <label class="color-filter color-filter5"
                        for="color-filter5"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter6"
                        type="checkbox" name="color-filter6">
                        <label class="color-filter color-filter6"
                        for="color-filter6"></label>
                    </li>

                    <li class="m-r-10">
                        <input class="checkbox-color-filter" id="color-filter7"
                        type="checkbox" name="color-filter7">
                        <label class="color-filter color-filter7"
                        for="color-filter7"></label>
                    </li>
                </ul>
            </div>

            <div class="search-product pos-relative bo4 of-hidden">
                <input class="s-text7 size6 p-l-23 p-r-50"
                type="text" name="search-product" placeholder="Search Products...">

                <button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                    <i class="fs-12 fa fa-search" aria-hidden="true"></i>
                </button>
            </div> -->
        </div>
    </div>
</template>
<script>
</script>
