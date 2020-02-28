<template>
    <v-container class="text-center">
        <v-layout row v-for="item in items" :key="item.id">
            <v-flex xs10>
                <v-card>
                    <v-card-text>
                        <v-layout row>
                            {{item.item}}
                        </v-layout>
                        <v-layout row>
                            {{item.price}}
                        </v-layout>
                        <v-layout row>
                            {{item.phone}}
                        </v-layout>
                        <v-layout row>
                            {{item.quantity}}
                        </v-layout>
                        <v-layout row>
                            {{item.address}}
                        </v-layout>
                        <v-layout row>
                            {{item.message}}
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
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
