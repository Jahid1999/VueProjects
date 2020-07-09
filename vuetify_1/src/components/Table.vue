<template>
  <div>
       <input type="text" class="search-bar" placeholder="Search Name">
    <v-card>
       
      <v-card-title>
        Developers
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table 
      :headers="headers" 
      :items="desserts" 
      :search="search">
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
    name: 'Table',
    data () {
    return {
      search: '',
      headers: [
        {
          text: 'Name ',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Department', value: 'department' },
        { text: 'Batch', value: 'batch' },
        { text: 'Roll', value: 'roll' },
        { text: ' Age ', value: 'age' },
      ],
      desserts: [
        {
          name: 'Nafis Fuad',
          department: 'IIT',
          batch: 'BSSE-09',
          roll: 957,
          age: 24,
        },
        {
          name: 'Radowan',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1002,
          age: 20,
        },
        {
          name: 'Ryan',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1011,
          age: 23,
        },
        {
          name: 'Jahid',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1030,
          age: 22,
        },
        {
          name: 'Nafis Fuad2',
          department: 'IIT',
          batch: 'BSSE-09',
          roll: 957,
          age: 24,
        },
        {
          name: 'Radowan2',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1002,
          age: 20,
        },
        {
          name: 'Ryan2',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1011,
          age: 23,
        },
        {
          name: 'Jahid2',
          department: 'IIT',
          batch: 'BSSE-10',
          roll: 1030,
          age: 22,
        },
      ],
    }
  }

};
</script>
<style scoped>
    .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border:none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px 16px 0px 0px;
    transition: 0.4s;
  }
  .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
  }

</style>
