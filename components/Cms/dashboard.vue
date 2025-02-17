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


          <div class="f-col gap-[4rem]">
          <!-- top -->
          <div
            class="f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
          >
            <div class="f-row">
              <div>
                <div class="pt-5">
                  <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5">ช่วงเวลา</h>
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

              <div>
                <div class="pt-5">
                  <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5"
                    >ส่งออกรายงาน</h
                  >
                </div>

                <div class="flex items-center space-x-3 p-5">
                  <!-- Dropdown Selection -->
                  <div class="relative w-full">
                    <select
                      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
                    >
                      <option>เลือกรายงานที่ต้องการส่งออก</option>
                      <option>รายงานยอดขาย</option>
                      <option>รายงานลูกค้า</option>
                      <option>รายงานการสั่งซื้อ</option>
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
            <div class="f-col">
              <div class="flex right-[6%] items-center mb-5">
     

      <!-- Filter Options -->
      <div class="flex items-center space-x-4  ml-auto mr-7 mt-5">
        <!-- ปี -->
        <select
          class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
        >
          <option>2566</option>
          <option>2565</option>
          <option>2564</option>
        </select>

        <!-- เดือน -->
        <select
          class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
        >
          <option>ทุกเดือน</option>
          <option>มกรา</option>
          <option>กุมภา</option>
          <option>มีนาคม</option>
          <option>เมษา</option>
          <option>พฤษภา</option>
          <option>มิถุนา</option>
          <option>กรกฎา</option>
          <option>สิงหา</option>
          <option>กันยา</option>
          <option>ตุลา</option>
          <option>พฤศจิกา</option>
          <option>ธันวา</option>

        </select>

        <!-- วันที่เริ่มต้น -->
        <div
          class="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
        >
          <input type="date" class="outline-none bg-transparent text-gray-500" />
        </div>

        <!-- วันที่สิ้นสุด -->
        <div
          class="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
        >
          <input type="date" class="outline-none bg-transparent text-gray-500" />
        </div>

        <!-- ปุ่มยืนยัน -->
        <button
          class="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900"
        >
          ยืนยัน
        </button>
      </div>
    </div>

              <div>
                <Dashboard />
              </div>
            </div>
          </div>

          <!-- piechart -->

          <div class="flex w-full gap-8">
            <!-- third -->

            <div
              class="w-1/2 f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
            >
              <div class="f-col">
                <div>
                  <div class="pt-5">
                    <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5"
                      >PACMชั้นต่างๆ</h
                    >
                    <div class="border-t border-gray-300 my-4 p-5"></div>
                  </div>
                </div>

                <div>
                  <PieFloor />
                </div>
              </div>
            </div>


            <!-- forth -->

            <div
              class="w-1/2 f-col gap-5 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
            >
              <div class="f-col">
                <div>
                  <div class="pt-5">
                    <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5"
                      >เกมหัตถการ</h
                    >
                    <div class="border-t border-gray-300 my-4 p-5"></div>
                  </div>
                </div>

                <div>
                  <PieGame />
                </div>
              </div>
            </div>
          </div>

          <!-- ranking -->

          <div
            class="f-col gap-5 "
          >
          
           
          </div>
          <Rank />

          </div>


        </div>
      </div>
    </sidebar>
  </div>
</template>

<script setup>
import PieFloor from "/components/Dashboard/pieFloor.vue";
import PieGame from "/components/Dashboard/pieGame.vue";
import Rank from "/components/Dashboard/ranking.vue";

</script>

<style>
nav {
  z-index: 50;
}
</style>
