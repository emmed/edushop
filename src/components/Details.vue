<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <b-button
          class="btn_buy pull-left "
          variant="primary"
          size="lg"
          @click.prevent="$router.go(-1)"
        >
          <i class="fa fa-chevron-left"></i>
        </b-button>
        <div
          class="col-lg-12 bg-primary py-3 text-white mt-2 text-center text-capitalize h4"
        >product details</div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-1 text-center">
          <ul class="nav nav-tabs row text-center pro-details" id="myTab" role="tablist">
            <li class="nav-item col-lg-12 mb-2">
              <img
                class="img-fluid active h-100"
                src="https://pbs.twimg.com/media/ENktSOKU0AA9Y-6.jpg"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
            </li>
            <li class="nav-item col-lg-12 mb-2">
              <img
                class="img-fluid h-100"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                src="https://pbs.twimg.com/media/ENktSOTUEAELNMN.jpg"
              >
            </li>
            <li class="nav-item col-lg-12 mb-2 mb-4">
              <div style="height:50px">
                <img
                  class="img-fluid h-100"
                  src="../assets/stock-image.jpg"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
              </div>
            </li>
            <li class="nav-item col-lg-12 mb-2 mb-4">
              <img
                class="img-fluid h-100"
                src="../assets/vue-logo.png"
                id="product-tab"
                data-toggle="tab"
                href="#product"
                role="tab"
                aria-controls="product"
                aria-selected="false"
              >
            </li>
            <li class="nav-item col-lg-12 mb-2 mb-4">
              <img
                class="img-fluid h-100"
                src="https://pbs.twimg.com/media/EOYIp0DUUAA29Ft?format=jpg&name=small"
                id="productTwo-tab"
                data-toggle="tab"
                href="#productTwo"
                role="tab"
                aria-controls="productTwo"
                aria-selected="false"
              >
            </li>
            <li class="nav-item col-lg-12 mb-2 mb-4">
              <img
                class="img-fluid h-100"
                src="https://pbs.twimg.com/media/EOYIp0JVUAANGFD?format=jpg&name=small"
                id="productThree-tab"
                data-toggle="tab"
                href="#productThree"
                role="tab"
                aria-controls="productThree"
                aria-selected="false"
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-4 text-center border-right border-secondery">
          <div
            class="tab-content row h-100 d-flex justify-content-center align-items-center"
            id="myTabContent"
          >
            <div
              class="tab-pane fade show active col-lg-12 mb-4"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <img class="img-fluid" src="../assets/post_an_ad.png">
            </div>
            <div
              class="tab-pane fade col-lg-12 mb-4"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img class="img-fluid" src="../assets/stock-image.jpg">
            </div>
            <div
              class="tab-pane fade col-lg-12 mb-4"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <img class="img-fluid" src="https://pbs.twimg.com/media/ENktSONUEAAm6k1.jpg">
            </div>
            <div
              class="tab-pane fade col-lg-12 mb-4"
              id="product"
              role="tabpanel"
              aria-labelledby="product-tab"
            >
              <img class="img-fluid" src="../assets/vue-logo.png">
            </div>
            <div
              class="tab-pane fade col-lg-12 mb-4"
              id="productTwo"
              role="tabpanel"
              aria-labelledby="productTwo-tab"
            >
              <img
                class="img-fluid"
                src="https://pbs.twimg.com/media/EOYIp0DUUAA29Ft?format=jpg&name=small"
              >
            </div>
            <div
              class="tab-pane fade col-lg-12 mb-4"
              id="productThree"
              role="tabpanel"
              aria-labelledby="productThree-tab"
            >
              <img
                class="img-fluid"
                src="https://pbs.twimg.com/media/EOYIp0JVUAANGFD?format=jpg&name=small"
              >
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <h5 class="blauke-t text-left ml-3">{{products[idDetail].title}}</h5>
          <p
            class="my-4 col-lg-8 text-muted text-left"
          >{{products[idDetail].description}}</p>
          <ul class="spec text-left ml-3">
            <li>Category: {{products[idDetail].category}}</li>
            <li>Condition: {{products[idDetail].condition}}</li>
            <li>Posted: {{products[idDetail].date_created}}</li>
          </ul>
          <p class="h4 prijs blauke-t text-left">€{{products[idDetail].price}}</p>
          <b-button
            class="btn_buy prijs pull-left "
            variant="primary"
            size="lg"
            @click.prevent="$router.push({ name: 'payment' })"
          >Buy</b-button>
        </div>
        <h6
          class="contact-link col-md-4 geel-t text-left"
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
export default {
  name: "Details",
  components: {},
    props: ["products"],
    // passaing the array as a prop from the parent App.vue to the child component
    data() {
      return {
        idDetail: this.$route.params.details_id 
        /* Made an instance in the data return function in order to 
        call the data from the API, and loop in it. AND avoid mutating the initial property 
        Afterwards being able to do text interpolation two curl braces  {{ }} and for nested iterated values [] .
        */
      }
    }
};
</script>

<style>
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
</style>
