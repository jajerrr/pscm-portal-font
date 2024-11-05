<template>
<!-----------------------------------body-------------------------------------->
<div class="w-full h-auto relative text-[#2B2B2B] SF-TH overflow-hidden scrollContainer ">
<!-----------------------------------navbar------------------------------------>
<Nav_2 />
<!----------------------------------- content ----------------------------> 
  <div class="cb-main-content sm" >
  <div class="cb-bg "></div>
      <div  class="flex items-center justify-center px-10 pt-[13rem]">
      <!-- Left Image Section -->
      <div class=" flex justify-end pr-6">
        <img
          src="/images/e-learing/content1.jpg" 
          alt="Course Image"
          class="w-[100%] h-auto rounded-lg "
        />
</div>

<!-- Right Card Section -->
      <div class="w-[25%] p-[2rem] bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-2">CB</h2>
        <p class="text-gray-700 text-sm mb-4">
          This course examines the carotid body (CB), a multimodal sensory organ located at the junction of the common carotid artery.
        </p>
        <!-- Course Details -->
        <div class="mb-4">
          <p class="text-gray-600 text-sm">รายละเอียด</p>
          <ul class="text-gray-700 text-sm list-none space-y-1 mt-2">
            <li>⏱️ 16 นาที</li>
            <li>📚 5 หัวข้อ</li>
            <li>🎥 6 วิดีโอ</li>
            <li>✏️ 6 แบบทดสอบ</li>
          </ul>
        </div>
        <!-- Enter Course Button -->
        <NuxtLink to="/course-page">
          <button class="bg-[#FF7A00] text-white w-full py-[4%] px-[10%] rounded-[40px] hover:bg-[#D14905] transition">
            เข้าเรียน
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="px-[12rem] mt-[5rem] pb-[5rem]">
        <h3 class="text-xl font-bold mb-4">หัวข้อ</h3>
        <div class="space-y-3">
          <!-- Each topic item -->
          <div v-for="(topic, index) in topics" :key="index" 
          class="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer" 
          @click="toggleTopic(index)">
            <div>
              <div class ="flex">
              <p class="text-gray-800 text-sm">{{ topic.name }}</p>
            </div>
              <p v-if="topic.expanded" class="text-gray-600 text-xs mt-2">{{ topic.details }}</p>
            </div>
            <span v-if="topic.expanded" class="text-sm text-gray-500">{{ topic.duration }}</span>
          </div>
        </div>
      </div>
        <!----------------------------------footer content ---------------------------->
      <div id="zone8">
          <HomeFooter />
      </div>
    </div>
</template>



<script setup>
import Nav_2 from "./nav_2.vue";
import { ref } from 'vue';
// Topics data
const topics = ref([
  { name: 'Chest wall and anatomy of ventilation, Pleural cavity and lung 1', duration: '16 นาที', details: 'This is the detail for the first topic.', expanded: false },
  { name: 'Chest wall and anatomy of ventilation, Pleural cavity and lung 2', duration: '16 นาที', details: 'Details for topic two, including videos and quizzes.', expanded: false },
  { name: 'Heart and its chambers, Muscle and blood vessels', duration: '16 นาที', details: 'Details about the heart and blood vessels.', expanded: false },
  { name: 'Histology of lung', duration: '16 นาที', details: 'Histology-related information.', expanded: false },
  { name: 'Anatomy and Imaging- The heart, mediastinum, diaphragm...', duration: '16 นาที', details: 'Anatomy and imaging details.', expanded: false }
]);
// Function to toggle topic details
function toggleTopic(index) {
  topics.value[index].expanded = !topics.value[index].expanded;
}
</script>



<style>
  .cb-bg {
    @apply absolute w-full h-[70%] object-cover -translate-x-2/4 -translate-y-2/4 z-[-1] left-2/4 top-2/4
    bg-[url("assets/images/e-learning/topbg.png")] bg-cover bg-center;
  }
  .cb-main-content {
    @apply w-full   relative overflow-hidden;
}
</style>