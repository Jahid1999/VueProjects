<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div>
        <q-toolbar class="bg-secondary text-white shadow-2"> 
          <q-space />
          <div class="teamToolbar">Teams</div>
          <q-space />
          <q-btn color="dark" text-color="red" glossy round icon="add" />
        </q-toolbar>
      
      </div>

       <q-scroll-area
      :thumb-style="thumbStyle" 
      style="height: 90vh;"
       >

        <div class="q-pa-md row wrap items-start q-gutter-md c">
          <q-card class="my-card" shadow-10 v-ripple="{ center: true }" v-for="team in teams" :key="team.id">
            <div class="taemCardContainer" >
              <div class="flex-container">
                <div class="text-h6 text-bold" style="width:70%">
                  {{team.teamName}}
                </div>
                <div >
                  <q-btn color="blue" flat round dense>
                    <q-avatar size="25px">
                      <img src="../assets/view.png" />
                    </q-avatar>
                  </q-btn>
                  <q-btn color="red" flat round dense icon="edit" />
                </div>
            </div>

            <hr>

              <div class="flex-container midPart">
                <div class="captain" style="width:50%">
                  <q-avatar color="white" text-color="black" size= "30px" class="text-bold">
                    C
                  </q-avatar>
                  <br>
                  <div class="infoConttainer">
                    <q-avatar size="45px">
                      <img src="../assets/human1.png" />
                    </q-avatar> <br>
                    <q-btn color="red" text-color="black" glossy>
                      {{team.captain}}
                    </q-btn>
                  </div>
                </div>
                <q-separator vertical color="black"/>
                <div class="viceCaptain" style="width:50%" >
                  <q-avatar color="white" text-color="black" size= "30px" class="text-bold">
                    VC
                  </q-avatar>
                  <br>
                    <div class="infoConttainer">
                      <q-avatar size="45px">
                      <img src="../assets/human1.png" />
                      </q-avatar> <br>
                      <q-btn color="red" text-color="black" glossy>
                        {{team.viceCaptain}}
                      </q-btn>
                      
                    </div>
                </div>
            </div>
                <hr>
            <div class="flex-container combinationInfo">
              <div style="width:25%">
                WK({{team.teamCombination.wk}})
              </div>
              <q-separator vertical color="black"/>
              <div style="width:25%">
                BAT(4)
              </div>
              <q-separator vertical color="black"/>
              <div style="width:25%">
                AR(2)
              </div>
              <q-separator vertical color="black"/>
              <div style="width:25%">
                BOWL(3)
              </div>
            </div>
            </div>
          </q-card>
          
          
      </div>
        
      </q-scroll-area> 

       

    </div>
   
    
    
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 createTeamDiv">
    <div >
        <q-btn color="light-green-14" text-color="black" glossy to="/create" label="Create Own Team" /> 
    </div>  
  </div>
  



  </div>
  
  
</template>


<script>
  
export default {
  name: 'Cards',
  data() {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      teams: [
        {
          id:1,
          teamName: 'Team Name',
          captain: 'Jahid 1',
          viceCaptain: 'Jahid 2',
          teamCombination: 
            { wk: 2, bat:4, ar:2, bowl: 3}
          
        },
        {
          id:2,
          teamName: 'Team Name',
          captain: 'Jahid 1',
          viceCaptain: 'Jahid 2',
          teamCombination: 
            { wk: 2, bat:4, ar:2, bowl: 3}

        },
        {
          id:3,
          teamName: 'Team Name',
          captain: 'Jahid 1',
          viceCaptain: 'Jahid 2',
          teamCombination: 
            { wk: 4, bat:4, ar:2, bowl: 3}
          
        },
        {
          id:4,
          teamName: 'Team Name',
          captain: 'Jahid 1',
          viceCaptain: 'Jahid 2',
          teamCombination: 
            { wk: 3, bat:4, ar:2, bowl: 3}

        },
        {
          id:5,
          teamName: 'Team Name',
          captain: 'Jahid 1',
          viceCaptain: 'Jahid 2',
          teamCombination: 
            { wk: 2, bat:4, ar:2, bowl: 3}
          
        }
      ]
     
    };
  },
  methods: {
    
  },

  computed: {
    
  }
  
}
</script>

<style scoped>
.teamToolbar {
  text-align: center;
  font-size: 30px;
  font-weight: 500;
}

.my-card {
  width: 100%;
  background-color:beige;
}

.midPart {
  background-color: white;
}
.flex-container {
    display: flex;
}
.taemCardContainer
{
  padding: 10px;
}
.viceCaptain {
  padding-left: 10px;
}
.infoConttainer {
  text-align: center;
}
.combinationInfo {
  text-align: center;
  font-weight: 450;
}
.createTeamDiv {
  text-align:center;
  background-image: url("../assets/groundImage.jpg");
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
}

</style>

