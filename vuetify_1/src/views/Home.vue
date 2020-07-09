<template>
  <div class="home">
    <h1>This is home page</h1>

    <v-container class="my-5">
      <v-layout row wrap justify-space-between>
        <v-flex xs4 md4 lg4>
          <div>
            <v-card class="mx-auto" max-width="400">
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
            <div class="text-center">
              <v-btn rounded color="error" dark>Clear</v-btn>
            </div>
          </div>
        </v-flex>

        <v-flex xs6 md6 lg6>
          <div>
            <Table />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "Home",
  components: {
    Table
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
