<template>
 <div class="login-form">
          <b-form @submit.prevent="login" v-if="token==null">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" type="text" class="input" required v-model="username">
              </div>
              <div class="group">
                <label for="pass" class="label">Password</label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  v-model="password"
                  required>
              </div>


</template>


<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      username: '',
            password: '',
            repeat: '',
      submitted: false,
      token: null,
      log_status: ''
    }
  }, 
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/auth/", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.token = res.data.token;
          this.log_status = "Log out";
          this.$root.$emit("logAndToken", this.log_status, this.token);
          console.log(
            "Login data:",
            res,
            this.username,
            this.password,
            this.token
          );
          localStorage.setItem("logAndToken", this.token);
          localStorage.setItem("user_id", this.user_id);
        });
        this.$router.push({ name: "homepage" }).catch(err => {
        localStorage.removeItem("logAndToken");
        localStorage.removeItem("user_id");
        console.log("error loginn", err);

      });
    },
    register() {
      console.log(this.username);
      axios
        .post("http://127.0.0.1:8000/auth/", {
          username: this.username,
          password: this.password
        })
        .then(res => console.log(res))
                .catch(err => console.log(err));
this.submitted = true;
        this.$validate()
          .then(function(success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      this.$router.push({ name: "useradmin" });
        },
       submit: function () {
        this.submitted = true;
        this.$validate()
          .then(function(success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      }
      }
      }
</script>