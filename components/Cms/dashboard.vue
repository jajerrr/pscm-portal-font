<template>
  <div
    class="w-full h-full text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default"
  >
    <sidebar>
      <CmsNavCms />
      <div class="p-4 sm:ml-64 bg-[#FAFBFF]">
        <div class="p-4 px-10 py-8 rounded-lg bg-white">
          <div class="f-col">
            <h class="text-sm text-[#BABABA] pb-2">Dashboard</h>
            <h class="text-2xl text-[#1E1F21] SF-Bold">Dashboard</h>
            <div class="border-t border-gray-300 my-4"></div>
          </div>
          <!-- content -->
          <div class="f-col gap-[4rem]">
            <!-- top -->
            <div
              class="f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
            >
              <div class="f-row">
                <div>
                  <div class="pt-5">
                    <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5"
                      >ช่วงเวลา</h
                    >
                  </div>
                  <div class="f-row gap-[5rem] p-5">
                    <div class="flex items-center space-x-3">
                      <!-- Label -->
                      <span class="text-gray-600 text-sm">เริ่มต้น</span>

                      <!-- Date Picker Box -->
                      <div
                        class="flex items-center bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-2 cursor-pointer"
                      >
                        <input
                          type="date"
                          class="outline-none bg-transparent text-gray-500"
                        />
                      </div>
                    </div>

                    <div class="flex items-center space-x-3">
                      <!-- Label -->
                      <span class="text-gray-600 text-sm">สิ้นสุด</span>

                      <!-- Date Picker Box -->
                      <div
                        class="flex items-center bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-2 cursor-pointer"
                      >
                        <input
                          type="date"
                          class="outline-none bg-transparent text-gray-500"
                        />
                      </div>
                    </div>

                    <!-- Title -->
                    <div class="flex items-center"></div>

                    <!-- Link -->
                  </div>
                </div>

                <div class="flex-col items-center ml-auto mr-5">
                  <div class="pt-5">
                    <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5"
                      >ส่งออกรายงาน</h
                    >
                  </div>

                  <div class="flex items-center space-x-[5rem] p-5">
                    <!-- Dropdown Selection -->
                    <div class="relative w-full">
                      <select
                        class="w-[25rem] bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
                      >
                        <option>เลือกรายงานที่ต้องการส่งออก</option>
                        <option>รายงานสถิติจำนวนผู้เข้าใช้งานเว็บไซต์</option>
                        <option>รายงานสถิติการเข้าใช้งานแยกตามชั้น</option>
                        <option>รายงานสถิติอันดับเหรียญและคะแนนทักษะ</option>
                      </select>
                    </div>

                    <!-- Export Button -->
                    <button
                      class="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 whitespace-nowrap"
                    >
                      <!-- Text -->
                      <span>ส่งออก</span>
                    </button>
                  </div>

                  <!-- Link -->
                </div>
              </div>
            </div>

            <!-- sec -->
            <div
              class="f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
            >
              <div>
                <Bar />
              </div>
            </div>

            <!-- piechart -->

            <div class="flex w-full gap-8">
              <!-- third -->
              <div
                class="w-1/2 f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
              >
                <div>
                  <PieFloor />
                </div>
              </div>

              <!-- forth -->
              <div
                class="w-1/2 f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
              >
                <div>
                  <PieGame />
                </div>
              </div>
            </div>

            <!-- ranking -->
            <Rank />
          </div>
          <!-- end -->
        </div>
      </div>
    </sidebar>
  </div>
</template>

<script setup>
import PieFloor from "/components/Dashboard/pieFloor.vue";
import PieGame from "/components/Dashboard/pieGame.vue";
import Rank from "/components/Dashboard/ranking.vue";
import Bar from "/components/Dashboard/barchart.vue";

</script>

<style>
nav {
  z-index: 50;
}
</style>
