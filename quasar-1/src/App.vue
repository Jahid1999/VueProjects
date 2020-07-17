<template>
  <div id="app">
    <q-layout view="lHh Lpr fFf">
      <q-header elevated>
        <q-toolbar class="bg-green text-white shadow-2">
          <q-space />
          <q-toolbar-title>Team 11</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding style="padding-top: 66px">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return{
      
    }
  }
};
</script>
