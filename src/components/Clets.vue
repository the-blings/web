<template>
    <v-container>
        <v-layout row>
        <v-flex xs12 class="text-center main1">
          <h1>  Bracelets </h1>
        </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 sm4 class="text-center main1">
              <h3>  PATTERN </h3>
                <v-hover v-slot:default="{ hover }">
                <v-card elevation="19" to="/pattern">
                <v-img height="498" src="https://i.pinimg.com/736x/44/23/72/442372d66b37e9d909b6dc092e090aeb.jpg">
                  <v-expand-transition>
                <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                 style="height: 100%;"
                 >
                PATTERN
               </div>
                 </v-expand-transition>
                </v-img>
                </v-card>
                </v-hover>
            </v-flex>

            <v-spacer></v-spacer>
            <v-flex xs12 sm4 class="text-center main1">
              <h3>SOLID</h3>
                <v-hover v-slot:default="{ hover }">
                <v-card elevation="19" to="/solid">
                <v-img height="498" src="https://i.pinimg.com/736x/44/23/72/442372d66b37e9d909b6dc092e090aeb.jpg">
                  <v-expand-transition>
                <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                 style="height: 100%;"
                 >
                SOLID
               </div>
                 </v-expand-transition>
                </v-img>
                </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>






<style>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

.main1 {
    margin-bottom: 8px;
    font-family: 'Permanent Marker';
}


.main1 h3 {
    margin-bottom: 8px;
    font-family: 'Permanent Marker';
}
</style>
