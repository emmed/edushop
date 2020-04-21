<template>
  <div>
   
<nav class="navbar navbar-expand-md navbar-dark bg-blue flex-row">

        <a class="navbar-brand "> <b-img @click.prevent="$router.push({ name: 'homepage' })" 
        src="../assets/logos.png" fluid alt="Fluid image" width="160" 
        class="mr-4 img-fluid" type="button"></b-img></a>
<div class=" mr-auto">
 <b-button size="lg" class="btn_post_ad  " @click.prevent="$router.push({ name: 'post_an_ad' })" >
                <b-img class="mr-2 kl" src="../assets/post_an_ad.png" width="20"></b-img>Post an ad
              </b-button>
</div>
        <ul class="navbar-nav flex-row mr-lg-0">
            <li class="nav-item">
                 <a class="nav-link pr-2 h5" type="button" @click.prevent="$router.replace({ name: 'login' })">Log in</a>
            </li>
            <li class="nav-item">
                <a class="nav-link pr-2 h5" type="button" @click.prevent="$router.replace({ name: 'faq' })">FAQ</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link pr-2 h5" type="button"
                 >NL
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="">User</a>
                    <a class="dropdown-item" href="">Login</a>
                </div>
            </li>
        </ul>
        <button class="navbar-toggler ml-lg-0  my-3 p-1"   data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon   "></span>
        </button>
    </nav>
    <nav class="navbar navbar-expand-md  ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item px-2  h5  ">
                    <a class="nav-link" @click.prevent="$router.replace({ name: 'list' })" type="button">Books</a>
                </li>
                <li class="nav-item px-2 h5 ">
                    <a class="nav-link"  @click.prevent="$router.replace({ name: 'faq' }) " type="button">E-Books</a>
                </li>
                <li class="nav-item px-2 h5">
                    <a class="nav-link"  @click.prevent="$router.replace({ name: 'faq' })" type="button">Writing material</a>
                </li>
                <li class="nav-item px-2 h5">
                    <a class="nav-link"  @click.prevent="$router.replace({ name: 'faq' })" type="button">Others</a>
                </li>
              
            </ul>
            <div class=" my-2 my-lg-0 ">
              
                <b-button class="btn_package my-2 my-sm-0"   variant="outline-warning" size="lg" @click.prevent="$router.replace({ name: 'bookpackage' })" >Find your book package</b-button>
            </div>
        </div>
    </nav>


    
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},

  data() {
    return {};
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
.btn_package:hover{
  color: white;
}
.btn_package{
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