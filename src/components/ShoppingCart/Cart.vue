<template>
    <v-container>
        <v-layout row class="text-center">
            <h1>Cart</h1>
            <v-layout row v-for="item in items" :key="item.item">
                {{item.item}}
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

