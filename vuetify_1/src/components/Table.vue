<template>
  <div>
     
    <v-card>
       
      <v-card-title>
        Developers
        <v-spacer></v-spacer>
        <div >
          <v-btn  @click="ClearAll" rounded color="error" dark>Clear</v-btn>
        </div>
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
      :items="developers" 
      :search="search"
      item-key="name"
      v-model="selected"
      @click:row="showAlert">
          <template slot=”items” slot-scope="props" >
             
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.department }}</td>
            <td>{{ props.item.batch }}</td>
            <td>{{ props.item.roll }}</td>
            <td>{{ props.item.age }}</td>
        </template>

      </v-data-table>

    
      
      
    </v-card>

    <v-card class="mx-auto" max-width="100%" v-for="jadu in selectedDev" :key="jadu.name">
            
                <v-card-title>{{jadu.name}}</v-card-title>
              

              <v-card-subtitle class="pb-0">Australia</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
            </v-card>

  
  </div>
</template>

<script>
export default {
    name: 'Table',
    methods: {
    showAlert(a){
      if (event.target.classList.contains('btn__content')) return;
      alert('Developers Details\n' + '\nName: ' + a.name
            + '\nDepartment: ' + a.department
            + '\nBatch: ' + a.batch
            + '\nRoll: ' + a.roll
            + '\nAge: ' + a.age
      );
      this.selectedDev=[...this.selectedDev,a];
      

    },
    ClearAll() {
      this.selectedDev = [];
    }
  },
    
    data () {
    return {
      search: '',
      selected: [],
      selectedDev: [],
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
      developers: [
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
  },
 


};
</script>

<style scoped>
  
</style>

