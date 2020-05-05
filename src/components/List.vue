<template>
  <div>
<div class="jumbotron hk p-4 ">
        <div class="d-flex justify-content-center h-100 my-5 ">
        <div class="searchbar">
          <input class="search_input " type="text" name="" placeholder="Search..."  v-model="search">
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
    </div>
 

 
 

 <div class="row justify-content-center">

    <div class="col-sm-9 col-md-9 ">


        <b-card no-body class="overflow-hidden dff my-5" style="max-width: 640px;"
         v-bind:key="product.id" v-for="(product, index) in filterProduct"  
         @click.prevent="goToDetails({index})" type="button">
    <b-row no-gutters>
      <b-col md="6">
        <b-card  img-src="../assets/stock-image.jpg" alt="Image" class="rounded-0"></b-card>
      </b-col>
      <b-col md="6">
        <b-card-body >
          <div class="title blauke-t h5">{{product.title}}</div>

           <b-card-text class="pull-left ty mt-2 text-muted">
           {{product.description}}o accusamus. Quis, aut.
          </b-card-text>
              <h4 class="pull-right blauke-t">€{{product.price}}</h4>
             
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

 </div>
   </div>

    
  
 
  </div>
  </div>
</template>

<script>
 
import axios from "axios";

const url_product = 'http://127.0.0.1:8000/product/?search='

export default {
  name: "List",
  data(){
    return{
  products:[],
  category_name: '',
  search:'',
  }
  },
  mounted(){
    this.$root.$on("message", (category_name) => {
      this.category_name = category_name
        console.log("eerste tekst", this.category_name)
    axios
      .get(url_product + category_name)
      .then(res => (this.products = res.data["results"]), console.log(this.products,'products'))
      .catch(err => console.log("error", err));
    });
  },
  methods: {
    goToDetails(index) {
      this.$router.push({
        path: `details/${index["index"]}/${this.category_name}`

      });
      console.log(index);
    }
  },
  computed: {
    filterProduct: function() {
      // this function will return the match the user input with news title.
      return this.products.filter(product => {
        return product.title.toLowerCase().match(this.search.toLowerCase());
      });
    }}
};

</script>

<style  >
 
 html,
body {
  margin: 0px;
  padding: 0px;
}
 .ty{
   text-align: left;
 }

 .dff{
   margin-left: 180px;
 }


  @media only screen and (max-width: 760px){
   .dff{
     margin-left: 10px;
   }
 }
 
    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #004fff;
    border-radius: 10px;
    padding: 10px;
     
    }

    .search_input{
    color: white !important;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
     }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:#ffbf00;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #ffbf00
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    color:white;
    text-decoration:none;
    }
</style>
