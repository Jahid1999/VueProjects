<template>
  <div>
    <nav>
      <v-toolbar dark>
        <v-app-bar-nav-icon @click="a=!a"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>Search
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
    </nav>

    <v-navigation-drawer v-model="a" app temporary color="#9FA8DA">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../assets/logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>Jahid</v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item>

          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>
                  <v-btn to="/home">Home</v-btn>
              </v-list-item-title>
            </v-list-item-content>

          
        </v-list-item>

        <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-help-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                  <v-btn to="/about">About</v-btn>
              </v-list-item-title>
            </v-list-item-content>

          
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Toolbar",
  props: ["drawer"],
  data() {
    return {
      a: this.drawer
    };
  }
};
</script>