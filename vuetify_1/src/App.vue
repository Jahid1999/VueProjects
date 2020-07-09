<template>
<div>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary color=#9FA8DA>
        <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="./assets/logo.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
              Jahid
            </v-list-item>
          </v-list>
          <v-divider> </v-divider>

         <v-list nav dense >

            <v-list-item >
            
            <v-btn flat to="/"> Home </v-btn>
            </v-list-item>
            <v-list-item link>             
             <v-btn flat to="/about"> About </v-btn>
            </v-list-item>
          
        </v-list>
    </v-navigation-drawer>

      <v-toolbar dark>
        <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>
  
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
  
        <v-btn flat icon> 
          <v-icon>mdi-magnify</v-icon>
          Search
        </v-btn>
        <v-spacer></v-spacer>
  
      </v-toolbar>
      <v-content>
        <router-view></router-view>

      </v-content>

  </v-app>
</div>
  
</template>

<script>


export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    drawer: false,
    
  }),
};
</script>
