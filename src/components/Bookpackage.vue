<template>
    <div>


<div class="jumbotron hk p-4 mb-0">
    <div class="h2 blauke-t mb-5">Find the exact school material for your subject!</div>
    <div class="row">
        <div class="col-sm-3 col-md-3">
            
 
            <div class="panel panel-default"><div class="panel-heading">
					<h5 class="panel-title blauke">Find your bookpackage</h5>
</div>

 <b-col cols=" m-3">
      
      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.school"
          :options="school"
          required
        ></b-form-select>
      </b-form-group>

      </b-col>


    <b-col cols=" m-3">
      
      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.major"
          :options="major"
          required
        ></b-form-select>
      </b-form-group>
      
      </b-col>
    <b-col cols=" m-3">
      
      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.category"
          :options="category"
          required
        ></b-form-select>
      </b-form-group>

      </b-col>

    <b-col cols=" m-3">
      
      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.subject"
          :options="subject"
          required
        ></b-form-select>
      </b-form-group>
      
      </b-col><div class="group">
 <b-button class="btn_find" size="lg" variant="warning">Find</b-button>
 </div>
				<div class="hr">
				</div>


</div>
            
        </div>
        <div class="col-sm-9 col-md-9">
        
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title mb-4 blauke">Dashboard</h3>
                 
                </div>                    
                   
    <b-card img-src="../assets/stock-image.jpg" img-alt="Card image" img-left class="mb-3" v-for="n in 3" :key="n.id" >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
                 
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
 
export default {
  name: "Bookpackage",
  components: {},
data() {
      return {
        form: {
          title: '',
          category: null,
          school: null,
          major: null,
          subject: null,
          condition: null,
          location: null,
          file: null,
          descripiton: '',
          price: null
},
        category: [{ text: 'Select category', value: null }, 'Books', 'E-books', 'Writing material'],
        school: [{ text: 'Select school', value: null }, 'KUL', 'Erasmushogeschool - Ehb', 'VUB'],
        major: [{ text: 'Select major', value: null }, 'IT', 'Multimedia', 'Marketing'],
        subject: [{ text: 'Select subject', value: null }, 'Wiskunde', 'Algoritmes', 'Analyses'],
        condition: [{ text: 'Select condition', value: null }, 'New', 'Second hand | Used'],
        location: [{ text: 'Select location', value: null }, 'Brussel', 'Leuven', 'Gent', 'Antwerpen'],
        show: true
      }
  }
}
</script>

<style>
 
#accordion .glyphicon {

margin-right:10px;

}
.blauke{
  color: #004fff;
  font-weight: 400;
  
}
.blauke-t{
  color: #004fff;
  font-weight: 600;

}
.btn_find:hover{
  color: white;
}
.btn_find{
font-weight: 600;
}
  


.clickable{
    cursor: pointer;   
}
.jumbotron {
    background-color:rgba(255, 254, 254);
    border-radius: 0;
}
.panel-heading span {
    margin-top: -20px;
	font-size: 15px;
}
</style>
