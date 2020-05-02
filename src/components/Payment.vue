<template>
    <div>

<div class="jumbotron">
    <h1>Payment</h1>
   
         <b-form @submit.prevent="register" v-if="token==null">
            <div class="for-pwd-htm">
              <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" type="text" class="input" required v-model="username">
              </div>
              <div class="group" :class="{error: validation.hasError('password_new')}">
                <label for="pass" class="label">Password</label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  v-model="password"
                  required
                  :state="input_validation"
                >
                <password v-model="password" :strength-meter-only="true"/>
                <div class="message pt-2">{{ validation.firstError('password_new') }}</div>
              </div>
              <b-form-invalid-feedback :state="input_validation" class="mb-4">
                Your password must be 6-12 characters long. contain letters and numbers, and must not
                contain spaces or emoji.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="input_validation" class="mb-4">Looks Great!</b-form-valid-feedback>
              <div class="group" :class="{error: validation.hasError('repeat')}">
                <label for="pass" class="label">Confrim Password</label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  v-model="repeat"
                  required
                  :state="input_validation"
                >
                <div class="message pt-2">{{ validation.firstError('repeat') }}</div>
              </div>

              <div class="group">
                <input type="submit" class="button" value="Sign up!">
              </div>
              <div class="hr"></div>
            </div>
          </b-form>
 </div>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
import Password from "vue-password-strength-meter";

export default {
name: "Payment",
components: { Password },
  data() {
    return {
      username_new: '',
      username: '',
      user_id: null,
      password_new: "",
      password: '',
      repeat: "",
      submitted: false,
      token: null,
      log_status: ""
    };
  },
 methods: {
    // login() {
    //   axios
    //     .post("http://127.0.0.1:8000/auth/", {
    //       username: this.username,
    //       password: this.password
    //     })
    //     .then(res => {
    //       this.token = res.data.token;
    //       this.log_status = "Log out";
    //       this.$root.$emit(
    //         "logAndToken",
    //         this.log_status,
    //         this.token,
    //         this.username,
    //         this.user_id
    //       );
    //       console.log(
    //         "Login data:",
    //         res,
    //         this.username,
    //         this.password,
    //         this.token,
    //         this.user_id
    //       );
    //       localStorage.setItem("logAndToken", this.token, this.username);
    //     });
    //   this.$router.push({ name: "homepage" }).catch(err => {
    //     localStorage.removeItem("logAndToken");
    //     console.log("error loginn", err);
    //   });
    // },
    register() {
      axios.post("http://127.0.0.1:8000/users/", {
          username:   this.username,
          password:   this.password,
        },)
        .then(res => {
           
          console.log("res after .then()",res.data)
           this.token = res.data.token;
          this.log_status = "Log out";
          this.$root.$emit(
            "logAndToken",
            this.log_status,
            this.token,
            this.username,
            this.user_id
          );
          console.log(
            "Login NEW::: user:",
            res.data,
             this.username,
             this.token,
             this.user_id
          );
          localStorage.setItem("logAndToken", this.token, this.username);
        })
      // this.$router.push({ name: "homepage" }).catch(err => {
      //   localStorage.removeItem("logAndToken");
      //   console.log("error loginn", err);
      // })
       
        .catch(err =>{ console.log(err)
        
            this.submitted = true;

        localStorage.removeItem("logAndToken");
        console.log("error loginn", err);
          console.log("res:::", this.password, this.username, "hallokes")
      //this.$router.push({ name: "useradmin" });
        });
        this.password_new = this.password
        this.username_new = this.username
    console.log("na de catch", this.password_new, this.username_new, "hallokes")

    },
    submit: function() {
      this.submitted = true;
      this.$validate().then(function(success) {
        if (success) {
          alert("Validation succeeded!");
        }
      });
    }
  },
  computed: {
    input_validation() {
      return this.password_new.length > 5 && this.password_new.length < 13;
    }
  },
  validators: {
    password: function(value) {
      return Validator.value(value)
        .required()
        .minLength(6);
    },
    "repeat, password": function(repeat, password_new) {
      if (this.submitted || this.validation.isTouched("repeat")) {
        return Validator.value(repeat)
          .required()
          .match(password_new);
      }
    }
  }
}
</script>

<style>

</style>
