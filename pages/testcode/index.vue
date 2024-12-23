<template>
  <NuxtLayout name="map">
       
    
    <div class="right-5 absolute top-5 cursor-pointer z-50"> 
      
      <button 
        @click="toggleCard" 
        class="small_card px-4 py-2 bg-orange-500 hover:bg-[rgb(255,100,28)] text-white rounded-md">
        Show Card
      </button>
    </div>

   
    <div class="fixed"
        :style="{ left: parseInt((100 / 1920) * cal1vw()) + 'px', bottom: parseInt((20 / 1080) * cal1vh()) + 'px' }">
        <CardsCardCoverflow class="hide"/>
        <BuildingCardmobile v-if="showCard" class="small_card "/>
        <div class="w-full h-auto">
          <div class="flex items-center justify-left gap-4 hide">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="w-auto h-auto p-1   flex justify-center items-center Inter-Medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)"  class ="max-w-8 p-1"/>
        <div>{{ button.name }}</div>
      </button>
    </div>

    <div class="flex items-center justify-left gap-4  scrollable-container" v-if="showCard">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="w-auto h-auto p-1   flex justify-center items-center Inter-Medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)"  class ="max-w-8 p-1"/>
        <div>{{ button.name }}</div>
      </button>
    </div>

    
          
        </div>
      </div>

  </NuxtLayout>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";

// Button names
const buttonname = ref([
  {icons: '/images/building/Master_Line.png', name: 'interactive', path: ''},
  {icons: '/images/building/form 1.png', name: 'Quiz', path: ''},
  {icons: '/images/building/Test Tube.png', name: 'MMI', path: ''},
  {icons: '/images/building/Gamepad Minimalistic.png', name: 'Game', path: ''},
  {icons: '/images/building/Clapperboard Play.png', name: 'Video', path: ''},
  {icons: '/images/building/People Nearby.png', name: '360°', path: ''},
]);

const router = useRouter();

const getContentImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array
};

// Function to navigate
function navigateTo(path) {
  router.push(path);
}

// State to control the visibility of the component
const showCard = ref(false);

// Toggle visibility
const toggleCard = () => {
  showCard.value = !showCard.value;
};

// Watch for changes in showCard and handle body scroll
watch(showCard, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'; // Disable scroll
  } else {
    document.body.style.overflow = ''; // Enable scroll
  }
});

// Clean up when unmounted
onUnmounted(() => {
  document.body.style.overflow = ''; // Ensure scroll is re-enabled
});


const cal1vh = () => {
  return window.innerHeight;
}

const cal1vw = () => {
  return window.innerWidth;
}

const widthCal = ref(0);
const heightCal = ref(0);

onMounted(() => {
  widthCal.value = parseInt(190 / 1920 * cal1vw());
  heightCal.value = parseInt(190 / 1080 * cal1vh());
  console.log(widthCal.value, heightCal.value)

  window.addEventListener('resize', updateDimensions);
});

const updateDimensions = () => {
  widthCal.value = parseInt(190 / 1920 * cal1vw());
  heightCal.value = parseInt(190 / 1080 * cal1vh());
}
</script>

<style scoped>
.small_card {
  display: none;
}

.scrollable-container {
  width:90%;     
  overflow-x: auto;     
  overflow-y: hidden;   
  display: flex;        
  flex-direction: row; 
  gap: 10px;
  background: transparent;
  border: none;
  
}

@media (max-width: 1200px){
  .hide {
    display: none;
  }

  .small_card{
    display: flex;
  }
}
</style>
