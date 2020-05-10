<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <b-button
          class="btn_buy pull-left"
          variant="primary"
          size="lg"
          @click.prevent="$router.go(-1)"
        >
          <i class="fa fa-chevron-left"></i>
        </b-button>
        <div
          class="col-lg-12 bg-primary py-3 text-white mt-2 text-center text-capitalize ddd h4"
        >product details</div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-1 text-center"></div>
        <div class="col-lg-4 text-center border-right border-secondery">
          <b-card
            class="tab-content row h-100 d-flex justify-content-center align-items-center fff   mr-3"
            id="myTabContent"
            :img-src="`${products[idDetail].image}`"
          >
            <!-- <div
              class="tab-pane fade show active col-lg-12 mb-4"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <b-card
                id="my-table"
                
                img-alt="Image"
                img-top
                class="mb-3 blauke-t"
              ></b-card>
            </div> -->
          </b-card>
        </div>
        <div class="col-lg-7">
          <h5 class="blauke-t text-left ml-3">{{products[idDetail].title}}</h5>
          <p class="my-4 col-lg-8 text-muted text-left">{{products[idDetail].description}}</p>
          <ul class="spec text-left ml-3">
            <li>Category: {{products[idDetail].category}}</li>
            <li>Condition: {{products[idDetail].condition}}</li>
            <li>Posted: {{products[idDetail].date_created}}</li>
          </ul>
          <p class="h4 prijs blauke-t text-left">€{{products[idDetail].price}}</p>
          <b-button
            class="btn_buy prijs pull-left"
            variant="primary"
            size="lg"
            @click.prevent="$router.push({ name: 'payment' })"
          >Buy</b-button>
        </div>
        <h6
          class="contact-link col-md-4 geel-t text-left h5"
          @click.prevent="$router.push({ name: 'contactseller' })"
          type="button"
        >
          <u>Contact seller</u>
        </h6>
        <br>
        <ul class="contact text-left col-lg-8">
          <li>Med Em</li>
          <li>Student EHB</li>
          <li></li>
          <li>Show other ads by Med</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

var url_product = "";

export default {
  name: "Details",
  // passaing the array as a prop from the parent App.vue to the child component
  data() {
    return {
      image: "",
      products: [],
      category_id: this.$route.params.category_id,
      idDetail: this.$route.params.details_id
      /* Made an instance in the data return function in order to 
        call the data from the API, and loop in it. AND avoid mutating the initial property 
        Afterwards being able to do text interpolation two curl braces  {{ }} and for nested iterated values [] .
        */
    };
  },
  mounted() {
    if (this.category_id == "homepage") {
      url_product = "http://127.0.0.1:8000/product/";
      axios
        .get(url_product)
        .then(res => (this.products = res.data["results"]))
        .catch(err => console.log("error", err));
    } else {
      url_product = "http://127.0.0.1:8000/product/?search=";
      axios
        .get(url_product + this.category_id)
        .then(res => (this.products = res.data["results"]))
        .catch(err => console.log("error", err));
    }
  }
};
</script>

<style>
.fff{
  border: none;
}
.jumbotron {
  background-color: white;
}
.pro-details .nav-item {
  height: 50px;
}
.blauke-t {
  color: #004fff;
  font-weight: 600;
}
.geel-t {
  color: #ffbf00;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 12px;
}

ul.spec {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul.contact {
  list-style-type: none;
  margin-left: 28px;
  padding: 0;
}
li {
  margin-bottom: 18px;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
}
.prijs {
  margin-top: 12px;
  margin-left: 12px;
}

.btn_buy:hover {
  color: white;
}
.btn_buy {
  font-weight: 600;
}
.ddd {
  border-radius: 5px;
}
</style>


