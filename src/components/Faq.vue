<template>
  <div>

   <div class="container">
<article>
    <div class="container-fluid">
    
        <div class="row">
            <div class="col-8 ">
                <div class="content-section">
                  <h2 class="blauke-t pt-4">Frequently asked questions</h2>
                  <!-- search bar -->
  <div class="d-flex justify-content-center h-100 my-5 ">
        <div class="searchbar">
          <input class="search_input " type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
    </div>
                  <!-- end search bar -->

  <div class="card" v-bind:key="faq.id"
          v-for="(faq, index) in faqs">
  <button :data-target="'#demo' + index"  class="btn btn-primary mt-4 font-weight-bold"
   data-toggle="collapse">{{faq.question}}</button>
  <div v-bind:id="['demo'+index]" class="collapse mt-3">
      <p class="text-left text-muted">{{faq.answer}}</p>
  </div>
</div>

</div>
</div>
            <div class="col-3 has-4-items" >
                <div class="sidebar-item ">
                    <div class="make-me-sticky ">
                        <h4 class=" font-weight-bold">Didn't find the anwser?</h4>
                        <p>You can always search questions Or contact us</p>
                        <hr>
                        <b-button  variant="primary">Contact</b-button>
                    </div>
                </div>
            </div>
       </div>
    </div>
</article>
</div>

   </div>
</template>

<script>

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const url_faq = 'http://127.0.0.1:8000/faq/'

export default {
name: "Faq",
 data(){
    return{
  faqs:[],
  }
  },
  methods: {
    },
  created(){
     axios
      .get(url_faq)
      .then(res => (this.faqs = res.data), console.log("FAQ", this.faqs))
      .catch(err => console.log("error", err));
  }
}
</script>

<style scoped >
 .blauke-t{
  color: #004fff;
  font-weight: 600;

}
 
.content-section {
  min-height: 1000px;
}

.sidebar-section {
  position: absolute;
  height: 100%;
  width: 100%;
}

.sidebar-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.has-4-items 
.sidebar-item {
  height: 100%;
}

.make-me-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 0 15px;
}
 
article {
  background: white;
  border-radius: 12px;
  padding: 25px 0 0 25px;

}

.title-section, .content-section, .sidebar-section {
  background: #fff;
}

.title-section {
  text-align: center;
  padding: 50px 15px;
  margin-bottom: 30px;
}

.content-section h2 {
  text-align: center;
  margin: 0;
  padding-top: 200px;
}

.sidebar-item {
  text-align: left;
 }
.sidebar-item  {
  background: #ffbf00;
  min-width: 100%;
   margin: 0 auto;
  padding: 10px 0 100px;
  border-bottom: solid 1px #fff;
}
 
 
 .container{
   margin-bottom: 0;
 }
</style> 

