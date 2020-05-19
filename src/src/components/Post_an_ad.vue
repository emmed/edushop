<template>
  <div>
    <div class="jumbotron mb-0">
      <!-- <div v-if="this.token!=null"> -->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-alert
          v-model="showDismissibleAlert"
          variant="success"
          dismissible
        >Successfully placed your ad</b-alert>

        <b-container class>
          <b-row>
            <b-col cols="5 m-3">
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.title"
                  required
                  placeholder="Your ads title"
                  :state="input_validation"
                ></b-form-input>

                <b-form-invalid-feedback
                  :state="input_validation"
                >Your title must be 5-12 characters long.</b-form-invalid-feedback>
                <b-form-valid-feedback :state="input_validation">Looks Great!</b-form-valid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="5 m-3">
              <multiselect v-model="form.major" :options="majors"
              track-by="major" 
              label="major"
              :show-labels="false"
              placeholder="Select your Major" :searchable="true" 
              :allow-empty="true">
                </multiselect>
            </b-col>


    <b-col cols="5 m-3">
                <multiselect v-model="form.category" :options="categories"
              track-by="name" 
              label="name"
              :show-labels="false"
              placeholder="Select your Category" :searchable="false" 
              :allow-empty="true">
                </multiselect>
      </b-col>

        <b-col cols="5 m-3">
               <multiselect v-model="form.subject" :options="subjects"
              track-by="subject" 
              label="subject"
              :show-labels="false"
              placeholder="Select your Subject" :searchable="true" 
              :allow-empty="true">
                </multiselect>
          </b-col>

            <b-col cols="5 m-3">
              <div class="form-group">
                <select
                  class="selectpicker form-control"
                  v-model="form.school"
                  :options="schools"
                  required
                >
                  <optgroup  label="Erasmushogeschool | EHB">
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

            <b-col cols="5 m-3">
              <multiselect v-model="form.condition" :options="conditions"
              track-by="condition" 
              label="condition"
              :show-labels="false"
              placeholder="Select your Condition" 
              :searchable="false" 
              :allow-empty="true">
                </multiselect>
            </b-col>

            <b-col cols="5 m-3">
              <multiselect v-model="form.city" :options="cities"
               :custom-label="cityonSearch" 
               placeholder="Select your City" 
               :show-labels="false"
               label="id" 
               track-by="name">
              </multiselect>
              <span>
              <small class="form-text text-muted">Select your City</small>
              </span>
             </b-col>

            <b-col cols="5 m-3">
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                type="number"
                  id="input-2"
                  v-model="form.price"
                  required
                  placeholder="Price - €"
                  :state="input_price"
                ></b-form-input>

                <b-form-invalid-feedback :state="input_price">You must fill in a price</b-form-invalid-feedback>
                <b-form-valid-feedback :state="input_price">Done!</b-form-valid-feedback>
              </b-form-group>
            </b-col>
          </b-row>


          <b-row class="mt-4">
            <b-col cols="11 m-3">
              <b-form-textarea
                rows="6"
                id="textarea-default"
                placeholder="Description"
                v-model="form.description"
              ></b-form-textarea>
            </b-col>
          </b-row>

          <b-row class="mb-4">
            <b-col cols="4">
              <b-form-file
                type="file"
                @change="onFileSelected"
                v-model="form.image"
                :state="Boolean(form.image)"
                placeholder="Choose a image or drop it here..."
                drop-placeholder="Drop image here..."
                class="square_btn"
              ></b-form-file>
            </b-col>
          </b-row>
        </b-container>
        <b-button class="btn btn_post m-3"   @click="showDismissibleAlert=true" type="submit" >Submit</b-button>
        <b-button @click="onReset()" type="reset" variant="info">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->

    </div>
  </div>
</template>

<script>
import axios from "axios";

