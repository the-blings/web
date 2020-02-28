<template>
    <v-container class="text-center main8">
        <v-flex xs12 class="text-center topic">
            Current Orders
        </v-flex>
        <v-flex xs12 class="text-center">
        <v-layout row v-for="item in items" :key="item.id" class="my-3 ">
            <v-flex xs12 class="mr-1 ml-1 font-weight-black">
                <v-card elevation="19" class="card1">
                    <v-card-text class="cardtext">
                        <v-layout row class="mb-3">
                          <h1>  {{item.item}}</h1>
                        </v-layout>
                        <v-layout row>
                          <h3>phone number</h3>     : {{item.phone}}
                        </v-layout>
                        <v-layout row>
                          <h3>name</h3>             : {{item.name}}
                        </v-layout>
                        <v-layout row>
                           <h3>number of items</h3> : {{item.quantity}}
                        </v-layout>
                        <v-layout row>
                           <h3>address</h3>         : {{item.address}}
                        </v-layout>
                        <v-layout row>
                            <h3>use</h3>        : {{item.packaging}}
                        </v-layout>
                        <v-layout row>
                            <h3>message</h3>        : {{item.message}}
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        </v-flex>
    </v-container>
</template>


<script>
export default {
   computed: {
       items () {
            return this.$store.getters.orders
        }
   }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

.main8 {
    
    font-family: 'Permanent Marker';

}
.card1 {
    border: 1px solid green;
    font-size: 36px;
    font-weight: bold
}


.cardtext {
    font-size: 18px;
    font-weight: bold
}

.topic {
    font-size: 36px;
    font-weight: bold
}

.main8 h3 {
    color:coral
}
</style>





