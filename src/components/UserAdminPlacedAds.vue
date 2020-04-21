<template>
    <div>


 
    <div class="jumbotron">
        <h3 class="display-4 py-4">placed ads</h3>  
        
          <b-button @click.prevent="$router.push({ name: 'useradmin'})" class=" m-3  pull-right" variant="outline-primary" size="lg">Admin dashboard<i class="fa fa-chevron-right ml-2" ></i></b-button> 
                
        
        <table id="cart" class="table table-hover table-condensed" style="background-color: gainsboro;">
            <thead class="thead-dark">
                <tr>
                    <th style="width:50%" class="h4"><strong>Posts</strong></th>
                    <th style="width:10%" class="h4"><strong>Date</strong></th>
                    <th style="width:8%"></th>
                    <th style="width:22%" class="text-center h4"><strong>incl.BTW</strong></th>
                    <th style="width:10%"></th>
                </tr>
            </thead>
 
            <tbody>
                <tr v-for="n in 3" :key="n.id">
                    <td data-th="Product">
                        <div class="row" >
                            <div class="col-sm-4 hidden-xs mr-5 mb-5 "><img src="../assets/stock-image.jpg"   alt="zoekertje" class="img-responsive"  height="140"/></div>
                            <div class="col-sm-4">
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
 name: "UserAdminPlacedAds",
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
</style>
