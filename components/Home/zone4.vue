<template>
  <div class="content-w-re">
    <div class="f-col f-center mb-[5%]">
      <h class="header">Ranking</h>
      <div class="j-center flex-glow w-full px-[10%]">
        <h class="text-[150%] th-header">จัดอันดับคะแนน</h>
      </div>
      <IconsUnderline />
    </div>

    <div class="rank-card-content">
      <div class="f-row  flex-wrap justify-center md:justify-start">
        <div class="flex z-30 w-full md:w-auto">
          <h class="num-rank">1</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" src="assets/images/zone4/Group 1000003302.png" />
            </div>
            <div class="text-center mt-5">
              <h2 class="name">Nuttida P.</h2>
              <div class="j-center gap-1">
                <img class="object-cover h-7" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-0 md:ml-[-25px] z-[29] w-full md:w-auto">
          <h class="num-rank">2</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" src="assets/images/zone4/Group 1000003303.png" />
            </div>
            <div class="text-center mt-5">
              <h2 class="name">Nuttida P.</h2>
              <div class="flex justify-center gap-1">
                <img class="object-cover h-7" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-0 md:ml-[-25px] z-[28] w-full md:w-auto">
          <h class="num-rank">3</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" src="assets/images/zone4/Group 1000003304.png" />
            </div>
            <div class="text-center mt-5">
              <h2 class="name">Nuttida P.</h2>
              <div class="flex justify-center gap-1">
                <img class="object-cover h-7" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-0 md:ml-[-25px] z-[27] w-full md:w-auto">
          <h class="num-rank">4</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" src="assets/images/zone4/Group 1000003305.png" />
            </div>
            <div class="text-center mt-5">
              <h2 class="name">Nuttida P.</h2>
              <div class="flex justify-center gap-1">
                <img class="object-cover h-7" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="flex ml-0 md:ml-[-25px] z-[26] w-full md:w-auto">
          <h class="num-rank">5</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" src="assets/images/zone4/Group 1000003306.png" />
            </div>
            <div class="text-center mt-5">
              <h2 class="name">Nuttida P.</h2>
              <div class="flex justify-center gap-1">
                <img class="object-cover h-7" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">999</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 500px) {
  .num-rank {
    font-size: 1.5rem;
  }
  .card-rank {
    width: 100%;
    margin: 0;
  }
  .card-img img {
    width: 100%;
  }
  .header, .th-header {
    font-size: 1.25rem;
  }
  .score {
    font-size: 1rem;
  }
  .name {
    font-size: 1rem;
  }
  .rank-card-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
