<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card>

                    <v-layout>
                        {{item.item}}
                    </v-layout>

                    <v-layout row class="mb-3">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number"
                                    ></v-select>
                    </v-layout>


                        <v-layout row>
                            <v-text-field
                            v-model="name"
                            label="Name">
                            </v-text-field>

                        </v-layout>

                        <v-col cols="12">
                         <v-textarea
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

                        <v-layout row class="mb-3">
                                    <v-select
                                    :items="purpose"
                                    label="I buy this for"
                                    solo
                                    v-model="purpose"
                                    ></v-select>
                        </v-layout>
                        <v-btn>
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
        purpose: '',
        delivery: '',
        name: '',
        city: '',
        phone: '',
        item: '',
        itemcode: '',
        number: '',
        id: '',
        
        wholeResponse: []


        
    }),

    props: ['id'],
    computed: {
        item() {
            return this.$store.getters.stocksfind(this.id)
            
        },
    },

    mounted () {
        this.wholeResponse = this.$store.getters.stocksfind(this.id)
        this.item = this.wholeResponse[0].item
        this.id = this.wholeResponse[0].id
    },

    methods : {
        checkout () {
            this.$store.dispatch('checkout',{item:this.item, name:this.name, city:this.city, number:this.number, address:this.delivery, phone:this.phone, packaging:this.purpose})
        }
    }
}
</script>
