<template>
    <v-container>
      <div class="form">
        <v-layout row>
            <v-flex xs12 class="text-center blue--text">
              <h1>  {{ items.item }}  </h1>
            </v-flex>
        </v-layout>

        <v-layout row class="ml-1 mb-3">
            <h3>Rs. {{items.price}}</h3>
        </v-layout>

         <v-layout row class="mb-3 ml-1 mr-1">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number"
                                    id="number"
                                    name = "number"
                                    ></v-select>
                    </v-layout>
          <v-layout row class="mb-3 ml-1 mr-1">
                            <v-text-field
                        
                            v-model="name"
                            id="name"
                            name="name"
                            label="Name">
                            </v-text-field>

                        </v-layout>

                       <!--   <v-col cols="12">
                         <v-textarea
                         name="delivery"
                         id = "delivery"
                          v-model="delivery"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          address <small>(delivery)</small>
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>
                    <v-layout row class="mb-3 ml-1 mr-1">
                              <v-select
                                    :items="towns"
                                    label="City"
                                    solo
                                    v-model="city"
                                    ></v-select>
                         </v-layout> -->

                         
                        <v-col cols="12">
                         <v-textarea
                         name="adrs"
                         id = "adrs"
                          v-model="adrs"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          Address 
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>


                           <v-layout row class="mb-3 ml-1 mr-1">
                            <v-text-field
                        
                            v-model="phone"
                            id="phone"
                            name="phone"
                            label="Phone">
                            </v-text-field>

                        </v-layout>


                         <v-layout row class="mb-3 ml-1 mr-1">
                                    <v-select
                                    name = "purpose"
                                    id="purpose"
                                    :items="purposeitems"
                                    label="I buy this for"
                                    solo
                                    v-model="purpose"
                                    ></v-select>
                        </v-layout>

                        <v-col cols="12">
                         <v-textarea
                         name="delivery"
                         id = "delivery"
                          v-model="delivery"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          Message <small>(any)</small>
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>





        <v-layout row class="ml-1 mb-3">
            <h3>amount : {{items.price * number}}</h3>
        </v-layout>

        <v-btn @click="checkout(items.item)">checkout</v-btn> 
                
      </div>
    </v-container>
</template>

<script>
export default {
    data : () => ({
        numbers : ['1','2','3','4','5','6'],
        number : '',
        name: '',
        delivery: '',
        towns : ['Colombo', 'Kaduwela',	'Maharagama','Kesbewa','Dehiwala-Mount Lavinia','Moratuwa','Negombo','Sri Jayawardenepura','Kalmunai','Kandy'],
        price: '',
        purposeitems : ['My use', 'To gift someone'],
        purpose: '',
        phone: '',
        item: '',
        amount: '',
        adrs: ''
    /*     amount : this.price * this.number
     */ /*    amount: this.price * this.number
 */
      
    }),
    props: ['id'],
      computed : {
        items () {
        return this.$store.getters.stocksfind(this.id)
      /*   this.price = this.$store.getters.stocksfind(this.id).price
       */  }
    },
        methods : {
        checkout (item) {
          //  this.amount = amount
            this.item = item
            this.$store.dispatch('checkout',{item:this.item, 
                                             name:this.name, 
                                             city:this.city, 
                                             number:this.number, 
                                             address:this.delivery, 
                                             phone:this.phone, 
                                             packaging:this.purpose,
                                             adrs: this.adrs
                                             //amount:this.amount
                                             })
            this.$router.push('/checkoutgreet')
        }
    },
      mounted () {
        
        this.price = this.$store.getters.stocksfind(this.id).price
            
        
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
.form {
    position: relative;
    margin-bottom: 8px;
    font-family: 'Permanent Marker';
}
</style>