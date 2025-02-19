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
    { value: 1009, name: "หัตถการที่ 4 Intercostal Drainage" },
    { value: 958, name: "หัตถการที่ 2 Normal labor" },
    { value: 769, name: "หัตถการที่ 1 Advance CPR" },
    { value: 562, name: "หัตถการที่ 3 Intercostal Drainage" },
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
      itemGap: 18, // ✅ เพิ่มระยะห่างระหว่างบรรทัด
      textStyle: {
        fontSize: 14,
        color: "#333",
        rich: {
          name: {
            fontSize: 14,
            fontWeight: "normal",
            color: "#333",
            padding: [5, 5, 5, 0], // ✅ เพิ่ม padding ด้านขวา (เว้นที่ให้ value)

            width: 150, // ✅ บังคับให้ name มีพื้นที่เท่ากัน (ทำให้ขึ้นสองบรรทัดอัตโนมัติ)
            lineHeight: 18, // ✅ ทำให้แต่ละบรรทัดอ่านง่ายขึ้น
          },
          value: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#333",
            align: "right", // ✅ ให้ value ชิดขวา
            width: 50, // ✅ บังคับให้ตัวเลขอยู่ในพื้นที่ที่เท่ากัน
          },
        },
      },
      formatter: (name) => {
        // ✅ บังคับ name ให้ขึ้นสองบรรทัด โดยใช้ `\n`
        const item = pieData.find((item) => item.name === name);
        return `{name|${name.split(" ").slice(0, 2).join(" ")}\n${name
          .split(" ")
          .slice(2)
          .join(" ")}}   {value|${item?.value.toLocaleString() || 0}}`;
      },
    },

    series: [
      {
        name: "เกมหัตถการ",
        type: "pie",
        radius: ["50%", "70%"], // ✅ ทำให้เป็น Doughnut
        center: ["30%", "50%"], // ✅ ขยับ Pie ไปทางซ้าย
        avoidLabelOverlap: false,
        startAngle: 90, // ✅ เริ่มจากด้านบน
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderRadius: 30, // ✅ ทำให้ขอบมน
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
        left: "24%",
        top: "45%",
        style: {
          text: total.toLocaleString(),
          textAlign: "center",
          fontSize: 34,
          fontWeight: "bold",
          fill: "#333",
        },
      },
      {
        type: "text",
        left: "28%",
        top: "54%",
        style: {
          text: "คน",
          textAlign: "center",
          fontSize: 24,
          fill: "#666",
        },
      },
    ],
  });

  window.addEventListener("resize", () => myChart.resize());
});
</script>

<template>
  <div class="f-col">
    <div>
      <div class="pt-5">
        <h class="text-[#1E1F21] SF-TH-Semi text-nm p-5">เกมหัตถการ</h>
        <div class="border-t border-gray-300 my-4 p-5"></div>
      </div>
    </div>

    <div class="flex items-center justify-center SF-TH">
      <div
        class="w-full h-[400px] bg-white shadow-lg p-6 rounded-lg flex items-center"
      >
        <div ref="chartContainer" class="w-full h-full"></div>
      </div>
    </div>
  </div>
</template>
