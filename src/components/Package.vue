<template>
  <div>
    <div class="jumbotron hk p-4 mb-0">
      <div class="h2 blauke-t mb-5">Find the exact school material for your subject!</div>
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h5 class="panel-title blauke">Find your package</h5>
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
   <multiselect v-model="form.major" :options="majors"
              track-by="major" 
              label="major"
              :show-labels="false"
              placeholder="Select your Major" :searchable="true" 
              :allow-empty="true">
                </multiselect>
            </b-col>

            <b-col cols=" m-3">
              <multiselect v-model="form.category" :options="categories"
              track-by="name" 
              label="name"
              :show-labels="false"
              placeholder="Select your Category" :searchable="true" 
              :allow-empty="true">
                </multiselect>
                </b-col>

            <b-col cols=" m-3">
             <multiselect v-model="form.subject" :options="subjects"
              track-by="subject" 
              label="subject"
              :show-labels="false"
              placeholder="Select your Subject" :searchable="true" 
              :allow-empty="true">
                </multiselect>
                </b-col>

            <div class="group">
              <b-button
                v-on:click="onSubmit()"
                class="btn_find m-2"
                size="lg"
                variant="warning"
              >Find</b-button>
              <b-button v-on:click="onReset()" class="btn_find" size="lg" variant="info">Reset</b-button>
            </div>
            <div class="hr"></div>
          </div>
        </div>
        <div class="col-sm-9 col-md-9">
          <div class="panel panel-default">
            <div class="row">
              <b-card
                style="max-width: 340px;"
                class="m-3"
                v-bind:key="product.id"
                v-for="product in products"
                @click.prevent="goToDetails({index})"
                type="button"
                :img-src="`${product.image}`"
              >
                <h5 class="blauke-t pull-left mr-3">{{product.title}}</h5>
                <b-card-text class="ty mt-5">
                  <p class="text-muted">{{product.description}}</p>
                  <hr>
                  <span class="badge badge-warning p-2 m-2">{{product.major}}</span>
                  <span class="badge badge-dark p-2">{{product.school}}</span>
                  <span class="badge badge-primary p-2 ml-2">{{product.subject}}</span>
                  <span class="badge badge-success p-2 ml-2">{{product.category}}</span>
                </b-card-text>
              </b-card>
            </div>
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

export default {
  name: "Package",
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
      },
      categories: [{ text: "Select category", value: null }],
      school: [],
      majors: [{ text: "Select major", value: null }],
      subjects: [{ text: "Select subject", value: null }],
      conditions: [{ text: "Select condition", value: null }],
      show: true
    };
  },
  methods: {
    onSubmit() {
      console.log("knop onSubmit werkt");
      var url = "";
      if (this.form.category) {
        url = url + "category__name=" + this.form.category.name;
      }
      if (this.form.major) {
        url = url + "&major__major=" + this.form.major.major;
      }
      if (this.form.subject) {
        url = url + "&subject__subject=" + this.form.subject.subject;
      }
      if (this.form.school) {
        url = url + "&school=" + this.form.school;
      }
      console.log(url_product + "?" + url, "=>url");
      axios
        .get(url_product + "?" + url)
        .then(
          res => (this.products = res.data["results"]),
          console.log(this.products, "products")
        )
        .catch(err => console.log("error", err));
    },
    onReset() {
      // Reset our form values
      this.form.category = null;
      this.form.major = null;
      this.form.subject = null;
      this.form.school = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
      axios.get(url_product)
      .then( res =>(
        this.products = res.data["results"]
      ))
    },
    goToDetails(index) {
      this.$router.push({
        path: `details/${index["index"]}/${this.category}`
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
        axios.get(url_condition)
      ])
      .then(
        axios.spread(
          (
            productRes,
            majorRes,
            categoryRes,
            subjectRes,
            conditionRes
          ) => {
            (this.products = productRes.data["results"]),
              (this.majors = majorRes.data),
              (this.categories = categoryRes.data),
              (this.subjects = subjectRes.data),
              (this.conditions = conditionRes.data),
              console.log(
                "chunk of responses",
                productRes,
                categoryRes,
                subjectRes,
                majorRes,
                conditionRes,
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
@media only screen and (max-width: 600px) {
  .jumbotron {
    background: red;
  }
}
</style>
