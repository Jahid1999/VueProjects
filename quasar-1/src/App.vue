<template>
  <q-layout view="lHh Lpr fFf">
      <q-header elevated >
       <q-toolbar  class="bg-green text-white  shadow-2 ">
      <q-btn flat round dense icon="arrow_back"/>
      <q-space/>
      <q-toolbar-title>
        Team 11
      </q-toolbar-title>
      
      <q-btn flat round dense icon="money" class="q-mr-xs" />
      <q-btn flat round dense icon="info" />
    </q-toolbar>
    <q-toolbar class="bg-secondary">
      <q-avatar>
          <img src="./assets/logo.png">
      </q-avatar>
        <div class="teamName"> Quasar </div>

        <q-space/>

          <q-avatar size="24px" color="white">
            <img src="./assets/vs.png">
            </q-avatar>
          <q-space/>

        <div class="teamName"> Jahid </div>
      <q-avatar>
          <img src="./assets/jahid.jpg">
      </q-avatar>
        

    </q-toolbar>
    <q-toolbar class="bg-warning">
      <q-space/>
      <q-toolbar-title>
        Remaining times
      </q-toolbar-title>
      <q-space/>
    </q-toolbar>
      </q-header>

    <q-page-container >
      <q-page padding style="padding-top: 66px">
          <HelloWorld />
      </q-page>
      
     
    </q-page-container>
    
    <q-footer class="bg-grey-5">
      <div class="q-mb-md text-center q-pt-sm q-gutter-sm">
        <q-btn color=green text-color="black" glossy  label="Create Own Team" /> 
        
      </div>
    </q-footer>
  </q-layout>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
  .hudai{
    text-align: center;
    
  }
  .teamName {
    color: black;
    font-size: 20px;
    padding: 10px;
    font-weight: 500;
  }
</style>
