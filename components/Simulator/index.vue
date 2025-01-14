<template>
  <NuxtLayout name="bgsimulator">
    <div class="w-full h-screen absolute flex justify-center items-center z-30">
      <div
        class="w-full h-screen absolute flex justify-center items-center z-30"
      >
        <img src="assets/images/simulator/cardsimu.png" alt="" class="" />
      </div>

      <div class="absolute flex justify-center items-center z-40">
        <div class="flex-col gap-5 flex w-1/2 items-center text-white SF-TH">
          <h1 class="text-3xl font-bold">เกมหัตถการที่ 1</h1>
          <h2 class="neon text-3xl text-center font-bold">
            Advance Cardio-Pulmonary <br />
            Resuscitation
          </h2>
          <img src="assets/images/simulator/linesimu.png" alt="" />
          <h3 class="text-xl text-center">
            ประเมินสถานการณ์ เพื่อฟื้นคืนชีพขั้นพื้นฐาน<br />ใช้เครื่องมือ
            Defibrillator กระตุ้นหัวใจผู้ป่วย
            <br />และใช้การกระตุ้นหัวใจด้วยไฟฟ้าหรือยาแก่ผู้ป่วย
          </h3>
          <div>
            <div class="absolute flex items-center z-10"
            style="margin-left:15px;
            margin-top:5px;">
              <button
                type="button"
                class="rounded-lg flex items-center space-x-[1rem] bg-[#FF7A00] hover:bg-[#ffe1c5] px-6 py-2 transition ease-in-out"
              >
                <img src="assets/images/simulator/iconsimu.png" alt="" />
                <span class="text-nm text-white">Simulator</span>
              </button>
            </div>
            <div class="">
              <img
                src="assets/images/simulator/bt-line.png  "
                alt=""
                class=""
              />
            </div>
          </div>
        </div>
        <div class="flex w-1/2">
          <img src="assets/images/simulator/CPR.png" alt="" class="" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style>
.neon {
  text-shadow: 3px 0px 16px rgba(105, 157, 237, 1);
}
</style>
