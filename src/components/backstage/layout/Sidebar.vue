<template>
    <div class="sidebar backstageSidebar">
        <nav class="sidebar-nav">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link"
                    to="/backstage"
                    :class="{'active': $route.path === '/backstage'}"
                    >
                        <i class="nav-icon icon-speedometer"></i> 儀表板
                        <span class="badge badge-info">NEW</span>
                    </router-link>
                </li>
                <!-- <li class="nav-title">Theme</li>
                <li class="nav-item">
                    <a class="nav-link" href="colors.html">
                    <i class="nav-icon icon-drop"></i> Colors</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="typography.html">
                    <i class="nav-icon icon-pencil"></i> Typography</a>
                </li> -->
                <li class="nav-title">管理介面</li>
                <li class="nav-item nav-dropdown">
                    <router-link
                    to="/backstage/product"
                    class="nav-link"
                    :class="{'active': $route.path === '/backstage/product'}">
                        <i class="nav-icon fas fa-box-open"></i> 產品列表
                    </router-link>
                </li>
                <li class="nav-item nav-dropdown">
                    <router-link
                    to="/backstage/orders"
                    class="nav-link"
                    :class="{'active': $route.path === '/backstage/orders'}">
                        <i class="nav-icon far fa-list-alt"></i> 訂單列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                    to="/backstage/coupons"
                    class="nav-link"
                    :class="{'active': $route.path === '/backstage/coupons'}">
                        <i class="nav-icon fas fa-ticket-alt"></i> Coupon券
                    </router-link>
                </li>
                <li class="nav-divider"></li>
                <li class="nav-title">代客下單</li>
                <li class="nav-item nav-dropdown">
                    <router-link
                    to="/backstage/cart"
                    class="nav-link"
                    :class="{'active': $route.path === '/backstage/cart'}">
                        <i class="nav-icon fas fa-shopping-cart"></i> 模擬下單
                    </router-link>
                </li>
            </ul>
        </nav>
        <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
</template>
<script>
</script>
<style lang="scss">
</style>
