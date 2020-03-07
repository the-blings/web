<template>
    <v-container class="cart">
        <v-layout row class="text-center">
            <v-flex xs12  class="text-center mb-8">
            <h1>Cart</h1>
            </v-flex>
            <v-layout row >
                <v-flex v-for="item in items" :key="item.id" class="my-3 ml-3 mr-3" xs12><!--  class="text-center"> -->
                    <v-card color="pink lighten-3" class="ml-3 mr-3">
                        <v-card-title class="ml-1">
                            {{item.item}}
                        </v-card-title>
                        <v-card-text>
                            <v-layout row class="ml-3">
                            {{item.number}}
                            </v-layout>
                            <v-layout row class="ml-3">
                            {{item.packaging}}
                            </v-layout>

                            <v-layout row class="ml-3">
                            Rs.{{item.totalprice}}
                            </v-layout>

                           <!--  <v-layout row>
                                sum : {{this.sum + item.totalprice}}
                            </v-layout>
 -->
                        </v-card-text>

                    </v-card>
                </v-flex>
            </v-layout>
           <!--  <v-layout row>
                <v-flex xs12>
                    Sum : {{sum}}
                </v-flex>
            </v-layout> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data : () =>  ({
        sum : 0

    }),
    computed : {
        items () {
            return this.$store.getters.cart
        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
.cart {
    font-family: 'Permanent Marker';
}
</style>
