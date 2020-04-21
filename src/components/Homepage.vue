<template>
  <div>
     <div class="jumbotron my-0 ">

   <h1>homepage</h1>
<p>{{lists}}</p>
<hr>
 
<div class="row mx-auto ">
 <div class="col-sm-12 col-md-6 col-lg-3" v-bind:key="list.id" v-for="(list, index) in lists"   >
   <b-card
   v-if="list.url"
    id="my-table"
    v-bind:title="`${list.title}`"
    img-src="../assets/stock-image.jpg"
    img-alt="Image"
    img-top
    tag="lists"
    class="mb-3"
    @click.prevent="goToDetails({index})" type="button">
<b-card-text>{{list.description}}</b-card-text>
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
  props: ["lists"],
  data(){
    return{
     };
   },
    mounted(){
    // this.getAll();
  },
  methods: { 
    // getAll(){
  
    //   axios.get(url).then(res => this.lists= res.data).catch(err => console.log(err));
    //   console.log('list output', this.lists);
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
