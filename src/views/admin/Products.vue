<template>
    <div>
    <h1>產品列表</h1>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="120">是否啟用</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-end">{{ item.origin_price }}</td>
                <td class="text-end">{{ item.price }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span v-else>未啟用</span>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  props: ['token'],
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_URL}/${process.env.VUE_APP_PATH}/admin/products:page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
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
