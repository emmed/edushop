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
              <b-form-select v-model="form.major">
                <option disabled value>Select major</option>
                <option v-bind:key="major.id" v-for="major in majors">{{major.major}}</option>
              </b-form-select>
              <span>Selected: {{ form.major }}</span>
            </b-col>

            <b-col cols="5 m-3">
              <b-form-select v-model="form.category">
                <option disabled value>Select category</option>
                <option v-bind:key="category.id" v-for="category in categories">{{category.name}}</option>
              </b-form-select>
              <span>Selected: {{ form.category }}</span>
            </b-col>

            <b-col cols="5 m-3">
              <b-form-select v-model="form.subject">
                <option disabled value>Select subject</option>
                <option v-bind:key="subject.id" v-for="subject in subjects">{{subject.subject}}</option>
              </b-form-select>
              <span>Selected: {{ form.subject }}</span>
            </b-col>

            <!-- <b-col cols="5 m-3">
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select id="input-3" v-model="form.school" :options="school" required></b-form-select>
              </b-form-group>
            </b-col>-->

            <b-col cols="5 m-3">
              <div class="form-group">
                <select
                  class="selectpicker form-control"
                  v-model="form.school"
                  :options="school"
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
              <b-form-select v-model="form.condition">
                <option disabled value>Select condition</option>
                <option
                  v-bind:key="condition.id"
                  v-for="condition in conditions"
                >{{condition.condition}}</option>
              </b-form-select>
              <span>Selected: {{ form.condition }}</span>
            </b-col>

            <b-col cols="5 m-3">
              <b-form-select v-model="form.location">
                <option disabled value>Select location</option>
                <option
                  v-bind:key="location.id"
                  v-for="location in locations"
                  v-on:click="saveLocation()"
                >{{location.location}}</option>
              </b-form-select>
              <span>
                <small>Selected: {{ form.location }}</small>
              </span>
            </b-col>

            <b-col cols="5 m-3">
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
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
        <b-button @click="onReset()" type="reset" variant="danger">Reset</b-button>
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
const url_location = "http://127.0.0.1:8000/location/";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        price: "",
        category: null,
        school: null,
        subject: null,
        major: null,
        condition: null,
        location: null,
        image: null
      },
      categories: [{ text: "Select category", value: null }],
      school: [],
      majors: [{ text: "Select major", value: null }],
      subjects: [{ text: "Select subject", value: null }],
      conditions: [{ text: "Select condition", value: null }],
      locations: [{ text: "Select location", value: null }],
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
      fd.append('category', this.form.category)
      fd.append('condition', this.form.condition)
      fd.append('major', this.form.major)
      fd.append('location', this.form.location)
      fd.append('subject', this.form.subject)
      fd.append('title', this.form.title)
      fd.append('description', this.form.description)
      fd.append('price', this.form.price)
      fd.append('image', this.form.image)
      fd.append('school', this.form.school)
      fd.append('user', this.userId)

      console.log(this.form.image)
      console.log(this.form.image.name)
      console.log(fd,"fd")
      axios.post("http://127.0.0.1:8000/product/", fd

        )
        .then(response => {
          // this.$router.push('/post_and_ad');
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
      this.form.location = null;
      this.form.imgae = null;
      this.form.price = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
        axios.get(url_category),
        axios.get(url_subject),
        axios.get(url_condition),
        axios.get(url_location)
      ])
      .then(
        axios.spread(
          (majorRes, categoryRes, subjectRes, conditionRes, locationRes) => {
            (this.majors = majorRes.data),
              (this.categories = categoryRes.data),
              (this.subjects = subjectRes.data),
              (this.conditions = conditionRes.data),
              (this.locations = locationRes.data),
              console.log(
                "chunk of responses",
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
