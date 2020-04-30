<template>
  <div>
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
        <label for="tab-1" class="tab">Log in</label>
        <input id="tab-2" type="radio" name="tab" class="for-pwd">
        <label for="tab-2" class="tab">Sign up</label>

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
                  required
                >
              </div>
              <div class="group">
                <input type="submit" class="button" value="Log in">
              </div>
              <div class="hr"></div>
              <div class="group">
                <a href="#" class="label2" value="Reset Password">Forgot Password</a>
              </div>
            </div>
          </b-form>
        
        <!-- end form -->

        <!-- sign up -->
       
          <b-form @submit.prevent="register" v-if="token==null">
            <div class="for-pwd-htm">
              <div class="group" >
                <label for="user" class="label">Username</label>
                <input id="user" type="text" class="input">
              </div>
              <div class="group" :class="{error: validation.hasError('password')}">
                <label for="pass" class="label">Password</label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  v-model=" password"
                  required
                  :state="input_validation"
                >
                 <div class="message">{{ validation.firstError('password') }}</div>
              </div>
              <b-form-invalid-feedback :state="input_validation" class="mb-4">
                Your password must be 5-12 characters long. contain letters and numbers, and must not
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
                    <div class="message">{{ validation.firstError('repeat') }}</div>
              </div>

              <div class="group">
                <input type="submit" class="button" value="Sign up!">
              </div>
              <div class="hr"></div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
  import Vue from 'vue';
  import SimpleVueValidation from 'simple-vue-validator';
  const Validator = SimpleVueValidation.Validator;

  Vue.use(SimpleVueValidation);

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      repeat: "",
      submitted: false,
      token: null,
      log_status: ""
    };
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
          this.$root.$emit("logAndToken", this.log_status, this.token, this.username);
          console.log(
            "Login data:",
            res,
            this.username,
            this.password,
            this.token
          );
          localStorage.setItem("logAndToken", this.token, this.username);
        });
      this.$router.push({ name: "homepage" }).catch(err => {
        localStorage.removeItem("logAndToken");
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
      this.$validate().then(function(success) {
        if (success) {
          alert("Validation succeeded!");
        }
      });
      this.$router.push({ name: "useradmin" });
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
      return this.password.length > 4 && this.password.length < 13;
    }
  },validators: {
      password: function (value) {
        return Validator.value(value).required().minLength(6);
      },
      'repeat, password': function (repeat, password) {
        if (this.submitted || this.validation.isTouched('repeat')) {
          return Validator.value(repeat).required().match(password);
        }
      }
    },
};
</script>

<style>
.message{
  color: red;
}

:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
	width: 100%;
	margin:auto;
	max-width:510px;
	min-height:610px;
	position:relative;
	background: no-repeat center;
	background-size: cover;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgba(0, 0, 0, 0.808);
}
.login-html .sign-in-htm,
.login-html .for-pwd-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	-webkit-transform:rotateY(180deg);
	transform:rotateY(180deg);
	-webkit-backface-visibility:hidden;
	backface-visibility:hidden;
	-webkit-transition:all .4s linear;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .for-pwd,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
  color: rgba(159, 165, 159, 0.801);
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}


.login-html .sign-in:checked + .tab,
.login-html .for-pwd:checked + .tab{
	color:#fff;
	border-color:#ffbf00;
}
.login-form{
	min-height:345px;
	position:relative;
	-webkit-perspective:1000px;
	perspective:1000px;
	-webkit-transform-style:preserve-3d;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:8px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
  -webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	font-size:12px;
}
.login-form .group .label2{
	color:rgb(223, 223, 223);
	font-size:18px;
}
.login-form .group .button{
	background:#ffbf00;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	-webkit-transition:all .2s ease-in-out 0s;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	-webkit-transform:scale(0) rotate(0);
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	-webkit-transform:scale(0) rotate(0);
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#004fff;
}
.login-form .group .check:checked + label .icon:before{
	-webkit-transform:scale(1) rotate(45deg);
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	-webkit-transform:scale(1) rotate(-45deg);
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .for-pwd + .tab + .login-form .sign-in-htm{
	-webkit-transform:rotate(0);
	transform:rotate(0);
}
.login-html .for-pwd:checked + .tab + .login-form .for-pwd-htm{
	-webkit-transform:rotate(0);
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
 
</style> 
