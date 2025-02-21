

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import * as echarts from "echarts";
import { useTotalMonthlyDataStore } from "/stores/totalMonthlyData.js";

const store = useTotalMonthlyDataStore();

// สร้าง computed เพื่อคำนวณและใช้งานค่า totalMonthlyData
const totalMonthlyDataComputed = computed(() => store.totalMonthlyData);

// สร้าง ref สำหรับ chartContainer
const chartContainer = ref(null);

// ฟังก์ชันในการสร้าง pieData และอัปเดต chart
const generateRandomData = (baseValue) => {
  return [
    { value: Math.floor(baseValue * Math.random() * 0.15), name: "หัตถการที่ 4 Intercostal Drainage" },
    { value: Math.floor(baseValue * Math.random() * 0.15), name: "หัตถการที่ 2 Normal labor" },
    { value: Math.floor(baseValue * Math.random() * 0.15), name: "หัตถการที่ 1 Advance CPR" },
    { value: Math.floor(baseValue * Math.random() * 0.15), name: "หัตถการที่ 3 Intercostal Drainage" },
  ];
};

onMounted(() => {
  const myChart = echarts.init(chartContainer.value);

  // เรียกใช้เพื่ออัปเดตกราฟเมื่อค่ามีการเปลี่ยนแปลง
  const updateChart = () => {
    const pieData = generateRandomData(totalMonthlyDataComputed.value); // สร้าง pieData จาก totalMonthlyData
    myChart.setOption({
      tooltip: { trigger: "item" },
      legend: {
      orient: "vertical",
      right: "5%",
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

            width: 120, // ✅ บังคับให้ name มีพื้นที่เท่ากัน (ทำให้ขึ้นสองบรรทัดอัตโนมัติ)
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
          radius: ["50%", "70%"], // ทำให้เป็น Doughnut
          center: ["30%", "50%"],
          avoidLabelOverlap: false,
          startAngle: 90, // เริ่มจากด้านบน
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
            borderRadius: 30, // ทำให้ขอบมน
          },
          data: pieData,
        },
      ],
    });

    // แสดงตัวเลขตรงกลางแบบอัตโนมัติ
    myChart.setOption({
      graphic: [
        {
          type: "text",
          left: "24%", // ตรงกลาง Pie จริง ๆ
          top: "45%",
          style: {
            text: totalMonthlyDataComputed.value.toLocaleString(), // ใช้ค่าที่คำนวณมาแสดง
            textAlign: "center",
            fontSize: 34,
            fontWeight: "bold",
            fill: "#333",
          },
        },
        {
          type: "text",
          left: "28%", // ตรงกลาง Pie จริง ๆ
          top: "54%", // ขยับลงหน่อย
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
  };

  // เรียกใช้ฟังก์ชัน updateChart ในการตั้งค่ากราฟตอนเริ่มต้น
  updateChart();

  // ใช้ watch เพื่อติดตามการเปลี่ยนแปลงของ totalMonthlyData
  watch(totalMonthlyDataComputed, () => {
    updateChart(); // เรียกฟังก์ชัน updateChart เมื่อค่ามีการเปลี่ยนแปลง
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

    <div>
      <div class="flex items-center justify-center">
        <div
          class="w-full h-[400px] bg-white shadow-lg p-6 rounded-lg flex items-center"
        >
          <div ref="chartContainer" class="w-full h-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>