<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartContainer = ref(null);

onMounted(() => {
  if (!chartContainer.value) return;

  const myChart = echarts.init(chartContainer.value, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  // ✅ ตั้งค่า Data
  const pieData = [
    { value: 1009, name: "Lobby" },
    { value: 958, name: "ชั้นที่ 1" },
    { value: 769, name: "ชั้นที่ 2" },
    { value: 562, name: "ชั้นที่ 3" },
  ];

  // ✅ คำนวณผลรวมของค่าทั้งหมด
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  // ✅ ตั้งค่า Pie Chart (Doughnut)
  const option = {
    tooltip: { trigger: "item" },
    legend: {
  orient: "vertical",
  right: "10%",
  top: "center",
  icon: "circle", // ✅ จุดสีของ legend เป็นวงกลม
  itemGap: 25, // ✅ เพิ่มระยะห่างระหว่างบรรทัด
  textStyle: {
    fontSize: 14,
    color: "#333",
    rich: {
      name: {
        fontSize: 14,
        fontWeight: "normal",
        color: "#333",
        padding: [5, 5, 5, 0], // ✅ เพิ่ม padding ด้านขวา (เว้นที่ให้ value)
        width: 180, // ✅ บังคับให้ name มีพื้นที่เท่ากัน (ทำให้ value อยู่ตรงกัน)
        overflow: "truncate", // ✅ ถ้าชื่อยาวเกิน จะตัดข้อความ
      },
      value: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        align: "right", // ✅ ให้ value ชิดขวา
        width: 40, // ✅ บังคับให้ value อยู่ชิดขวาแบบเท่ากัน
      },
    },
  },
  formatter: (name) => {
    // ✅ หา value ที่ตรงกับชื่อ และแสดงเลขตามหลัง
    const item = pieData.find((item) => item.name === name);
    return `{name|${name}}  {value|${item?.value.toLocaleString() || 0}}`;
  },
},


    series: [
      {
        name: "เกมหัตถการ",
        type: "pie",
        radius: ["50%", "70%"], // ✅ ทำให้เป็น Doughnut
        center: ["30%", "50%"],
        avoidLabelOverlap: false,
        startAngle: 90, // ✅ เริ่มจากด้านบน
        label: {
          show: false,
          position: "outside", // Label อยู่ด้านนอก
          fontSize: 14,
          fontWeight: "bold",
        },
        labelLine: {
          show: false,
          length: 15,
          length2: 10,
          lineStyle: { width: 1, color: "#999" },
        },
        itemStyle: {
          borderRadius: 30, // ✅ ทำให้ขอบมน (ค่ามาก = มนมากขึ้น)
        },

        data: pieData,
      },
    ],
  };

  myChart.setOption(option);

  // ✅ แสดงตัวเลขตรงกลางแบบอัตโนมัติ
  myChart.setOption({
    graphic: [
      {
        type: "text",
        left: "24%", // ✅ ตรงกลาง Pie จริง ๆ
        top: "45%",
        style: {
          text: total.toLocaleString(), // ✅ ใช้ค่าที่คำนวณมาแสดง
          textAlign: "center",
          fontSize: 34,
          fontWeight: "bold",
          fill: "#333",
        },
      },
      {
        type: "text",
        left: "28%", // ✅ ตรงกลาง Pie จริง ๆ
        top: "54%", // ✅ ขยับลงหน่อย
        style: {
          text: "คน",
          textAlign: "center",
          fontSize: 24,
          fontWeight: "normal",
          fontfamily: "Internet",
          fill: "#666",
        },
      },
    ],
  });

  window.addEventListener("resize", () => myChart.resize());
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div
      class="w-full h-[400px] bg-white shadow-lg p-6 rounded-lg flex items-center"
    >
      <div ref="chartContainer" class="w-full h-full"></div>
    </div>
  </div>
</template>
