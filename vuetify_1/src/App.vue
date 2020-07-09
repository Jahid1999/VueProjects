<template>
<div>
  <v-app>
    <header>
      <Toolbar :drawer="drawer"/>
    </header>
    
      <v-main>
        <router-view></router-view>
      </v-main>

  </v-app>
</div>
  
</template>

<script>

import Toolbar from './components/Toolbar.vue'
export default {
  name: 'App',

  components: {
    Toolbar
  },

  data: () => ({
    drawer: false,
    
  }),
};
</script>
