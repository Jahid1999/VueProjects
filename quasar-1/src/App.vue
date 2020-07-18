<template>
  <div id="app">
    <q-layout view="lHh Lpr fFf">
      <q-page-container>
        <q-page padding >
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
