<template>
  <div>
     <div class="jumbotron my-0 ">

   <h1>homepage</h1>
<p>{{products}}</p>
<hr>
 
<div class="row mx-auto ">
 <div class="col-sm-12 col-md-6 col-lg-3" v-bind:key="product.id" v-for="(product, index) in products"   >
   <b-card
   v-if="product.url"
    id="my-table"
    v-bind:title="`${product.title}`"
    img-src="../assets/stock-image.jpg"
    img-alt="Image"
    img-top
    tag="products"
    class="mb-3 blauke-t"
    @click.prevent="goToDetails({index})" type="button">
<b-card-text class="text-muted">{{product.category}}</b-card-text>
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
// import axios from "axios";
// var url = 'http://localhost:8000/product/'
 export default {
  name: "Homepage",
  components: { },
  props: ["products"],
  data(){
    return{
     };
   },
    mounted(){
    // this.getAll();
  },
  methods: { 
    // getAll(){
  
    //   axios.get(url).then(res => this.products= res.data).catch(err => console.log(err));
    //   console.log('product output', this.products);
    // },

    goToDetails(index) {
      this.$router.push({
        path: `details/${index["index"]}`
      });
      console.log(index);
    }
    
  },
  computed: {}
};
</script>

<style>
h1{
  color: lightcoral;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
 
 
</style>
