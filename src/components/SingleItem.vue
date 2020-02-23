<template>
<v-container>
    <v-container v-if="img">
        <v-layout row>
        <v-img :src="img"></v-img>
        </v-layout>
        <v-container v-if="img0">
            <v-layout row>
        <v-img :src="img0"></v-img>
            </v-layout>
        </v-container><!-- 
        <v-img :src="imgs[2]"></v-img>
 -->
    </v-container>

    <v-layout row>
        <v-flex xs10 sm12 class="text-center">
            <v-layout row>
                {{ item.item }}
            </v-layout>
            <v-layout row>
                {{ item.price }}
            </v-layout>
            <v-layout row>
                <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="numbers"
                                    label="Number of items"
                                    solo
                                    v-model="number"
                                    ></v-select>
                                </v-col>
                            </v-flex>
            </v-layout>
            <v-layout>
                {{item.description}}
            </v-layout>

            <v-col cols="12">
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
                        </v-col>

        </v-flex>
    </v-layout>


</v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        item() {
            return this.$store.getters.stocksfind(this.id)
            
        },

 /*    img() {
            return this.$store.getters.stocksfind(this.id).img
        
    },

    img0() {
            return this.$store.getters.stocks(this.id).img0
        
    },

    img1() {
            return this.$store.getters.stocks(this.id).img1
        
    }, */
    }

}
</script>



