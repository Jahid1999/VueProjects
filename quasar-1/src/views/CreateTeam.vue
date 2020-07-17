<template>
  <div class="team">
    <q-header elevated >
       <q-toolbar  class="bg-green text-white  shadow-2 ">
         <q-btn flat round dense  to="/contests" icon="arrow_back"/>
      <q-space/>
      <q-toolbar-title>
        Team 11
      </q-toolbar-title>
        <q-space/>
      
       </q-toolbar>
      </q-header>
    <h5>Create Your Own Team</h5>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'CreateTeam',
  components: {
   
  }
}
</script>

<style  scoped>
    .team{
      text-align: center;
    }
</style>
