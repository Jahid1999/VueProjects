<template>

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
                    <div class="flex-child">

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
                      <span class="flex-child"></span>
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
                <q-btn flat @click="open('bottom')"> 
                    Total {{contest.totalWinners}} Winners
                </q-btn>
                 
              </div>

            </q-card>


      <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 550px">
          <div class="dialog">
              <div class="prizeList">
                  PRIZE LIST <hr>
              </div>
              <div class="rank">
                <span>Rank 1 ----------------5000</span> <br>
                <span>Rank 2 ----------------5000</span> <br>
                <span>Rank 3 ----------------5000</span> <br>
                <span>Rank 4 ----------------5000</span> <br>
                <span>Rank 5 ----------------5000</span> <br>
              </div>
          </div>
        </q-card>
      </q-dialog>

     </div>
    
  
</template>


<script>
  
export default {
  name: 'Cards',
  data() {
    return {
      dialog: false,
      position: 'top',
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
    open (position) {
      this.position = position
      this.dialog = true
    }
  },

  computed: {
    progressLabel() {
      return (this.progress * 100).toFixed(2) + "%";
    }
  }
  
}
</script>

<style scoped>
.hudai {
  text-align: center;
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
.prizeList {
  text-align: center;
  color: black;
  font-weight: 500;
}
.dialog {
  padding: 15px;
}

.rank {
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
}

</style>
