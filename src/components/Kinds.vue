<template>
    <v-container>
        <v-layout row>
<!--             <v-flex xs12 class="display-3 text-center my-10"> -->
    <v-flex xs12 class="main1 text-center">
                <h1>CATEGORIES</h1>

            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm4 class="text-center ">
                <v-hover v-slot:default="{ hover }">
                <v-card elevation="19" to="/earrings">
                <v-img height="498" src="https://i.pinimg.com/736x/44/23/72/442372d66b37e9d909b6dc092e090aeb.jpg">
                  <v-expand-transition>
                <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                 style="height: 100%;"
                 >
                Earrings
               </div>
                 </v-expand-transition>
                </v-img>
                </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs12 sm4 class="text-center ">
                <v-hover v-slot:default="{ hover }">
                <v-card elevation="19" to="/brcelets">
                <v-img height="498" src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-34-15-rBVaJFk4uSOAGEMUAAhFTmoqm88727.jpg/multi-color-8mm-polymer-clay-bracelets-for.jpg">
                <v-expand-transition>
                <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                 style="height: 100%;"
                 >
                Bracelets
               </div>
                 </v-expand-transition>
                </v-img>
                </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs12 sm4 class="text-center ">
                
                <v-hover v-slot:default="{ hover }">
                <v-card elevation="19" to="/necklces">
                <v-img height="498" src="https://www.papernstitchblog.com/wp-content/uploads/2018/06/how-to-make-clay-jewelry-earrings-feature.jpg">
                <v-expand-transition>
                <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                 style="height: 100%;"
                 >
                Necklaces
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
    font-size: 36px;
    font-family: 'Permanent Marker';
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;  
font-family: 'Permanent Marker';
}

@media only screen and (max-width:450px){
    .main1 {
        font-size: 19px;
        font-family: 'Permanent Marker';
    }
    
}
</style>




