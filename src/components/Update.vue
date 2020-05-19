<template>
  <div>
    <div class="jumbotron mb-0">
      <!-- <div v-if="this.token!=null"> -->
      <b-form @submit="onSubmit" v-if="show">
        <b-alert
          v-model="showDismissibleAlert"
          variant="info"
          dismissible
        >Successfully updated your ad</b-alert>

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
           <multiselect v-model="form.major" :options="majors2"

              :show-labels="false"
              placeholder="Select your Major" :searchable="true" 
              :allow-empty="true">
                </multiselect>
            </b-col>

            <b-col cols="5 m-3">
             <multiselect v-model="form.category" :options="categories2"
              :show-labels="false"
              placeholder="Select your Category" :searchable="false" 
              :allow-empty="true">
                </multiselect>
            </b-col>

            <b-col cols="5 m-3">
                   <multiselect v-model="form.subject" :options="subjects2"
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

            <b-col cols="5 m-3">
  <multiselect v-model="form.condition" :options="conditions2"
               :allow-empty="true"
               :show-labels="false"
               :searchable="false" 
               placeholder="Select your Condition" 

             >
                </multiselect>
{{form.condition.condition}}

            <!-- <multiselect v-model="form.condition" :options="conditions"
              track-by="condition" 
              label="condition"
              :show-labels="false"
              placeholder="Select your Condition" 
              :searchable="false" 
              :allow-empty="true"
              >
                </multiselect> -->
            </b-col>

            <b-col cols="5 m-3">
    <multiselect v-model="form.city" :options="cities2"
               placeholder="Select your City" 
               :show-labels="false"
               >
              </multiselect>
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

        <b-button class="btn_post_update" @click="showDismissibleAlert=true" type="submit" variant="primary">Update</b-button>
      
      </b-form>
     

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
  name: "update",
  data() {
    return {
      form: {
        
        response: [],
        user: null,
        title: "",
        description: "",
        price: "",
        category: null,
        school: null,
        subject: null,
        major: null,
        condition: null,
        city: null,
        image: null,
      },
      product_id: this.$route.params.product_id,
      product_index: this.$route.params.index,
      product: [],
      categories: [],
      categories2: [],
      school: [],
      majors: [],
      majors2: [],
      subjects: [],
      subjects2: [],
      conditions: [],
      conditions2:[],
      cities: [],
      cities2: [],
      show: true,
      showDismissibleAlert: false,
      token: null,
      log_status: null,
      username: null,
      user: null,
    };
  },
  mounted() {
    this.$root.$on("logAndToken", (log_status, token, username, user) => {
      this.token = token;
      this.log_status = log_status;
      this.username = username;
      this.user = user;
      console.log(
        "message received from login + token + username + user_id",
        log_status,
        token,
        username,
        user
      );
    });


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
      fd.append('city', this.form.city)
      fd.append('subject', this.form.subject)
      fd.append('title', this.form.title)
      fd.append('description', this.form.description)
      fd.append('price', this.form.price)
      fd.append('image', this.form.image)
      fd.append('school', this.form.school)
      fd.append('user', this.form.user)
   
      console.log(fd,"fd")
      axios
        .put("http://127.0.0.1:8000/product/" + this.product_id + "/" ,fd
        )
        .then(response => {
          // this.$router.push('/post_and_ad');
          console.log("response saved", response);
          console.log("id", this.form.user)
        })
        .catch(response => {
          console.log("catch response", response);
        });
      evt.preventDefault();
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
 
    // dynamically rendering selects
    axios
      .all([
        axios.get(url_major),
        axios.get(url_category),
        axios.get(url_subject),
        axios.get(url_condition),
        axios.get(url_city),
        axios.get("http://127.0.0.1:8000/product/" + this.product_id)
      ])
      .then(
        axios.spread(
          (
            majorRes,
            categoryRes,
            subjectRes,
            conditionRes,
            cityRes,
            res
          ) => {
            (this.majors = majorRes.data),
              (this.categories = categoryRes.data),
              (this.subjects = subjectRes.data),
              (this.conditions = conditionRes.data),
              (this.cities = cityRes.data),
              [
                (this.product = res.data),
                console.log(res.data, "res"),
                (this.form.category = this.product.category),
                (this.form.condition = this.product.condition),
                (this.form.major = this.product.major),
                (this.form.city = this.product.city),
                (this.form.subject = this.product.subject),
                (this.form.title = this.product.title),
                (this.form.description = this.product.description),
                (this.form.price = this.product.price),
                (this.form.school = this.product.school),
                (this.form.user = this.product.user),
                console.log(this.product, "product"),
                console.log("category: ",this.form.category),
                console.log("subject: ", this.form.subject),
                console.log("cities: ", this.form.city)

              ],
              this.majors.forEach(element =>{
                this.majors2.push(element.major)
              }),
              this.categories.forEach(element =>{
                this.categories2.push(element.name)
              }),
                this.subjects.forEach(element =>{
                this.subjects2.push(element.subject)
              }),
                this.conditions.forEach(element =>{
                this.conditions2.push(element.condition)
          
              }),
                this.cities.forEach(element =>{
                this.cities2.push(element.name)
              }),
              console.log(
                "chunk of responses",
                categoryRes,
                subjectRes,
                majorRes,
                conditionRes,
                cityRes
              );
          }
        )
      )
      .catch(err => console.log("error", err));
  }
};
</script>

<style>
.btn_post_update {
  background-color: #ffbf00;
  color: white;
  font-weight: 800;
  border: none;
}

.btn_post_update:hover {
  background-color: rgb(28, 199, 13);
}
.btn_post_update:focus {
  background-color: #ffbf00;
  color: white;
}

.btn_post_update:active {
  background-color: white;
}
.btn_post_update:visited {
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
