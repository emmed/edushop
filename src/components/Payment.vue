<template>
  <div>
    <div class="jumbotron">
      <!--UPLOAD-->
 
    <input type="file" @change="onFileSelected">

 
<b-button @click="onUpload">click</b-button>
    </div>
  </div>
</template>

<script>

import axios from "axios";



export default {
  name: "Payment",
  data() {
    return {
    image: null
    }; 
  }, 
  methods: {
    onFileSelected(event){
      this.image = event.target.files[0]
      console.log(event)
    },
    onUpload(){
      const fd = new FormData()
      fd.append('image', this.image, this.image.name)
      console.log(fd,"eeeeeeeeeeeeeee")
      axios.post('http://127.0.0.1:8000/image/', fd)
      .then(res => {
        console.log(res, "res")
      })
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
