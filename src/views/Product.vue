<template>
product
<h1>single product</h1>
{{ product.title }}
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_URL}/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http.get(url)
      .then((res) => {
        if (res.data.succuss) {
          this.product = res.data.product;
        } else {
          alert(res.data.message);
        }
      });
  },
};
</script>
