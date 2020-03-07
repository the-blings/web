<template>
    <v-container>
        <v-layout row class="text-center">
            <v-flex xs12  class="text-center mb-8">
            <h1>Cart</h1>
            </v-flex>
            <v-layout row wrap v-for="item in items" :key="item.id" class="my-9">
                <v-flex xs12 class="text-center">
                    <v-card>
                        <v-card-title>
                            {{item.item}}
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                            {{item.number}}
                            </v-layout>
                            <v-layout row>
                            {{item.packaging}}
                            </v-layout>
                        </v-card-text>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed : {
        items () {
            return this.$store.getters.cart
        }
    }
}

</script>

