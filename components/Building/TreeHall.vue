<template>
  <NuxtLayout
    name="map"
    class="w-screen h-screen bg-[url(~/assets/images/map-content/bgtree.png)] bg-no-repeat bg-cover bg-center object-cover"
  >
  <div class="left-5 absolute top-5 cursor-pointer z-50">
        <img src="assets/images/map-content/mapbt.png" alt="" />
      </div>
    
    <topnav
      class="flex absolute top-5 w-full justify-center items-center text-white SF-TH nav-normal"
    >
       

        <div class="flex-grow flex justify-center">
            <div class = 'flex space-x-3 justify-center items-center bg-[rgba(34,33,33,0.45)] p-1 rounded-full  text-white SF-TH'>
            <button class = ' hover:bg-slate-300 focus:bg-slate-300 p-1 rounded-full'>
                <img src="assets/images/map-content/Hanger.png"  c>
                
            </button>
            <button class = ' hover:bg-slate-300 focus:bg-slate-300 p-1 rounded-full'>
                <img src="assets/images/map-content/Settings.png"  >
               
            </button>
           
        </div>
        </div>
     
    </topnav>
    <bottomnav
      class="fixed bottom-0 left-0 z-[50] w-full text-white SF-TH nav-normal"
    >
      <div class="flex p-3 space-x-3 justify-center items-center">
        <div class="flex space-x-6">
          <button
            class="f-col justify-center items-center hover:bg-slate-400 focus:bg-slate-400 bg-[rgba(34,33,33,0.45)] p-3 rounded-full text-nm text-white SF-TH"
          >
            <img
              src="assets/images/map-content/Chat Round Unread.png"
              class=""
              alt=""
            />
            <p>เเชท</p>
          </button>
          <button
            class="f-col justify-center items-center hover:bg-slate-400 focus:bg-slate-400 bg-[rgba(34,33,33,0.45)] p-3 rounded-full text-nm text-white SF-TH"
          >
            <img
              src="assets/images/map-content/Microphone 3.png"
              class=""
              alt=""
            />
            <p>ปิดเสียง</p>
          </button>
        </div>

        <div class="flex-grow flex justify-center">
          <div
            class=" items-center text-xl text-white"
          >
            เดินเข้าสู่วิทยาลัยแพทยศาสตร์ศรีสวางควัตน
          </div>
        </div>
        <div
          class="flex cursor-default items-center bg-profile pr-3 pl-5 py-3 rounded-full"
          style="margin-right: 1rem"
        >
          <div class="f-col SF-Bold text-sm">
            <p>NUTTIDA</p>
            <div class="inline-content space-x-1">
              <img src="assets/images/zone4/coin 9.svg" class="w-[1.5vw]" />
              <p class="text-[#FF7A00]">999</p>
            </div>
          </div>
          <img
            src="assets/images/e-learning/profile.png"
            class="cursor-pointer w-[3vw] bg-white p-1 rounded-full"
            style="margin-left: 1rem"
          />
        </div>
      </div>
    </bottomnav>
  </NuxtLayout>
</template>
<style>
.bg-profile{
    background: linear-gradient(270deg, rgba(41,103,184,0.8939950980392157) 10%, rgba(41,103,184,0) 100%);
}
</style>