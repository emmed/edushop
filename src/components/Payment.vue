<template>
  <div>

<div class="jumbotron">


<b-input v-model="title" type="text"></b-input>
<b-input v-model="counter" type="text"></b-input>

<b-button v-on:click="onSubmit" type=button variant="danger">submit</b-button>


  </div>
  </div>
</template>

<script>

//import axios from "axios";



export default {
  name: "Payment",
  data() {
    return {
      title: '',
      counter: '',
    }; 
  }, 
  methods: {
 onSubmit(){
   this.$root.$emit("random",this.title,this.counter)
   console.log("random", this.title, "counter=", this.counter)
 }
  }
  
  }




</script>

<style>

 .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
