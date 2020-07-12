<template>
  <div class="home">
    <h1>This is home page</h1> <br>

    <v-container fluid="">
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md4 lg4>
          <div >
            <Cards />
          </div>
        </v-flex>

        <v-flex xs12 md6 lg6>
          <div>
            <v-card class="mx-auto" max-width="100%">
            <Table />
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Home",

  components: {
    Table,
    Cards
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

</style>
