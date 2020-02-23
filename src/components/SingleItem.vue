<template>
<v-container>
    <v-container v-if="img">
        <v-layout row>
        <v-img height="398" :src="img"></v-img>
        </v-layout>
    </v-container>
    
    <v-container v-if="img0">
        <v-layout row>
        <v-img :src="img0"></v-img>
        </v-layout>
    </v-container>
    
    <v-container v-if="img1">
        <v-layout row>
        <v-img :src="img1"></v-img>
        </v-layout>
    </v-container>

    <v-layout row>
        <v-flex xs12>
            <v-card>
                <v-flex xs12 >
    <v-layout row>
        <v-flex xs12 class="text-center">
            <v-layout row>
                {{ item.item }}
            </v-layout>
            <v-layout row>
                {{ item.price }}
            </v-layout> 
            <v-layout>
                {{item.description}}
            </v-layout>
            <v-layout row>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number"
                                    ></v-select>
                                </v-col>
                            
            </v-layout>
           

            <v-layout row>
                Delivery address
                         <v-textarea
                          v-model="deliver"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          deliver address 
                         </div>
                       </template>
                        </v-textarea>
            </v-layout>

        </v-flex>
    </v-layout>
                </v-flex>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data: () => ({
         
            deliver: '',
            wholeResponse: [],
            img: '',
            img0: '',
            img1: ''

        
    }),
    props: ['id'],
    computed: {
        item() {
            return this.$store.getters.stocksfind(this.id)
            
        },

/* 
     img() {
            return this.$store.getters.stocksfind(this.id).img
        
    },
 
    img0() {
        return this.$store.getters.stocksfind(this.id).img0
        
    }, */
/* 
    img1() {
            return this.$store.getters.stocks(this.id).img1
        
    },  */
    },
    mounted () {
         
            this.wholeResponse = this.$store.getters.stocksfind(this.id)
            this.img = this.wholeResponse.img
            this.img0 = this.wholeResponse.img0
            this.img1 = this.wholeResponse.img1
        
    }

}
</script>



