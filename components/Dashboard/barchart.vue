<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { useTotalMonthlyDataStore } from "/stores/totalMonthlyData.js";

const totalMonthlyData = ref(0); // เก็บค่ารวมรายเดือน
const totalYearlyData = ref(0); // เก็บค่ารวมทั้งปี
const selectedYear = ref("2566");
const selectedMonth = ref("ทุกเดือน");
const chartContainer = ref(null);

// ตัวแปรชั่วคราวที่ใช้สำหรับเลือกค่าก่อนกด "ยืนยัน"
const tempSelectedYear = ref("2566");
const tempSelectedMonth = ref("ทุกเดือน");

const mockData = {
  2566: {
    มกรา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    กุมภา: Array(28).fill().map(() => Math.floor(Math.random() * 200)),
    มีนา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    เมษา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    พฤษภา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    มิถุนา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    กรกฎา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    สิงหา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    กันยา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    ตุลา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    พฤศจิ: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
    ธันวา: Array(31).fill().map(() => Math.floor(Math.random() * 200)),
  },
};

let myChart;

// ฟังก์ชันอัปเดตกราฟ
const updateChart = () => {
  if (!chartContainer.value) return;
  if (!myChart) {
    myChart = echarts.init(chartContainer.value, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
  }

  let data = [];
  let categories = [];

  if (selectedMonth.value === "ทุกเดือน") {
    // คำนวณค่ารวมทั้งปี
    data = Object.keys(mockData[selectedYear.value]).map((month) =>
      mockData[selectedYear.value][month].reduce((a, b) => a + b, 0)
    );
    categories = Object.keys(mockData[selectedYear.value]);
    totalYearlyData.value = data.reduce((a, b) => a + b, 0);
    console.log("รวมค่าทั้งปี:", totalYearlyData.value);
  } else {
    data = mockData[selectedYear.value][selectedMonth.value];
    categories = Array.from({ length: data.length }, (_, i) => `วัน ${i + 1}`);
    totalMonthlyData.value = data.reduce((a, b) => a + b, 0);
    console.log(`รวมค่าเดือน ${selectedMonth.value}:`, totalMonthlyData.value);
  }

  const store = useTotalMonthlyDataStore();
  store.setTotalMonthlyData(selectedMonth.value === "ทุกเดือน" ? totalYearlyData.value : totalMonthlyData.value);

  const option = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: [{ type: "category", data: categories, axisTick: { alignWithLabel: true } }],
    yAxis: [{ type: "value" }],
    series: [
      {
        name: "ผู้ใช้งาน",
        type: "bar",
        barWidth: "20%",
        data: data,
        itemStyle: {
          borderRadius: [20, 20, 20, 20],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#FF7A00" },
            { offset: 1, color: "#FFD579" },
          ]),
        },
      },
    ],
  };

  myChart.setOption(option);
};

// อัปเดตค่าจริงเมื่อกดปุ่ม "ยืนยัน"
const confirmSelection = () => {
  selectedYear.value = tempSelectedYear.value;
  selectedMonth.value = tempSelectedMonth.value;
  updateChart();
};

// โหลดค่ารวมทั้งปีเป็นค่าเริ่มต้นเมื่อเปิดหน้า
onMounted(() => {
  updateChart();
});
</script>

<template>
  <div class="f-col">
    <div class="flex right-[6%] items-center mb-5">
      <div class="flex items-center space-x-[3rem] ml-auto mr-7 mt-5">
        <select v-model="tempSelectedYear" class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
          <option>2566</option>
        </select>

        <select v-model="tempSelectedMonth" class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
          <option>ทุกเดือน</option>
          <option>มกรา</option>
          <option>กุมภา</option>
          <option>มีนา</option>
          <option>เมษา</option>
          <option>พฤษภา</option>
          <option>มิถุนา</option>
          <option>กรกฎา</option>
          <option>สิงหา</option>
          <option>กันยา</option>
          <option>ตุลา</option>
          <option>พฤศจิ</option>
          <option>ธันวา</option>
        </select>

        <button @click="confirmSelection" class="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900">
          ยืนยัน
        </button>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div ref="chartContainer" class="w-[100%] h-[400px] bg-white shadow-lg p-4 rounded-lg"></div>
    </div>
  </div>
</template>
