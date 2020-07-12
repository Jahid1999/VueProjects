<template>
  <div>
    <v-card class="mx-auto" max-width="100%">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Dream place to spend sometime</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Australia</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>Share</v-btn>

        <v-btn color="orange" text>Explore</v-btn>
      </v-card-actions>
    </v-card>

    <br />
    

    <v-card color="#BCAAA4" class="mx-auto" max-width="100%" v-for="jadu in devSelected" :key="jadu.name">

        <v-card-title>{{jadu.name}}</v-card-title>
        <v-divider></v-divider>

        <v-card-text class="cardText">
          <div> Department: {{jadu.department}} <br> 
                      Batch: {{jadu.batch}} <br>
                      Roll: {{jadu.roll}} <br>
                      Age: {{jadu.age}} 
          </div>
        </v-card-text>
      </v-card>
      <br />

    <div class="text-center" @click="clear">
      <v-btn rounded color="error" dark>Clear</v-btn>
    </div>


  </div>
</template>

<script>
import {eventBus} from '../main'
export default {
  name: "Cards",
  data() {
    return {
      devSelected: [],
    }
  },

  created () {
    eventBus.$on('select', (data) => {
      this.devSelected=[...this.devSelected, data]
    }),
     eventBus.$on('clear', (data) => {
      this.devSelected=data
    })
  },
  methods: {
    clear()  {
      this.devSelected=[]
    }
  }
  
};
</script>

<style scoped>
.cardText {
    font-size: 17px;
    font-weight: 600;
  }
</style>

