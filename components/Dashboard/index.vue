<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref(null);
const selectedYear = ref('2566');
const selectedMonth = ref('ทุกเดือน');
const startDate = ref('');
const endDate = ref('');

// Mock data สำหรับแต่ละปี
const mockData = {
  '2566': [30, 52, 200, 334, 390, 330, 220, 80, 52, 230, 134, 190],
  '2565': [20, 45, 180, 290, 360, 310, 200, 70, 40, 210, 120, 180],
  '2564': [15, 40, 160, 270, 330, 290, 190, 60, 35, 190, 110, 170]
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

  let data = mockData[selectedYear.value];
  if (selectedMonth.value !== 'ทุกเดือน') {
    const monthIndex = [
      'มกรา', 'กุมภา', 'มีนาคม', 'เมษา', 'พฤษภา', 'มิถุนา',
      'กรกฎา', 'สิงหา', 'กันยา', 'ตุลา', 'พฤศจิกา', 'ธันวา'
    ].indexOf(selectedMonth.value);
    data = monthIndex !== -1 ? [data[monthIndex]] : data;
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
      data: selectedMonth.value === 'ทุกเดือน' ?
        ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] :
        [selectedMonth.value],
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
          <option>2565</option>
          <option>2564</option>
        </select>

        <!-- เดือน -->
        <select v-model="selectedMonth" class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none">
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
        <div class="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
          <input v-model="startDate" type="date" class="outline-none bg-transparent text-gray-500" />
        </div>

        <!-- วันที่สิ้นสุด -->
        <div class="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
          <input v-model="endDate" type="date" class="outline-none bg-transparent text-gray-500" />
        </div>

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
