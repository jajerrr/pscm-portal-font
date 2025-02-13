<template>
    <div>
      <ApexCharts type="line" :options="chartOptions" :series="chartSeries" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'
  
  const chartOptions = ref({
    chart: {
      id: 'vuechart-example'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    }
  })
  
  const chartSeries = ref([{
    name: 'Sales',
    data: [30, 40, 35, 50, 49, 60, 70]
  }])
  </script>
  