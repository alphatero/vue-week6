<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/products">後台產品頁表</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" @click.prevent="signout">登出</a>
                    </li>
                </ul>
                </div>
        </div>
    </nav>
    <router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      checkSuccess: false,
    };
  },
  created() {

  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.header.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(url, { api_token: this.token }).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            alert(res.data.message);
            this.$$router.push('/login');
          }
        });
      } else {
        alert('尚未登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('已登出');
      this.$router.push('/login');
    },
  },
};
</script>
