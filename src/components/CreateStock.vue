<template>
<!--<v-parallax height="969" src="https://i.imgur.com/M0BwxSq.png">  -->
<v-container class="main">
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3 >
      

         <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'green' : '#d65899'"  class="mr-1 ml-1">
            <v-card-text>
                <v-container>  
                    
                    <v-layout row>
                        <v-flex xs12 class="text-center display-1 font-weight-black my-5 topic">Post Item</v-flex>
                    </v-layout>


                    <v-form @submit.prevent="sum">

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                    name="item"
                                    label="Name of the item"
                                    id="item"
                                    v-model="item"
                                    
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="types"
                                    label="Item type"
                                    solo
                                    v-model="itemtype"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout>
                        
                     <!--     <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                         <div>
      <image-uploader
        :preview="false"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage"
      >
        <label for="fileInput" slot="upload-label">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              ></path>
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
    </div>
                            </v-flex>
                        </v-layout>
  -->


                        <!--   // main img
                         -->
                         <v-layout row>
                            <v-flex xs12 sm6>
                                <v-btn @click="onPickFile">Set main photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile" 
                                accept="image/*"
                                @change="onFilePicked">
                            </v-flex>
                        </v-layout>

                        <v-container v-if="imgurl">

                        
                        <v-layout row>
                            <v-flex xs12 sm6>
                                <v-img :src="imgurl"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>

                         
                       <!-- img0 -->
    <v-container v-if="imgurl">
                        <v-layout row>
                            <v-flex xs12 sm6>
                                <v-btn @click="onPickFile0">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile0" 
                                accept="image/*"
                                @change="onFilePicked0">
                            </v-flex>
                        </v-layout>
    </v-container>   

                        
                        <v-container v-if="imgurl0">
                            <v-layout row>
                            <v-flex xs12 sm6>
                                <v-img :src="imgurl0"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>

                        <!-- img1 -->
                        <v-container v-if="imgurl0">
                        <v-layout row>
                            <v-flex xs12 sm6>
                                <v-btn @click="onPickFile1">Set photo</v-btn>
                                <input type="file" 
                                style="display: none" 
                                ref="inputFile1" 
                                accept="image/*"
                                @change="onFilePicked1">
                            </v-flex>
                        </v-layout>
                        </v-container>   

                        
                        <v-container v-if="imgurl1">
                            <v-layout row>
                            <v-flex xs12 sm6>
                                <v-img :src="imgurl1"></v-img>
                            </v-flex>
                        </v-layout>
                        </v-container>



                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                    name="price"
                                    label="Price(Rs)"
                                    id="price"
                                    v-model="price"
                                    
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>

                       <!--  <v-layout row>
                            <v-flex xs12 offset-sm3 class="text-center">
                                Price(01): $42
                            </v-flex>
                        </v-layout> -->

                        <!-- 
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="items"
                                    label="Item"
                                    solo
                                    v-model="item"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout> -->

                        
                        
                        
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
                        
                       <!--  <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="mdi-person"
                                    name="buyer"
                                    label="Name"
                                    id="buyer"
                                    v-model="buyer"
                                    type="text"
                                    required
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        --> 
                        <v-col cols="12">
                         <v-textarea
                          v-model="description"
                          color="teal"
                         >
                       <template v-slot:label>
                         <div>
                          description <small>(optional)</small>
                         </div>
                       </template>
                        </v-textarea>
                        </v-col>
<!-- 
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-col class="d-flex" cols="12" sm="6">
                                    <v-select
                                    :items="items1"
                                    label="City"
                                    solo
                                    v-model="city"
                                    ></v-select>
                                </v-col>
                            </v-flex>
                        </v-layout> -->

   <!--                      <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" type="submit">
                                    Get amount</v-btn>

                            </v-flex>
                        </v-layout>

 -->
<!--                         <v-layout row>
                            <v-flex xs12 offeset-sm3 >
                                <v-text-field
                                prepend-icon="mdi-person"
                                    name="fullamount"
                                    label="Total"
                                    id="fullamount"
                                    v-model="fullamount"
                                    type="text"
                                    >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
 -->
                         <!-- <v-container v-if="this.fullamount">
                         <v-layout row>
                            <v-flex xs12 offset-sm3 class="display-1 font-weight-black">
                               Price : {{this.fullamount}}
                            </v-flex>
                        </v-layout>
                         </v-container>  -->

                           <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" @click="create">
                                    Publish</v-btn>

                            </v-flex>
                        </v-layout>

                        
                        
                         



                    </v-form>



                </v-container>

            </v-card-text>

        </v-card>
         </v-hover>

    </v-flex>

</v-layout>
</v-container>
<!--</v-parallax>  -->
</template>

<script>

export default {
    name: 'CreateStock',

    data: () => ({

        numbers: ['1', '2', '3', '4', '5', '6', '7'],
        items: ['item_1', 'item_2', 'item_3', 'item_4', 'item_5', 'item_6', 'item_7'],
        items1: ['Colombo', 'Kaduwela',	'Maharagama','Kesbewa','Dehiwala-Mount Lavinia','Moratuwa','Negombo','Sri Jayawardenepura','Kalmunai','Kandy'],
        types: ['Dangle','Stud','Necklace','Solid','Pattern'],

        sign: {},

        item: '',
        number: '',
        city:'',
        fullamount:'',
        price: '',
        buyer: '',
        address: '',
        description: '',
          hasImage: false,
      img: null,
      imgstringfinl: null,
      
      imgfile: '',

      imgurl: '',
      imgurl0: '',
      imgurl1: '',
      itemtype: ''

    }),

        
    methods : {

//        signin() {
        //    this.$store.dispatch('signin', {email: this.email, password: this.password})

            create() {
                /* console.log(this.number);
                console.log(this.city);
                console.log(this.fullamount);
 */
                this.$store.dispatch('createnewstock', {item:this.item, 
                                                        quantity:this.number, 
                                                        price:this.price, 
                                                        description:this.description, 
                                                        img:this.imgurl, 
                                                        img0:this.imgurl0, 
                                                        img1:this.imgurl1,
                                                        itemtype:this.itemtype})
                this.$router.push('/itemview')
            },

            sum() {
              this.fullamount = (this.number * 42);
              
            },


        
        setImage: function(output) {
        this.hasImage = true;
        this.img = output;
     // console.log('Info', output.info)
      //console.log('Exif', output.exif)
      this.imgstringfinl = this.img

     //   this.imgstringfinl = this.img.replace('data:image/jpeg;base64,', '')
     // console.log(this.img)
    },

    onPickFile() {
        this.$refs.inputFile.click()
    },

    onPickFile0() {
        this.$refs.inputFile0.click()
    },
    
    onPickFile1() {
        this.$refs.inputFile1.click()
    },



    onFilePicked (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile = files[0]
    },

    onFilePicked0 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl0 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile0 = files[0]
    },

    onFilePicked1 (event) {
        const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imgurl1 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile1 = files[0]
    }





    }
    

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

.form {
    position: relative;
    top: 169px;
    font-family: 'Permanent Marker';
}
.topic {
    
    font-family: 'Permanent Marker';
}
.main {
    min-height: 1696px;
    
    font-family: 'Permanent Marker';
}


</style>
