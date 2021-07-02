<template>
    <div class="container">
        <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>產品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td style="width: 200px;">
                      <div
                       style="height: 100px;
                       background-size: cover;
                       background-position: center;
                      "
                      :style="{backgroundImage: `url(${item.imageUrl})` }"
                      ></div>
                    </td>
                    <td>{{ item.title }}</td>
                    <td>
                      <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                      <del class="h6" v-if="item.price"
              >原價 {{ item.origin_price }} 元</del>
                      <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                    </td>
                    <td><button class="btn btn-primary "
                    type="button"
                    @click="goToPage(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id"
                    >
                    <i class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"></i>
                    進入單一頁面</button>
                    <button class="btn btn-outline-danger"
                    type="button"
                    @click="addToCart(item.id)"
                    :disabled="loadingStatus.loadingItem === item.id">
                      <i class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus.loadingItem === item.id"></i>
                      加入購物車
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <UserProductModal
        ref="userProductModal"
        :product="product"
        @add-to-cart="addToCart"
        />
    </div>
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue';

export default {
  data() {
    return {
      products: [],
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      product: {},
    };
  },
  components: {
    UserProductModal,
  },
  methods: {
    goToPage(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/${process.env.VUE_APP_PATH}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.loadingStatus.loadingItem = '';
          this.product = res.data.product;
          this.isLoading = false;
          this.$refs.userProductModal.openModal();
        }
      });
      // this.$router.push(`/product/${item.id}`);
    },
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
        });
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/${process.env.VUE_APP_PATH}/cart`;
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.$refs.userProductModal.hideModal();
          this.isLoading = false;
        } else {
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
