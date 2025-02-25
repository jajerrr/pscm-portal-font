<template>
  <NuxtLayout name="editmap">
      <div v-for="(button, index) in buttons"
          :key="index"
          :ref="el => buttonRefs[index] = el"
          :style="{ position: 'absolute', left: button.x + 'px', top: button.y - 10 + 'px' }"
          class="cursor-move"
          @mousedown="(event) => startDrag(event, index)"
      >
          <button type="button" :class="button.class">
              <img class="w-[25px]" src="assets/images/map-content/Gamepad Minimalistic.png" alt="Gamepad">
              <div class="text-sm Inter-Regular">{{ button.label }}</div>
          </button>
      </div>
      
    
      <div class="absolute top-5 right-5 flex flex-row gap-2">
          <button @click="savePositions" class="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
              Save Position
          </button>
      </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const buttons = ref([]);
const buttonRefs = ref([]);
let dragging = false;
let offsetX = 0;
let offsetY = 0;
let currentIndex = null;

const startDrag = (event, index) => {
    dragging = true;
    currentIndex = index;
    offsetX = event.clientX - buttons.value[index].x;
    offsetY = event.clientY - buttons.value[index].y;
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event) => {
    if (dragging && currentIndex !== null) {
        buttons.value[currentIndex].x = Math.min(
            Math.max(event.clientX - offsetX, 10), 
            window.innerWidth - 100
        );
        buttons.value[currentIndex].y = Math.min(
            Math.max(event.clientY - offsetY, 10), 
            window.innerHeight - 110
        );
    }
};

const stopDrag = () => {
    dragging = false;
    currentIndex = null;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
};

const savePositions = () => {
    localStorage.setItem("buttonPositions", JSON.stringify(buttons.value));
    alert("บันทึกแล้ว!");
};

onMounted(() => {
    const savedPositions = JSON.parse(localStorage.getItem("buttonPositions"));
    if (savedPositions) {
        buttons.value = savedPositions;
    } else {
        const startX = window.innerWidth - 350;
        const startY = window.innerHeight - 70;
        buttons.value = [
            { x: startX + 80, y: startY, label: "ปุ่ม 1", class: "px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700" },
            { x: startX + 160, y: startY, label: "ปุ่ม 2", class: "px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700" },
            { x: startX + 240, y: startY, label: "ปุ่ม 3", class: "px-4 py-2 bg-yellow-600 text-white rounded shadow hover:bg-yellow-700" }
        ];
    }
});
</script>

<style scoped>
.cursor-move {
    cursor: grab;
}
</style>
