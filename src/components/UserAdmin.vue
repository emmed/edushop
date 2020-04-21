<template>
    <div>


 
    <div class="jumbotron">
        <h3 class="display-4 py-4">Admin dashboard</h3>  
        
      
           <b-row class="mb-5 justify-content-center">

            <b-col cols="3" >
    <b-card class="text-center cardss" @click.prevent="$router.replace({ name: 'useradmin_placed_ads' })" type="button">
        <h2 class="blauke-t  display-4">45</h2>
        <b-card-text class="blauke-t">Placed ads</b-card-text>
      </b-card>
            </b-col>


            <b-col cols="3" >
    <b-card class="text-center cardss"  @click.prevent="$router.replace({ name: 'useradmin_bought_ads' })" type="button">
        <h2 class="blauke-t display-4">3</h2>
        <b-card-text class="blauke-t">Bought ads</b-card-text>
      </b-card>
            </b-col>

            <b-col cols="3" >
    <b-card class="text-center cardss" @click.prevent="$router.replace({ name: 'useradmin_pending_ads' })" type="button">
         <h2 class="blauke-t display-4">12</h2>
        <b-card-text class="blauke-t">Pending ads</b-card-text>
       </b-card>
             </b-col>
            
            
            
            </b-row>
       <h4 class="pull-left blauke-t my-5">Last 3 ads</h4>
        <table id="cart" class="table table-hover table-condensed" style="background-color: gainsboro;">
            <thead class="thead-dark">
                <tr>
                    <th style="width:50%" class="h4"><strong>Posts</strong></th>
                    <th style="width:10%" class="h4"><strong>Date</strong></th>
                    <th style="width:8%"></th>
                    <th style="width:22%" class="text-center h4"><strong>Status</strong></th>
                    <th style="width:10%"></th>
                </tr>
            </thead>
 
            <tbody>
                <tr v-for="n in 3" :key="n.id">
                    <td data-th="Product">
                        <div class="row" >
                             <div class="col-sm-9">
                                <h4 class="blauke-t " @click.prevent="$router.replace({ name: 'details' })" type="button"> Book Python </h4>
                                <p class=""> Lorem, ipsum dolor sit amet consectetur adipisicing !</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">€ ></td>
                    <td data-th="Quantity">
                    </td>
                    <td data-th="Subtotal" class="text-center">€ ></td>
                    <td class="actions" data-th="">
                          <button class="btn btn-primary btn-lg m-3" @click.prevent="$router.replace({ name: 'homepage' })"><i class="fa fa-edit"></i></button> 
                         <button class="btn btn-danger btn-lg" @click.prevent="$router.replace({ name: 'details' })"><i class="fa fa-trash-o"></i></button> 
                    </td>

                </tr>
            </tbody>

  
            <tfoot>
                <tr class="">
                    <td class="text-left"><strong> </strong></td>
                </tr>
                 
            
                   
 
            </tfoot>
 
        </table>
 
    </div>

    </div>
</template>

<script>
export default {
 name: "Useradmin",
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
        
        show: true
      }
  }
}
</script>

<style>
 
.blauke-t{
  color: #004fff;
  font-weight: 600;

}
.jumbotron{
	background-color: rgba(235, 224, 224, 0.86);
	margin-bottom: 0;
}
.cardss{
    background-color:#ffbf00;
    border-radius: 30px;
    min-height: 160px;
}
.cardss:hover {
  background-color: lightgray;
   transition: 0.6s;
}
</style>
