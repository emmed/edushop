<template>
  <div id="app">
        <Menu/>
    <transition name="moveInUp">
      <router-view></router-view>
    </transition>
     <Footer/>
   </div>
</template>
<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
 


export default {
  name: "App",
  components: { Menu, Footer},
  data() {
    return {}
  }
};
</script>

<style>
#app {
  font-family: "canada-type-gibson", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  font-family: "roboto", sans-serif;
}
h1 h2 h3 h4 h5 {
  font-family: "lato", sans-serif;
}
.moveInUp-enter-active {
  animation: fadeIn 1.1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp 0.4s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-800px);
  }
}

body {
  
	margin:0;
	color:#edf3ff;
	background:#c8c8c8;
	background: url("./assets/background-image.jpg") fixed;
	background-size: cover;
	font:600 16px/18px 'Lato',sans-serif;
}
  
</style>
