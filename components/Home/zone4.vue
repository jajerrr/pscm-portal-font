<template>
  <div class="content-w-re  mb-[10%]">
    <div class="f-col f-center mb-[5%]">
      <h class="header">Ranking</h>
      <div class="j-center flex-glow w-full px-[10%]">
        <h class=" th-header">จัดอันดับคะแนน</h>
      </div>
      <IconsUnderline />
    </div>

    <div class="rank-card-content">
      <div class="f-row "  v-for="(id, index) in rankCard" :key="index">
        <div class="flex ml-[-3vw] z-[29] w-full">
          <h class="num-normal num-rank">{{ id.num }}</h>
          <div class="card-rank">
            <div class="card-img">
              <img
                class="z-4-img"
                src="assets/images/zone4/Group 1000003302.png"
              />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">{{ id.name }}</h2>
              <div class="j-center">
                <img
                  class="object-cover h-[4vh]"
                  src="assets/images/zone4/coin 9.png"
                />
                <h2 class="score">{{id.score}}</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="flex ml-[-3vw] z-[28] w-full">
          <h class="num-rank">2</h>
          <div class="card-rank">
            <div class="card-img">
              <img
                class="z-4-img"
                src="assets/images/zone4/Group 1000003303.png"
              />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">Nuttida P.</h2>
              <div class="j-center">
                <img
                  class="object-cover h-[4vh]"
                  src="assets/images/zone4/coin 9.png"
                />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-[-3vw] z-[27] w-full">
          <h class="num-rank">3</h>
          <div class="card-rank">
            <div class="card-img">
              <img
                class="z-4-img"
                src="assets/images/zone4/Group 1000003304.png"
              />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">Nuttida P.</h2>
              <div class="j-center">
                <img
                  class="object-cover h-[4vh]"
                  src="assets/images/zone4/coin 9.png"
                />

                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-[-3vw] z-[26] w-full">
          <h class="num-rank">4</h>
          <div class="card-rank">
            <div class="card-img">
              <img
                class="z-4-img"
                src="assets/images/zone4/Group 1000003305.png"
              />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">Nuttida P.</h2>
              <div class="j-center">
                <img
                  class="object-cover h-[4vh]"
                  src="assets/images/zone4/coin 9.png"
                />

                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-[-3vw] z-[25] w-full">
          <h class="num-rank">5</h>
          <div class="card-rank">
            <div class="card-img">
              <img
                class="z-4-img"
                src="assets/images/zone4/Group 1000003306.png"
              />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">Nuttida P.</h2>
              <div class="j-center">
                <img
                  class="object-cover h-[4vh]"
                  src="assets/images/zone4/coin 9.png"
                />

                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script setup>
const rankCard = ref([
  {
    num: 1,
    name: "Nuttida P.",
    score: "999",
    img:"assets/images/zone4/Group 1000003302.png"},

      {
    num: 2,
    name: "Nuttida P.",
    score: "999",
    img:"assets/images/zone4/Group 1000003302.png"},
    {
    num: 3,
    name: "Nuttida P.",
    score: "999",
    img:"assets/images/zone4/Group 1000003302.png"},
    {
    num: 4,
    name: "Nuttida P.",
    score: "999",
    img:"assets/images/zone4/Group 1000003302.png"},
    {
    num: 5,
    name: "Nuttida P.",
    score: "999",
    img:"assets/images/zone4/Group 1000003302.png"},
    

]);
</script>

<style scoped>

@media (max-width:1024px){
  .num-normal{
    @apply text-[15vw] text-[#F3F7FD]  z-30 ml-[-1vw]  mt-[8vw];
    -webkit-text-stroke: 2px #ff7a00;
    
  }
}

</style>
