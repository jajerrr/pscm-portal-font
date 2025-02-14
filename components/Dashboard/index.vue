<template>
  <div class="w-screen h-screen  flex justify-center items-center">
    <div style="width: 100%; height: 400px; border: 2px solid red;">
      <apexchart type="bar" height="100%" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>


<script>

import VueApexCharts from "/plugins/apexcharts.client.js";
export default {
  components: {
  apexchart: VueApexCharts
},
mounted() {
  console.log("✅ VueApexCharts component is mounted!");
},
  data() {
    return {
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
      chartOptions: {
        chart: { height: 350, type: 'bar' },
        plotOptions: {
          bar: { borderRadius: 10, dataLabels: { position: 'top' } }
        },
        dataLabels: {
          enabled: true,
          formatter: val => val + "%",
          offsetY: -20,
          style: { fontSize: '12px', colors: ["#304758"] }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: { show: false },
          axisTicks: { show: false },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: { colorFrom: '#D8E3F0', colorTo: '#BED1E6', stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 }
            }
          },
          tooltip: { enabled: true }
        },
        yaxis: {
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: { show: false, formatter: val => val + "%" }
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: { color: '#ffffff' }
        }
      }
    };
  }
};
</script>
