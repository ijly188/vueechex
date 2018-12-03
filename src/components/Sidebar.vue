<template>
    <div class="sidebar">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <h6 class="sidebar-heading
                d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>管理員</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link to="/admin/products" class="nav-link"
                        :class="{'active': $route.path=='/admin/products'}"
                        >
                            <i class="fas fa-box-open"></i> 產品列表
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/orders" class="nav-link"
                        :class="{'active': $route.path=='/admin/orders'}"
                        >
                            <i class="far fa-list-alt"></i> 訂單列表
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/coupons" class="nav-link"
                        :class="{'active': $route.path=='/admin/coupons'}"
                        >
                            <i class="fas fa-ticket-alt"></i> 優惠券
                        </router-link>
                    </li>
                </ul>
                <h6 class="sidebar-heading
                d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>模擬功能</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link to="/admin/customer_order" class="nav-link"
                        :class="{'active': $route.path=='/admin/customer_order'}"
                        >
                        <i class="fas fa-shopping-cart"></i>
                        模擬訂單
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
