<template>
    <div>


 
    <div class="jumbotron">
        <h3 class="display-4 py-4">Admin dashboard</h3>  
        
      
           <b-row class="mb-5 justify-content-center">

            <b-col cols="3" v-bind:key="productOrder.id" v-for="productOrder in productOrders">
    <b-card class="text-center cardss" @click.prevent="$router.replace({ name: 'useradmin_placed_ads' })" type="button" >
        <h2 class="blauke-t  display-4">71</h2>
        <b-card-text class="blauke-t">{{productOrder.state}}</b-card-text>
      </b-card>
            </b-col>


            
            </b-row>
       <h4 class="pull-left blauke-t my-5">Last Placed 3 ads</h4>
        <table id="cart" class="table table-hover table-condensed" style="background-color: gainsboro;">
            <thead class="thead-dark">
                <tr>
                    <th style="width:50%" class="h4"><strong>Posts</strong></th>
                    <th style="width:10%" class="h4"><strong>Price</strong></th>
                    <th style="width:8%"></th>
                    <th style="width:22%" class="text-center h4"><strong>Status</strong></th>
                    <th style="width:10%"></th>
                </tr>
            </thead>
 
            <tbody>
                <tr v-bind:key="product.id" v-for="(product, index) in products.slice(0,3)">
                    <td data-th="Product">
                        <div class="row" >
                             <div class="col-sm-9">
                                <h4 class="blauke-t" @click.prevent="$router.replace({ name: 'details' })" type="button"> {{product.title}}</h4>
                                <p class="text-muted ml-2"> {{product.description}}</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">€{{product.price}} </td>
                    <!-- <td data-th="Quantity"></td> -->
                    
                    <td v-bind:key="productOrder.id" v-for="productOrder in productOrders" data-th="Subtotal" class="text-center">{{productOrder.state}}</td>
                    <td class="actions" data-th="">
                          <button v-on:click="updateProduct(product.id, index)" class="btn btn-primary btn-lg m-3" @click.prevent="$router.push({ name: 'sdf' })" ><i class="fa fa-edit"></i></button> 
                         <button v-on:click="deleteProduct(product.id, index)" class="btn btn-danger btn-lg" ><i class="fa fa-trash-o"></i></button> 
                    </td>
 
                </tr>
            </tbody>

  
            <tfoot>
                <tr class="">
                    <td class="text-left"><strong> </strong></td>
                </tr>
                 
            
                   
 
            </tfoot>
 
        </table>
 
    </div>

    </div>
</template>

<script>
import axios from "axios";
//import {TokenService} from '../storage/service'
const url_productOrder = 'http://127.0.0.1:8000/productOrder/'
const url_product = 'http://127.0.0.1:8000/product/'
export default {
 name: "Useradmin",
data() {
      return {
          productOrders: [],
          products: [],
        show: true
      }
  },
  methods:{
      deleteProduct(id, index){
          console.log(index, "index")
      axios.delete(`http://127.0.0.1:8000/product/${id}`)
      .then(this.products.splice(index,1))
      //window.location.reload()
      },

 updateProduct(id, index){
   console.log(id, ":id  ", index, "index ")
   this.$root.$emit("prodUpdate", id, index)
 }
  },
  created() {
    axios
      .all([
        axios.get(url_productOrder),
        axios.get(url_product)
      ])
      .then(
        axios.spread(
          (stateRes, productRes) => {
              (this.productOrders = stateRes.data),
              (this.products = productRes.data["results"]),
              console.log(
                "chunk of responses",
                stateRes, 
                productRes
              );
          }
        )
      )
      .catch(err => console.log("error", err));
  }
//     axios.get(state_url)
//       .then(res => (this.states = res.data["results"],
//        console.log("states,, ", res.data)))
//       .catch(err => console.log("error", err));
//   },

}
</script>

<style>
 
.blauke-t{
  color: #004fff;
  font-weight: 600;

}
.jumbotron{
	background-color: rgba(235, 224, 224, 0.86);
	margin-bottom: 0;
}
.cardss{
    background-color:#ffbf00;
    border-radius: 30px;
    min-height: 160px;
}
.cardss:hover {
  background-color: lightgray;
   transition: 0.6s;
}
</style>
