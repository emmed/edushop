<template>
  <div>
 <!------ Include the above in your HEAD tag ---------->

  <div class="login-wrap">
	<div class="login-html ">
<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Log in</label>
		<input id="tab-2" type="radio" name="tab" class="for-pwd"><label for="tab-2" class="tab">Sign up</label>
		<div class="login-form" @submit="onSubmit" v-if="show">
			<!-- log in -->
			<div class="sign-in-htm ">
				<div class="group">
					<label for="user" class="label">Username or Email</label>
					<input id="user" type="text" class="input"
					required v-model="form.email">
				</div>
				<div class="group" @submit.stop.prevent>
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password1"
					v-model="form.password1"
          required
          :state="input_validation">
				</div>
         <b-form-invalid-feedback :state="input_validation" class="mb-4">
 Your password must be 5-12 characters long. contain letters and numbers, and must not
      contain spaces or emoji.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="input_validation" class="mb-4">
        Looks Great!
      </b-form-valid-feedback>

				<div class="group">
					<input type="submit" class="button" value="Sign In">
				</div>
				<div class="hr"></div>
					<div class="group">
						<a href="#" class="label2" value="Reset Password" >Forgot Password</a></div>
			</div>
<!-- sign up -->
			<div class="for-pwd-htm">
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="user" class="label">Name</label>
					<input id="user" type="text" class="input">
				</div>
			<div class="group" @submit.stop.prevent>
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password1"
					v-model="form.password1"
          required
          :state="input_validation">
				</div>
         <b-form-invalid-feedback :state="input_validation" class="mb-4">
 Your password must be 5-12 characters long. contain letters and numbers, and must not
      contain spaces or emoji.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="input_validation" class="mb-4">
        Looks Great!
      </b-form-valid-feedback>
	<div class="group" @submit.stop.prevent>
					<label for="pass" class="label"> Confrim Password</label>
					<input id="pass" type="password" class="input" data-type="password2"
					v-model="form.password2"
          required
          :state="input_validation">
				</div>

				<div class="group">
					<input type="submit" class="button" value="Sign up!">
				</div>
				<div class="hr">
				</div>
			</div>
		</div>
	</div>
</div>

   </div>
</template>

<script>
  export default {
      name: "login",
 
    data() {
      return {
        form: {
          email: '',
          password1: '',
          password2: '',
        },
         show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password1 = ''
        this.form.password2 = ''
         // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed: {
      input_validation() {
        return this.form.password1.length > 4 && this.form.password2.length < 13
      }
  }
}

</script>

<style>

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