const url_category = "http://127.0.0.1:8000/category/";
const url_subject = "http://127.0.0.1:8000/subject/";
const url_major = "http://127.0.0.1:8000/major/";
const url_condition = "http://127.0.0.1:8000/condition/";
const url_city = "http://127.0.0.1:8000/city/";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        price: "",
        category: null,
        school: null,
        city: null,
        subject: null,
        major: null,
        condition: null,
        image: null
      },
      categories: [{ text: "Select category", value: null }],
      schools: [],
      cities: [],
      majors: [{ text: "Select major", value: null }],
      subjects: [{ text: "Select subject", value: null }],
      conditions: [{ text: "Select condition", value: null }],
      show: true,
      showDismissibleAlert: false,
      token: localStorage.getItem("token"),
      log_status: localStorage.getItem("logStatus"),
      username: localStorage.getItem("userName"),
      userId: localStorage.getItem("userid")
    };
  },
  methods: {
    onFileSelected(event) {
      this.form.image = event.target.files[0];
      console.log(event);
    },
    onSubmit(evt) {
      const fd = new FormData()
      fd.append('category', this.form.category.name)
      fd.append('condition', this.form.condition.condition)
      fd.append('major', this.form.major.major)
      fd.append('city', this.form.city.name)
      fd.append('subject', this.form.subject.subject)
      fd.append('title', this.form.title)
      fd.append('description', this.form.description)
      fd.append('price', this.form.price)
      fd.append('image', this.form.image)
      fd.append('school', this.form.school)
      fd.append('user', this.userId)

      console.log(fd,"fd")
      axios.post("http://127.0.0.1:8000/product/", fd

        )
        .then(response => {
          console.log("url","http://127.0.0.1:8000/product/" + fd)
           //this.$router.push('/homepage');
          console.log("response saved", response);
        })
        .catch(response => {
          console.log("catch response", response);
        });
      evt.preventDefault();
    },
    onReset(evt) {
    
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.category = null;
      this.form.school = null;
      this.form.major = null;
      this.form.subject = null;
      this.form.description = null;
      this.form.condition = null;
      this.form.city = null;
      this.form.imgae = null;
      this.form.price = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
     cityonSearch ({name}) {
      return `${name}`
    }
  },
  computed: {
    input_validation() {
      return this.form.title.length > 4 && this.form.title.length < 13;
    },
    input_price() {
      return this.form.price > 0;
    }
  },
  created() {


    axios
      .all([
        axios.get(url_major),
        axios.get(url_city),
        axios.get(url_category),
        axios.get(url_subject),
        axios.get(url_condition),
      ])
      .then(
        axios.spread(
          (majorRes, cityRes, categoryRes, subjectRes, conditionRes) => {
            (this.majors = majorRes.data),
            (this.cities = cityRes.data),
              (this.categories = categoryRes.data),
              (this.subjects = subjectRes.data),
              (this.conditions = conditionRes.data),
              console.log(
                "chunk of responses",
                categoryRes,
                subjectRes,
                majorRes,
                conditionRes,
                cityRes, 
                this.cities
              );
          }
        )
      )
      .catch(err => console.log("error", err));
  }
};
</script>
<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

.btn_post {
  background-color: #ffbf00;
  color: white;
  font-weight: 800;
  border: none;
}

.btn_post:hover {
  background-color: #004fff;
}
.btn_post:focus {
  background-color: #ffbf00;
  color: white;
}

.btn_post:active {
  background-color: white;
}
.btn_post:visited {
  background-color: white;
}

.title {
  color: #004fff;
  font-weight: 600;
  float: left;
}
.jumbotron {
  background-color: whitesmoke;
}
.container {
  margin-bottom: 120px;
}
.custom-file-label {
  position: relative;
  display: -block;
  font-weight: bold;
  padding: 0.5em 1em;
  text-decoration: none;
  border-left: solid 4px #668ad8;
  border-right: solid 4px #668ad8;
  color: #004fff;
  padding: 0.5em 1em;
  height: 150px;
  background-image: url("../assets/plus.svg");
  background-size: 40px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: none;
  position: relative;
  display: -block;
  font-weight: bold;
  padding: 0.5em 1em;
  text-decoration: none;
  border-left: solid 4px #668ad8;
  border-right: solid 4px #668ad8;
  color: #004fff;
  padding: 0.5em 1em;
  height: 150px;
  background-image: url("../assets/plus.svg");
  background-size: 40px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
}
</style>
