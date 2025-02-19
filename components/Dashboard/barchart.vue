<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref(null);
const selectedYear = ref('2566');
const selectedMonth = ref('ทุกเดือน');

// Mock data สำหรับแต่ละปี
const mockData = {
  '2566': {
    'มกรา': Array(31).fill().map(() => Math.floor(Math.random() * 200)), 
    'กุมภา': Array(28).fill().map(() => Math.floor(Math.random() * 200)), 
    'มีนา': Array(31).fill().map(() => Math.floor(Math.random() * 200)),
  },
};

let myChart;

const updateChart = () => {
  if (!chartContainer.value) return;
  
  if (!myChart) {
    myChart = echarts.init(chartContainer.value, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
  }

  let data = [];
  let categories = [];

  if (selectedMonth.value === 'ทุกเดือน') {
    // แสดงข้อมูลรายปี (ข้อมูลรวมทุกเดือน)
    data = Object.keys(mockData[selectedYear.value]).map(month => mockData[selectedYear.value][month].reduce((a, b) => a + b, 0));
    categories = Object.keys(mockData[selectedYear.value]);
  } else {
    // แสดงข้อมูลรายวันในเดือนที่เลือก
    data = mockData[selectedYear.value][selectedMonth.value];
    categories = Array.from({ length: data.length }, (_, i) => `วัน ${i + 1}`); 
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: categories,
      axisTick: { alignWithLabel: true }
    }],
    yAxis: [{ type: 'value' }],
    series: [{
      name: 'ผู้ใช้งาน',
      type: 'bar',
      barWidth: '20%',
      data: data,
      itemStyle: {
        borderRadius: [20, 20, 20, 20],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#FF7A00' },
          { offset: 1, color: '#FFD579' }
        ])
      }
    }]
  };

  myChart.setOption(option);
};

onMounted(updateChart);
</script>

<template>
  <div class="f-col">
    <div class="flex right-[6%] items-center mb-5">
      <div class="flex items-center space-x-[3rem] ml-auto mr-7 mt-5">
        <!-- ปี -->
        <select v-model="selectedYear" class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
          <option>2566</option>
        </select>

        <!-- เดือน -->
        <select v-model="selectedMonth" class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
          <option>ทุกเดือน</option>
          <option>มกรา</option>
          <option>กุมภา</option>
          <option>มีนา</option>
         
          <!-- เพิ่มเดือนอื่นๆ ที่ต้องการ -->
        </select>
        <!-- ปุ่มยืนยัน -->
        <button @click="updateChart" class="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900">
          ยืนยัน
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div ref="chartContainer" class="w-[100%] h-[400px] bg-white shadow-lg p-4 rounded-lg"></div>
    </div>
  </div>
</template>
