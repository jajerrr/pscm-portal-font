<template>
    <HomeNavbarSm></HomeNavbarSm>
    <div class ="bg-[url(~/assets/images/simulator/bgsimu.jpg)] bg-no-repeat bg-cover bg-center object-cover w-screen h-screen">
        <div class="w-full h-screen absolute flex justify-center items-center z-30">
            <div class="w-full h-screen absolute flex justify-center items-center z-30">
                <img src="assets/images/simulator/card-sm.png" alt="" class="" />
            </div>
      <div class="absolute flex-col justify-center items-center z-40">
        <div class="flex-col gap-5 flex  items-center text-white SF-TH ">
          <h1 class="text-nm font-bold">เกมหัตถการที่ 1</h1>
          <h2 class="neon text-nm text-center font-bold">
            Advance Cardio-Pulmonary <br />
            Resuscitation
          </h2>
          <img src="assets/images/simulator/linesimu.png" alt="underluine" />
          <h3 class="text-sm text-center">
            ประเมินสถานการณ์ เพื่อฟื้นคืนชีพขั้นพื้นฐาน<br />ใช้เครื่องมือ
            Defibrillator กระตุ้นหัวใจผู้ป่วย
            <br />และใช้การกระตุ้นหัวใจด้วยไฟฟ้าหรือยาแก่ผู้ป่วย
          </h3>
          
        </div>
        
        <div class="flex justify-center img-nm">
          <img src="assets/images/simulator/CPR.png" alt="image-type-890px" class="w-[45%] " />
        </div>

        <div class="flex justify-center img-small">
          <img src="assets/images/simulator/CPR.png" alt="image-type-490px" class="w-[70%] " />
        </div>

        <div class="absolute flex  justify-center items-center w-full">
            <div class="absolute flex items-center z-10" >
              <button type="button"
                class="rounded-lg flex items-center space-x-[1rem] bg-[#FF7A00] hover:bg-[#ffe1c5] px-6 py-2 transition ease-in-out">
                <img src="assets/images/simulator/iconsimu.png" alt="" />
                <span class="text-nm text-white">Simulator</span>
              </button>
            </div>
            <div class="">
              <img src="assets/images/simulator/bt-line.png  " alt="button-frame" class="" />
            </div>
          </div>
      </div>
        </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style>
  .neon {
    text-shadow: 3px 0px 16px rgba(105, 157, 237, 1);
  }

  .img-small{
    display: none;
  }

  @media (max-width: 520px) {
  .img-small {
    display: flex;
  }
  .img-nm {
    display: none;
  }
}
  </style>
  