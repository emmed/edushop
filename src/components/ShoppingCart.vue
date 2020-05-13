<template>
  <div>
    <div class="container">
      <article class>
        <div class="row justify-content-center">
          <div class="col-xs-8">
            <div class="panel panel-info">
              <div class="panel-heading">
                <div class="panel-title">
                  <div class="row">
                    <div class="col-xs-6">
                      <h5 class="my-3">
                        <i class="fa fa-shopping-cart fa-lg blauke-t"></i> Shopping Cart
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-body" v-bind:key="product.id" v-for="product in products">
                <div class="row">
                  <div class="col-xs-2">
                    <img class="img-responsive" src="http://placehold.it/100x70">
                  </div>
                  <div class="col-xs-4">
                    <h4 class="product-name px-4">
                      <strong>{{product.title}}</strong>
                    </h4>
                    <h4 class="">
                      <small>{{product.description}}</small>
                    </h4>
                  </div>
                  <div class="col-xs-6">
                    <div class="col-xs-2">
                      <button type="button" class="btn btn-link">
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
                      <strong>$50.00</strong>
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
      products: []
    };
  },
  methods: {
    getProduct() {},
    deleteProduct() {
      var removeCartItemButton = document.getElementsByClassName("btn-link");
      console.log(removeCartItemButton);
      for (let i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener("click", function() {
          console.log("clicked");
        });
      }
    }
  },
  created() {
    this.items = [];
    this.items.push(localStorage.getItem("wgItem"));
    this.items2 = this.items["0"].split(",");
    for (var i = 0; i < this.items2.length; i++) {
      axios
        .get("http://127.0.0.1:8000/product/" + this.items2["" + i + ""])
        .then(res => this.products.push(res.data))
        .catch(err => console.log("error", err));
    }
  }
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
