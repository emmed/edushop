<template>
  <div>

   <div class="container">
<article>
    <div class="container-fluid">
    
        <div class="row">
            <div class="col-8 ">
                <div class="content-section">
                  <h2 class="blauke-t pt-4">Frequently asked questions</h2>
  <div class="d-flex justify-content-center h-100 my-5 ">
        <div class="searchbar">
          <input class="search_input " type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
    </div>
    

  <div class="card">
  <button type="button" class="btn btn-primary mt-4" data-toggle="collapse" data-target="#demo">How to buy products</button>
  <div id="demo" class="collapse mt-3">
      <p class="text-left text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias ea sit iste consectetur eos quibusdam nulla non explicabo labore
           officiis odio reiciendis ratione velit minima, placeat ut, culpa laboriosam.</p>
   
  </div>
   </div>


  <div class="card">
  <button type="button" class="btn btn-primary mt-4" data-toggle="collapse" data-target="#demo3">How to sell products</button>
  <div id="demo3" class="collapse mt-3">
      <p class="text-left text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias ea sit iste consectetur eos quibusdam nulla non explicabo labore
           officiis odio reiciendis ratione velit minima, placeat ut, culpa laboriosam.</p>
   
  </div>
   </div>


    <div class="card">
    <button type="button" class="btn btn-primary mt-4" data-toggle="collapse" data-target="#demo2">Be careful when u buy a product.</button>
  <div id="demo2" class="collapse mt-3">
      <p class="text-left text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe ex magni, aperiam porro rem nemo nostrum ratione adipisci incidunt repellendus do
        lor! Voluptatibus ipsa, architecto exercitationem iure facere a dolores.</p>
  
  </div>
  </div>

            </div>
            </div>

            <div class="col-3 has-4-items">
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
export default {
name: "Faq"
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

