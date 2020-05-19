<template>
  <div>
    <div class="container">
      <article class>
        <div class="row pull-center">
          <div class="col-xs-8">
            <div class="panel panel-info">
              <div class="panel-heading">
                <div class="panel-title">
                  <div class="row">
                    <div class="col-xs-6">
                      <h5 class="mb-4">
                        <i class="fa fa-shopping-cart fa-lg blauke-t"></i> Shopping Cart
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-body" v-bind:key="product.id" v-for="(product, index) in products">
                <div class="row">
                  <div class="col-xs-2" type="button">
                    <img class="img-responsive" src="http://placehold.it/100x70">
                  </div>
                  <b-col cols="6 m-3">
                    <div class="col-xs-2" type="button">
                      <h4 class="product-name text-left blauke-t">
                        <strong>{{product.title}}</strong>
                      </h4>
                      <p class="text-sm-left text-muted">
                        <small>{{product.description}}</small>
                      </p>
                    </div>
                  </b-col>
                  <div class="col-xs-6">
                    <div class="col-xs-2">
                      <button
                        v-on:click="deleteProduct(product.id, index,product.price)"
                        type="button"
                        class="btn btn-link"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>

                    <div class="col-xs-2">
                      <h6>
                        <strong>{{product.price}}</strong>
                      </h6>
                    </div>
                  </div>
                </div>
                <hr>
              </div>
              <div class="panel-footer">
                <div class="row text-center">
                  <div class="col-xs-9">
                    <h4 class="text-right mr-4">
                      Total
                      <strong>€ {{sum}}</strong>
                    </h4>
                  </div>
                  <div class="col-xs-3">
                    <b-button type="button" class="btn_package btn-warning">Checkout</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "shoppingcart",
  data() {
    return {
      items: [],
      items2: [],
      products: [],
      sum:null
    };
  },

  methods: {

    deleteProduct(id, index,price) {
      console.log(index, "index");
      this.products.splice(index, 1);

      this.items2.splice(index, 1);
      this.sum -= price
      localStorage.setItem("wgItem", this.items2);
      localStorage.setItem("lengthCart", this.items2.length);
      if (localStorage.getItem("lengthCart") == 0) {
        localStorage.removeItem("wgItem");
        localStorage.removeItem("lengthCart");
        this.$root.$emit("lengthShopCart", "");
      } else {
        this.$root.$emit("lengthShopCart", localStorage.getItem("lengthCart"));
      }
    }
  },
  created() {
    this.items = [];
    this.items.push(localStorage.getItem("wgItem"));
    this.items2 = this.items["0"].split(",");
    console.log("items2",this.items2)
    for (var i = 0; i < this.items2.length; i++) {
      axios
        .get("http://127.0.0.1:8000/product/" + this.items2["" + i + ""])
        .then(res => (
        this.sum += parseFloat(res.data.price),
        this.products.push(res.data))
        
        )
        .catch(err => console.log("error", err));
    }
  },
  
};
</script>

<style>
article {
  background: white;
  border-radius: 12px;
  padding: 50px;
  margin-top: 10%;
}
</style>
