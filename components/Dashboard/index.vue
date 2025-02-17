<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref(null);

onMounted(() => {
  if (!chartContainer.value) return;

  const myChart = echarts.init(chartContainer.value, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });

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
    xAxis: [
      {
        type: 'category',
        data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        axisTick: { alignWithLabel: true }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'ผู้ใช้งาน',
        type: 'bar',
        barWidth: '20%',
        data: [30, 52, 200, 334, 390, 330, 220, 80, 52, 230, 134, 190],
        itemStyle: {
          borderRadius: [20, 20, 20, 20], 
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: '#FF7A00' }, // สีบน
  { offset: 1, color: '#FFD579' }  // สีล่าง
])

        }
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', () => myChart.resize());
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div ref="chartContainer" class="w-[100%] h-[400px] bg-white shadow-lg p-4 rounded-lg"></div>
  </div>
</template>
