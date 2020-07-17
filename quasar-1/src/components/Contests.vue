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
            <img src="../assets/jahid.jpg" />
          </q-avatar>
        </q-toolbar>
        <q-toolbar class="bg-warning">
          <q-space />
          <q-toolbar-title>Remaining times</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding style="padding-top: 66px">
          <div class="q-pa-md row wrap items-start q-gutter-md justify-center">

            <q-card class="my-card" shadow-10 v-ripple="{ center: true }" v-for="contest in contests" :key="contest.id">
              <div class="contectCard">
                <div class="contestCardDetailsCOntainer">

                  <div class="flex-container">
                    <div  class="flex-child ">
                      <span>Total Prize</span>
                      <p class="prizeTextField text-h6 text-bold"> 
                        <q-avatar color="green" size= "27px" text-color="black">
                          
                          <img src="../assets/Taka.png">
                        </q-avatar>
                        {{contest.totalPrize}}
                      </p>
                    </div>
                    <div  class="flex-child ">
                      <span > 
                        <q-avatar size="20px"  >
                            <img src="../assets/coin1.jpeg">   
                        </q-avatar>
                        {{contest.entryFee}}
                        </span> <br>
                       <q-btn glossy rounded  to="/create" color="green">join</q-btn>
                    </div>
                  </div>

                  
                  <div class="progressContainer">
                    <div class="progressBar">
                      <q-linear-progress
                        :value="progress"
                        size="13px"
                        color="warning"
                        class="q-mt-md"
                      >
                        <div class="absolute-full flex flex-center">
                          <q-badge color="white" text-color="black" :label="progressLabel" />
                        </div>
                      </q-linear-progress>
                    </div>

                    <div class="flex-container">
                      <span class="flex-child "> {{contest.spotFilled}} Team Joined</span>
                      <span class="flex-child ">{{contest.totalSpots-contest.spotFilled}} Spots Left</span>
                    </div>
                  </div>
                </div>


                <div class="flex-container">
                  <div class="flex-child ">
                    <span>  
                      <q-avatar color="green" size= "20px" text-color="black">
                          <img src="../assets/first.png">
                        </q-avatar> 
                      {{contest.firstPrize}} 
                    </span>
                  </div>
                  <div class="flex-child">
                    <q-avatar color="red" size="25px" text-color="black"> {{contest.contestType}} </q-avatar>
                  </div>
                </div>
              </div>

              <q-separator />

              <div class="text-bold">
                <q-avatar size="30px">
                  <img src="../assets/trophy.png">   
                </q-avatar>
                 Total {{contest.totalWinners}} Winners
              </div>

            </q-card>

          
          </div>
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
  data() {
    return {
      progress: 0.75,
      contests: [
        {
          id:1,
          totalPrize: 25000,
          entryFee: 1250,
          totalSpots: 120,
          spotFilled: 80,
          firstPrize: 5000,
          totalWinners: 25,
          contestType: 'M',
          
        },
        {
          id:2,
          totalPrize: 20000,
          entryFee: 1000,
          totalSpots: 90,
          spotFilled: 56,
          firstPrize: 4000,
          totalWinners: 22,
          contestType: 'M'
        },
        {
          id:3,
          totalPrize: 25000,
          entryFee: 1250,
          totalSpots: 120,
          spotFilled: 80,
          firstPrize: 5000,
          totalWinners: 5,
          contestType: 'S'
        },
        {
          id:4,
          totalPrize: 25000,
          entryFee: 'Free',
          totalSpots: 120,
          spotFilled: 80,
          firstPrize: 5000,
          totalWinners: 32,
          contestType: 'F'
        },
        {
          id:5,
          totalPrize: 5000,
          entryFee: 250,
          totalSpots: 20,
          spotFilled: 10,
          firstPrize: 500,
          totalWinners: 15,
          contestType: 'S'
        }
      ]
    };
  },
  methods: {
    showAccount() {
      alert("Dear Jahid\n You have 500 coins");
    }
  },

  computed: {
    progressLabel() {
      return (this.progress * 100).toFixed(2) + "%";
    }
  }
};
</script>

<style>
.hudai {
  text-align: center;
}
.teamName {
  color: black;
  font-size: 20px;
  padding: 10px;
  font-weight: 500;
}
.my-card {
  width: 400px;
  background-color: bisque;
}

.contectCard {
  background-color: beige;
  padding: 15px;
}
.flex-container {
    display: flex;
}
.flex-child {
    flex: 1;  
}


</style>