<template>
    <v-container v-if="item.item">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="text-center my-8">
                <v-card>

                    <v-layout class="text-center blue--text">
                        <v-flex xs12 class="text-center">
                      <!--  <h1> {{this.item}}  </h1>
                        --> 
                         <h1> {{item.item}}  </h1>
                       </v-flex>
                    </v-layout>

                    <v-layout row class="mb-3 ml-1 mr-1">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number1"
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

                        <v-col cols="12">
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

                        <v-layout row class="mb-3 ml-1 mr-1 price">
                          amount : {{this.price * this.number}}
                        </v-layout>
                        <v-btn @click="checkout" color="#ebce59" class="mb-1">
<!-- 
                        <v-btn rounded :to="'/itemview/' + item.id + '/'">  
                    -->             Checkout
                                </v-btn>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data: () => ({
        purposeitems : ['My use', 'To gift someone'],
        towns : ['Colombo', 'Kaduwela',	'Maharagama','Kesbewa','Dehiwala-Mount Lavinia','Moratuwa','Negombo','Sri Jayawardenepura','Kalmunai','Kandy'],
        purpose: '',
        delivery: '',
        name: '',
        city: '',
        phone: '',
        item: '',
        itemcode: '',
        number1: 0,
        numbers: ['1','2','3','4','5','6','7'],
        id: '',
        amount: this.number1 * this.price,
        
        wholeResponse: {}


        
    }), 
    

    props: ['id'],
    computed: {
        item() {
            return this.$store.getters.stocksfind(this.id)
            
        },
    },

  /*   mounted () {
        this.wholeResponse = this.$store.getters.stocksfind(this.id)
        console.log(this.wholeResponse)
       /*  this.item = this.wholeResponse[0].item
        this.id = this.wholeResponse[0].id
        this.price = this.wholeResponse[0].price
    
    }, */

    methods : {
        checkout () {
            this.$store.dispatch('checkout',{item:this.item, 
                                             name:this.name, 
                                             city:this.city, 
                                             number:this.number1, 
                                             address:this.delivery, 
                                             phone:this.phone, 
                                             packaging:this.purpose,
                                             amount:this.amount})
        }
    },

  
}
</script>


<style scoped>
.price {
    font-size: 19px;
    font-weight: bold;
    
}
</style>
