<template>
<div class="main"> 
    <v-container >
        <v-layout row>
            <v-flex xs12 class="text-center">
                <h1>Items</h1>
            </v-flex>
        </v-layout>
<!--
        <v-container v-if="items[0]" >
            <v-flex xs12>
            <v-card color="green">
                    <div class="cardrow">
           <v-layout v-for="item in items" :key="item.id" class="mb-2">
            <v-flex xs12>

                <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 10 : 1" :color="hover ? '#f0e859' : white">
                    <v-container fluid>
                    <v-layout row>
                        <v-flex xs12 sm5 class="ml-1">
                            <v-img height="298" :src="item.img">
                            </v-img>

                        </v-flex>
                        <v-spacer>
                        </v-spacer>
                        <v-flex xs10 sm7 md6>
                            <v-card-title primary-title>
                                <v-flex xs12>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                <h3> {{item.item}} </h3>
                                    </v-flex>
                                </v-layout> 
                               <v-layout row>
                                    <v-flex xs12 class="purple--text">
                              <h3> Rs {{item.price}}  
                              </h3>
                                    </v-flex>
                               </v-layout>
                               
                                </v-flex>
                                 
                               
                            </v-card-title>
                            
                            
                            <v-card-text class="text">
                                
                                <v-flex xs12>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                <h3> {{item.description}} </h3>
                                    </v-flex>
                                </v-layout> 
                               <v-layout row>
                                    <v-flex xs12 class="blue-grey--text">
                              <h3> {{item.quantity}} left  
                              </h3>
                                    </v-flex>
                               </v-layout>
                                </v-flex>
                                   </v-card-text>

                            <v-card-actions class="btn">
                                <v-btn :to="'/itemview/' + item.id">  
                                View 
                                </v-btn>

                            </v-card-actions>

                        </v-flex>
                    </v-layout>
                    
                    
                    </v-container>

                </v-card>
                </v-hover>
            </v-flex>

        </v-layout>
        </div>
            </v-card>
            </v-flex>
        </v-container> -->

            <v-layout row v-for="item in items" :key="item.id" class="itemrow my-3 ">
                <v-flex xs12>
                    <v-layout row>
                        <v-flex xs10 sm5 class="ml-1 mr-1">
                            <v-img :src="item.img" height="298"></v-img>
                        </v-flex>
                        <div class="main1">
                        <v-flex xs12 sm7 class="ml-10 mt-10 font-weight-black info">
                            <v-layout row class="item">
                                {{item.item}}
                            </v-layout>
                            
                            <v-layout row class="price">
                               Rs {{item.price}}
                            </v-layout>

                            <v-layout row>
                                {{item.description}}
                            </v-layout>
                            
                            
                            <v-layout row>
                                {{item.quantity}} left
                            </v-layout>

                            
                       <v-btn rounded :to="'/itemview/' + item.id">  
                                View
                                </v-btn>
                        </v-flex>
                        </div>
                    </v-layout>
                </v-flex>
    </v-layout>

    </v-container>
</div>
</template>


<script>
export default {
    computed : {
        items () {
            return this.$store.getters.stocks
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap');



.main {
    /* 
     background: linear-gradient(to right, #fbd3e9, #bb377d); */
     background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59); 
     font-family: 'Permanent Marker';
}




.main h1 {

    font-family: 'Permanent Marker';
    font-size: 36px;

}


.itemrow {
    color:rgb(37, 32, 32);
    border: solid yellow;
    margin: auto;
    margin-top: 8px; /* 
     background: white; */
    
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);
    
 background-image: url("https://i.imgur.com/sguDMfj.jpg");
 


}

.item {
    font-size: 34px;
    color: rgb(141, 30, 54);
}

.price {
    color: purple;
    font-size: 19;
}

.info {
    font-size: 29px;
}

.cardrow {
    
 background-image: url("https://i.imgur.com/R4N3OCP.jpg");

}
</style>

