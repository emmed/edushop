<template>
  <div>
    <div class="jumbotron hk p-4 mb-0">
      <div class="h2 blauke-t mb-5">Find the exact school material for your subject!</div>
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h5 class="panel-title blauke">Find your bookpackage</h5>
            </div>

            <b-col cols=" m-3">
              <div class="form-group">
                <select
                  class="selectpicker form-control"
                  v-model="form.school"
                  :options="school"
                  required
                >
                  <optgroup label="Erasmushogeschool | EHB">
                    <option>Campus Kaai</option>
                    <option>Campus Bloemberg</option>
                  </optgroup>
                  <optgroup label="Vrije Universiteit Brussel | VUB">
                    <option>Campus Jette</option>
                    <option>Campus Schaarbeek</option>
                  </optgroup>
                  <optgroup label="Katholieke universiteit leuven | KUL">
                    <option>KUL Gent</option>
                    <option>Campus Antwerpen</option>
                  </optgroup>
                </select>
                <small class="form-text text-muted">Select your school</small>
              </div>
            </b-col>

            <b-col cols=" m-3">
              <b-form-select v-model="form.major">
                <option disabled value>Select major</option>
                <option v-bind:key="major.id" v-for="major in majors">{{major.major}}</option>
              </b-form-select>
              <span>Selected: {{ form.major }}</span>
            </b-col>

            <b-col cols=" m-3">
              <b-form-select v-model="form.category">
                <option disabled value>Select category</option>
                <option v-bind:key="category.id" v-for="category in categories">{{category.name}}</option>
              </b-form-select>
              <span>Selected: {{ form.category }}</span>
            </b-col>

            <b-col cols=" m-3">
              <b-form-select v-model="form.subject">
                <option disabled value>Select subject</option>
                <option v-bind:key="subject.id" v-for="subject in subjects">{{subject.subject}}</option>
              </b-form-select>
              <span>Selected: {{ form.subject }}</span>
            </b-col>
            <div class="group">
              <b-button v-on:click="onSubmit()" class="btn_find" size="lg" variant="warning">Find</b-button>
            </div>
            <div class="hr"></div>
          </div>
        </div>
        <div class="col-sm-9 col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title mb-4 blauke">Dashboard</h3>
            </div>
            <b-card
              img-src="../assets/stock-image.jpg"
              img-alt="Card image"
              img-left
              class="mb-3"
              v-bind:key="product.id"
              v-for="product in products"
              @click.prevent="goToDetails({index})"
              type="button"
            >
              <h5 class="blauke-t pull-left mr-3">{{product.title}}</h5>
              <b-card-text class="ty mt-5 text-muted">{{product.description}}</b-card-text>
              <b-card-text class="ty mt-5 text-muted">{{product.category}}</b-card-text>
              <b-card-text class="ty mt-5 text-muted">major: {{product.major}}</b-card-text>
              <b-card-text class="ty mt-5 text-muted">subject: {{product.subejct}}</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url_product = "http://127.0.0.1:8000/product/";
const url_category = "http://127.0.0.1:8000/category/";
const url_subject = "http://127.0.0.1:8000/subject/";
const url_major = "http://127.0.0.1:8000/major/";
const url_condition = "http://127.0.0.1:8000/condition/";
const url_location = "http://127.0.0.1:8000/location/";

export default {
  name: "Bookpackage",
  data() {
    return {
      products: [],
      form: {
        title: "",
        category: null,
        school: null,
        major: null,
        subject: null,
        condition: null,
        location: null
      },
      categories: [{ text: "Select category", value: null }],
      school: [
        //  { text: 'Select school', value: null }, 'KUL', 'Erasmushogeschool - Ehb', 'VUB'
      ],
      majors: [{ text: "Select major", value: null }],
      subjects: [{ text: "Select subject", value: null }],
      conditions: [{ text: "Select condition", value: null }],
      locations: [{ text: "Select location", value: null }],
      show: true
    };
  },
  methods: {
    onSubmit() {
      console.log("knop onSubmit werkt");
      var url = ""
      if (this.form.category) {
        url = url + "category__name=" + this.form.category;
      }
      if (this.form.major) {
        url = url + "&major__major=" + this.form.major;
      }
      if (this.form.subject) {
        url = url + "&subject__subject=" + this.form.subject;
      }
      if (this.form.school) {
        url = url + "&school=" + this.form.school;
      }
            console.log(url_product + "?" + url,"=>url");
  axios
      .get(url_product + "?" + url) 
      .then(res => (this.products = res.data["results"]), console.log(this.products,'products'))
      .catch(err => console.log("error", err));
    },
    goToDetails(index) {
      this.$router.push({
        path: `details/${index["index"]}/${this.category}`
        //path: `details/${index["index"]}`
      });
      console.log(index);
    }
  },
  created() {
    axios
      .all([
        axios.get(url_product),
        axios.get(url_major),
        axios.get(url_category),
        axios.get(url_subject),
        axios.get(url_condition),
        axios.get(url_location)
      ])
      .then(
        axios.spread(
          (
            productRes,
            majorRes,
            categoryRes,
            subjectRes,
            conditionRes,
            locationRes
          ) => {
            (this.products = productRes.data["results"]),
              (this.majors = majorRes.data),
              (this.categories = categoryRes.data),
              (this.subjects = subjectRes.data),
              (this.conditions = conditionRes.data),
              (this.locations = locationRes.data),
              console.log(
                "chunk of responses",
                productRes,
                categoryRes,
                subjectRes,
                majorRes,
                conditionRes,
                locationRes
              );
          }
        )
      )
      .catch(err => console.log("error", err));
  }
};
</script>

<style>
#accordion .glyphicon {
  margin-right: 10px;
}
.blauke {
  color: #004fff;
  font-weight: 400;
}
.blauke-t {
  color: #004fff;
  font-weight: 600;
}
.btn_find:hover {
  color: white;
}
.btn_find {
  font-weight: 600;
}

.clickable {
  cursor: pointer;
}
.jumbotron {
  background-color: rgba(255, 254, 254);
  border-radius: 0;
}
.panel-heading span {
  margin-top: -20px;
  font-size: 15px;
}
</style>
