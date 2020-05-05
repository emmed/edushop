<template>
  <div>
    <div class="jumbotron my-0">
      <!-- <h1>Homepage</h1> -->
      <!-- <p>{{this.products}}</p> -->
      <hr>
      <div class="row mx-auto">
        <div
          class="col-sm-12 col-md-6 col-lg-3"
          v-bind:key="product.id"
          v-for="(product, index) in products"
        >
          <b-card
            id="my-table"
            v-bind:title="`${product.title}`"
            img-src="../assets/stock-image.jpg"
            img-alt="Image"
            img-top
            tag="products"
            class="mb-3 blauke-t"
            @click.prevent="goToDetails({index})"
            type="button"
          >
            <b-card-text class="text-muted">{{product.category_name}}</b-card-text>
          </b-card>
        </div>
      </div>

      <!-- <b-pagination
 aria-controls="my-table"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number size="lg" align="fill"
      ></b-pagination> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
var url = "http://127.0.0.1:8000/product/";
export default {
  name: "Homepage",
  data() {
    return {
      products: [],
          };
  },
  methods: {
    goToDetails(index) {
      this.$router.push({
        path: `details/${index["index"]}/${"homepage"}`
        //path: `details/${index["index"]}`
      });
      console.log(index);
    }
  },
  created() {
    axios
      .get(url)
      .then(res => (this.products = res.data["results"]),
        console.log("producten restults", this.products)
      )
      .catch(err => console.log("error", err));
  }
};
</script>

<style>
h1 {
  color: lightcoral;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>
