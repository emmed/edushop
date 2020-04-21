<template>
  <div>

   <div class="jumbotron">
     <h1>sdf</h1>
<p>{{lists}}</p>

  <p>{{lists[1].title}}</p><br>
  <p>{{lists[1].url}}</p> 
  <p>{{lists[1].id}}</p> 
  <p>{{lists[1].description}}</p> 
  <p>{{lists[0].price}}</p> 
  <p>{{lists[1].category}}</p> 
  <p>{{lists[0].image}}</p> 
  <hr>

  <div>
    <p>hallog</p>
    <p v-bind:key="list.id" v-for="list in lists">
    {{list.url}} <br> 
    {{list.title}}
    
    </p>
   
</div>

   </div>

   </div>
</template>

<script>
import axios from "axios";

var url = 'http://localhost:8000/product/'
  export default {
      name: "login",
      props: ['lists'],
    data() {
      return {
        url: '',
        title: '',
        description: '',
        category: null,

         show: true
      }
    },mounted(){
    this.getAll();
  },
    methods: {
       getAll(){
      axios.get(url).then(res => this.lists = res.data).catch(err => console.log(err));
      console.log(this.lists);
  },
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
    },created(){
        this.getAll()
    },
    computed: {
      input_validation() {
        return this.form.password1.length > 4 && this.form.password2.length < 13
      }
  }
}

</script>

<style >
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
  background: #ffffff;
  border-radius: 12px;
  padding: 25px 0;
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
 
 
 
</style> 
