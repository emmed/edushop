<template>
<div>
 <li class="nav-item dash">
                 <a  class="nav-link pr-2 h5 font-weight-bold" type="button" @click.prevent="$router.push({ name: 'useradmin' }).catch(err => {})" v-if="this.token!=null">Dasboard</a>
            </li>
          <li class="nav-item">
                 <a  class="nav-link pr-2 h5" type="button" @click.prevent="$router.push({ name: 'sdf' }).catch(err => {})" v-if="this.token!=null" v-on:click="logout()" >{{this.log_status}}</a>
            </li> 
            <li class="nav-item">
                 <a class="nav-link pr-2 h5" type="button" @click.prevent="$router.push({ name: 'sdf' }).catch(err => {})" v-if="this.token==null">{{this.log_status}}</a>
            </li>
</div>

</template>

<script>

var url_category = 'http://127.0.0.1:8000/category/'

export default {
  name: "Menu",
  components: {},
  props: [],
  data() { 
    return {
      categories:[],
      title: '',
      token: null,
      log_status: this.token?'log out':'log in',
    };

  }, 
  mounted() {
    this.$root.$on('logAndToken', (log_status, token)  => {
      this.token = token
      this.log_status = log_status
      console.log('message received from login + token' ,log_status, token);
    })
  },
  methods: {
   sendCategoryName(category_name){
   this.$root.$emit('message', category_name)

   },
  logout(){
                    localStorage.removeItem('logAndToken');
                    this.token = null;
                    this.log_status = "Log in"
                    this.$root.$emit('logAndToken', this.log_status, this.token)
            }
  },
    created() {
    axios.get(url_category).then(res => (this.categories = res.data))
    .catch(err => console.log("error", err));


    /*   To check if anything is coming trough, i console log the result:
           .then(res => console.log(res))
           My records were in the array 'results'
          */

    // get the Records form the API use Vue detected tool extention via chrome.
  }
};


 </script>