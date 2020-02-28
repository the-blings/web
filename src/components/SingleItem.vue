<template>
<v-container class="itemform">
    <v-flex xs12 class="text-center">
        <v-layout row>
    <v-container v-if="img">
        <v-layout row class="ml-1 mr-1">
        <v-img height="548" :src="img"></v-img>
        <!--  <expandable-image height="438" :src="img"></expandable-image>
        -->
        </v-layout>
    </v-container>
    
    <v-container v-if="img0">
        <v-layout row class="ml-1 mr-1">
             <v-img height="548" :src="img0"></v-img>
       
       <!--  <expandable-image height="338" :src="img0"></expandable-image>
        --> </v-layout>
    </v-container>
    
    <v-container v-if="img1">
        <v-layout row class="ml-1 mr-1">
             <v-img height="548" :src="img1"></v-img>
       
       <!--  <expandable-image height="338" :src="img1"></expandable-image>
        --> </v-layout>
    </v-container>
        </v-layout>
    </v-flex>

    <v-container>
            <v-card>
                <v-card-title>
                    <h1 class="blue--text">{{item.item}}</h1>
                    </v-card-title>
                    <v-card-text>
                        <div class="rows">
                        <v-layout row class="mb-3">
                         Rs. {{item.price}}
                        </v-layout>
                        
                        <v-layout row class="mb-3">
                            {{item.description}}
                        </v-layout>
                        
                        
                        
                      <!--    :to="'/checkout/' + item.id" -->
                        
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                         color="green"
                         @click="clickk"
                         :to="'/checkout1/' + item.id"
                         >buy</v-btn>
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
            img1: '',
            numbers : ['1','2','3','4','5','6'],
            clicked: false,

            currenturl: ''

            

        
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

            this.currenturl = window.location.pathname;
        
    },

    methods : {
        clickk() {
            this.clicked = true
        }
    }

}
</script>



<style scoped>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
.rows {
    font-size: 19px;
    font-weight: bold
}

.itemform {
    min-height: 1396px;
    
    font-family: 'Permanent Marker';
}
</style>
