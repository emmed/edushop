<template>
  <div>
    <div class="jumbotron">
      <b-button
        class="btn_buy mr-3 pull-left"
        variant="warning"
        size="lg"
        @click.prevent="$router.go(-1)"
      >
        <i class="fa fa-chevron-left"></i>
      </b-button>

      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <h4 class="text-left blauke-t mb-3">{{userName}} information</h4>

            <p class="text-left">{{emailSeller}}</p>
            <p class="text-left">Student Ehb</p>
            <p class="text-left">Show other ads by {{userName}}</p>
          </div>
        </div>
        <div class="col-md-9">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-col cols="8" :class="{error: validation.hasError('email')}">
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="email"
                  required
                  placeholder="Your E-mail address"
                ></b-form-input>
                <div class="message my-2">{{ validation.firstError('email') }}</div>
              </b-form-group>
            </b-col>

            <b-col cols="8">
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="subject" required placeholder="Subject"></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="8">
              <b-form-textarea
                rows="6"
                id="textarea-default"
                placeholder="Description"
                v-model="description"
                required
              ></b-form-textarea>
            </b-col>
            <b-form-group id="input-group-2" label-for="input-2">
              <div class="col-sm-offset-2 col-sm-10">
                <b-button type="submit" class="pull-left mt-4" variant="warning" size="lg">Submit</b-button>
              </div>
            </b-form-group>
          </b-form>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
const url_user = 'http://127.0.0.1:8000/users/'
export default {
  name: "ContactSeller",
  data() {
    return {
      userName: "",
      emailSeller: "", 
      email:"",
      subject: "",
      descripiton: "",
      show: true,
      showAlert: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.subject = "";
      this.from.descripiton = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  created(){
    axios
        .get(url_user)
        .then(res => (
          (this.user = res.data),console.log("user", this.user, "res.data", res.data)
          ), console.log("user na", this.user)
      )
  },
  validators: {
    email: function(value) {
      return Validator.value(value)
        .required()
        .email();
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 4%;
  height: 400px;
}
.blauke-t {
  color: #004fff;
  font-weight: 600;
}
.col-md-3 {
  background: #ffbf00;
  padding: 4%;
  border-radius: 0.5rem;
}
.contact-info {
  margin-top: 10%;
}
.contact-info img {
  margin-bottom: 15%;
}
.contact-info h2 {
  margin-bottom: 10%;
}
.col-md-9 {
  background: #fff;
  padding: 3%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.contact-form label {
  font-weight: 600;
}
.contact-form button {
  font-weight: 600;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>
