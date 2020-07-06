<template>
  <div id="app" >
    <header>
      <NavBar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar';

  export default {
    name: "App",
    components: {
      NavBar
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "montserrat", sans-serif;
  }
  header {
    width: 100vw;
    background-color: aquamarine;
    padding: 15px;
  }
</style>
