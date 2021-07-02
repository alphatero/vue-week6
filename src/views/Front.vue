<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/products">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart">Cart</router-link>
                </li>
                <li class="nav-item">
                    <router-link
                    class="nav-link" to="/admin/products">Backend Products</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
<router-view></router-view>
</template>

<script>
export default {

};
</script>
