<template>
  <div>
    <q-layout view="lHh Lpr fFf">
      <q-header elevated>
        <q-toolbar class="bg-green text-white shadow-2">
          <q-btn flat round dense to="/home" icon="arrow_back" />
          <q-space />
          <q-toolbar-title>Contests</q-toolbar-title>

          <q-btn flat round dense @click="showAccount" icon="money" class="q-mr-xs" />
          <q-btn to="/about" flat round dense icon="info" />
        </q-toolbar>
        <q-toolbar class="bg-secondary">
          <q-avatar>
            <img src="../assets/logo.png" />
          </q-avatar>
          <div class="teamName">Quasar</div>

          <q-space />

          <q-avatar size="30px" color="green" text-color="white">
            <!--<img src="../assets/vs.png"> -->
            VS
          </q-avatar>
          <q-space />

          <div class="teamName">Jahid</div>
          <q-avatar>
            <img src="../assets/logo.png" />
          </q-avatar>
        </q-toolbar>
        <q-toolbar class="bg-warning">
          <q-space />
          <q-toolbar-title>Remaining times</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding style="padding-top: 66px">
          <Cards />
        </q-page>
      </q-page-container>

      <q-footer class="bg-grey-5">
        <div class="q-mb-md text-center q-pt-sm q-gutter-sm">
          <q-btn color="green" text-color="black" glossy to="/create" label="Create Own Team" />
        </div>
      </q-footer>
    </q-layout>

    


  </div>
</template>

<script>
export default {
  name: "Contests",
  components: {
    Cards: () => import('./Cards.vue')
  },
  methods: {
    showAccount() {
      alert("Dear Jahid\n You have 500 coins");
    }
  }
};
</script>

<style scoped>
  .teamName {
  color: black;
  font-size: 20px;
  padding: 10px;
  font-weight: 500;
}
</style>