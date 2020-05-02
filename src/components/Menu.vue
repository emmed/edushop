<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-blue flex-row">
      <a class="navbar-brand">
        <b-img
          @click.prevent="$router.push({ name: 'homepage' })"
          src="../assets/logos.png"
          fluid
          alt="Fluid image"
          width="160"
          class="mr-4 img-fluid"
          type="button"
        ></b-img>
      </a>
      <div class="mr-auto">
        <b-button
          size="lg"
          class="btn_post_ad"
          @click.prevent="$router.push({ name: 'post_an_ad' })"
        >
          <b-img class="mr-2 kl" src="../assets/post_an_ad.png" width="20"></b-img>Post an ad
        </b-button>
      </div>
      <ul class="navbar-nav flex-row mr-lg-0">
        <li class="nav-item">
          <a class="nav-link h5 mr-0" v-if="this.token!=null">
            <small>{{this.username}}</small>,
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link ml-0 pr-2 h5 font-weight-bold"
            type="button"
            @click.prevent="$router.push({ name: 'useradmin' }).catch(err => {})"
            v-if="this.token!=null"
          >Dasboard</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link pr-2 h5"
            type="button"
            @click.prevent="$router.push({ name: 'login' }).catch(err => {})"
            v-if="this.token!=null"
            v-on:click="logout()"
          >{{this.log_status}}</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link pr-2 h5"
            type="button"
            @click.prevent="$router.push({ name: 'login' }).catch(err => {})"
            v-if="this.token==null"
          >{{this.log_status}}</a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link pr-2 h5" type="button">NL</a>
        </li>
      </ul>
      <button
        class="navbar-toggler ml-lg-0 my-3 p-1"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <nav class="navbar navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item px-2 h5" v-on:click="sendCategoryName(category.name)" v-bind:key="category.id" v-for="category in categories">
            <a
              class="nav-link" 
              @click.prevent="$router.push({ name: 'list' }).catch(err => {})"
              type="button"
            >{{category.name}}</a>
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <b-button
            class="btn_package my-2 my-sm-0"
            variant="outline-warning"
            size="lg"
            @click.prevent="$router.replace({ name: 'bookpackage' })"
          >Find your book package</b-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
var url_category = "http://127.0.0.1:8000/category/";

export default {
  name: "Menu",
  components: {},
  props: [],
  data() {
    return {
      categories: [],
      title: "",
      token: null,
      log_status: this.token ? "log out" : "log in",
      username: "",
      user_id: null,
    };
  },
  mounted() {
    this.$root.$on("logAndToken", (log_status, token, username, user_id) => {
      this.token = token;
      this.log_status = log_status;
      this.username = username;
      this.user_id = user_id;
      console.log(
        "message received from login + token + username + user_id",
        log_status,
        token,
        username,
        user_id
      );
    });
  },
  methods: {
    sendCategoryName(category_name) {
      console.log("nameee",category_name)
      this.$root.$emit("message", category_name);
    },
    logout() {
      localStorage.removeItem("logAndToken");
      this.token = null;
      this.log_status = "Log in";
      this.$root.$emit("logAndToken", this.log_status, this.token);
    }
  },
  created() {
    axios
      .get(url_category)
      .then(res => (this.categories = res.data))
      .catch(err => console.log("error", err));
  }
};
</script>

<style >
.btn_post_ad {
  background-color: white;
  color: #004fff;
  font-weight: 800;
}

.btn_post_ad:hover {
  background-color: #ffbf00;
}

.btn_post_ad:active {
  background-color: white;
}
.btn_post_ad:visited {
  background-color: white;
}

.navbar-expand-md .navbar-nav .dropdown-menu {
  position: absolute !important;
}
.btn_package:hover {
  color: white;
}
.btn_package {
  font-weight: 600;
}

.navbar {
  background-color: #004fff;
  height: auto;
}

.navbar-brand {
  padding: 0 15px;
  height: 120px;
  line-height: 80px;
}
.navbar-toggle {
  /* (80px - button height 34px) / 2 = 23px */
  margin-top: 86px;
  padding: 9px 10px !important;
}
@media (min-width: 768px) {
  .navbar-nav > li > a {
    /* (80px - line-height of 27px) / 2 = 26.5px */
    padding-top: 26.5px;
    padding-bottom: 26.5px;
    line-height: 27px;
  }
}

.navbar .navbar-brand {
  color: #ffbf00;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #ffffff;
}
.navbar .navbar-text {
  color: #ffbf00;
  font-family: "lato", sans-serif;
}
.navbar .navbar-text a {
  color: #ffffff;
  font-family: "lato", sans-serif;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #ffffff;
  font-family: "lato", sans-serif;
}
.navbar .navbar-nav .nav-link {
  color: #ffbf00;
  border-radius: 0.25rem;
  margin: 0 0.25em;
  font-family: "lato", sans-serif;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #ffffff;
}
.navbar .navbar-nav .dropdown-menu {
  background-color: #004fff;
  border-color: #004fff;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item {
  color: #ffbf00;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,
.navbar .navbar-nav .dropdown-menu .dropdown-item.active {
  color: #ffffff;
  background-color: #004fff;
}
.navbar .navbar-nav .dropdown-menu .dropdown-divider {
  border-top-color: #004fff;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #ffffff;
  background-color: #004fff;
}
.navbar .navbar-toggle {
  border-color: #004fff;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #004fff;
}
.navbar .navbar-toggle .navbar-toggler-icon {
  color: #ffbf00;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ffbf00;
}
.navbar .navbar-link {
  color: #ffbf00;
}
.navbar .navbar-link:hover {
  color: #ffffff;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffbf00;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #004fff;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffbf00;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #004fff;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffbf00;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #004fff;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffbf00;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #004fff;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ffbf00;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #ffffff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #ffffff;
  background-color: #004fff;
}
</style>