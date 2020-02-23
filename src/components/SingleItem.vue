<template>
<v-container>
    <v-container v-if="img">
        <v-layout row>
        <expandable-image height="338" :src="img"></expandable-image>
        </v-layout>
    </v-container>
    
    <v-container v-if="img0">
        <v-layout row>
        <expandable-image height="338" :src="img0"></expandable-image>
        </v-layout>
    </v-container>
    
    <v-container v-if="img1">
        <v-layout row>
        <expandable-image height="338" :src="img1"></expandable-image>
        </v-layout>
    </v-container>

    <v-container>
            <v-card>
                <v-card-title>
                    <h1 class="blue--text">{{item.item}}</h1>
                    </v-card-title>
                    <v-card-text>
                        <div class="rows">
                        <v-layout row class="mb-3">
                            {{item.price}}
                        </v-layout>
                        
                        <v-layout row class="mb-3">
                            {{item.description}}
                        </v-layout>
                        
                        <v-layout row class="mb-3">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number"
                                    ></v-select>
                        </v-layout>
                        
                        <v-layout row class="mb-3">
                            <v-textarea
                          v-model="description"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          address <small>(delivery)</small>
                         </div>
                       </template>
                        </v-textarea>
                        </v-layout>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green">buy</v-btn>
                    </v-card-actions>
            </v-card>
    </v-container>
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



<style scoped>
.rows {
    font-size: 19px;
    font-weight: bold
}
</style>
