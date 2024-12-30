<template>
  <NuxtLayout name="map">
    <div class="right-5 absolute top-5 cursor-pointer z-50">
      <button
        @click="toggleCard"
        class="small_card px-4 py-2 bg-orange-500 hover:bg-[rgb(255,100,28)] text-white rounded-md"
      >
        Show Card
      </button>
    </div>

    <!-- <div class="absolute top-0">
      <div class="absolute flex justify-center w-screen h-screen items-center top-0">
        <div class="z-[5] ml-[-2px]">
          <div type="button" class="w-[140px] h-[140px] bg-[#FFFFFF] rounded-full filter blur-sm"></div>
        </div>
        <div class="absolute f-col justify-center items-center z-30">
          <button 
            type="button"
            class="f-col text-white w-[120px] h-[120px] bg-[#406aa0b9] hover:bg-[#4069A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-lightbulb flex justify-center w-full mb-2" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
            </svg>
            <div class="f-col text-nm Inter-Regular mb-2">
              <div>เข้าสู่</div>
              <div>Metaverse</div>
            </div>
          </button>
        </div>
      </div>

      <div class="flex justify-center w-screen h-screen items-center pt-[20vh]">
        <img src="assets/images/map-content/poduim.png" alt="" />
      </div>
    </div> -->

    <!-- :style="{
        left: parseInt((100 / 1920) * cal1vw()) + 'px',
        bottom: parseInt((20 / 1080) * cal1vh()) + 'px',
      }" -->
    <div class="fixed left-[5%] bottom-5 hide">
      <CardsCardCoverflow class=" " />

      <div class="w-full h-auto">
        <div class="flex items-center justify-left gap-4">
          <button
            v-for="(button, index) in buttonname"
            :key="index"
            type="button"
            class="w-auto h-auto p-1  rounded-3xl text-white focus:outline-none bg-[#00000034]  border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac] flex justify-center items-center Inter-Medium"
             @click="changeCard(index)"
          >
            <img :src="getContentImageSrc(button.icons)" class="max-w-8 p-1" />
            <div>{{ button.name }}</div>
          </button>
        </div>
      </div>
    </div>

    <div class="fixed left-0 bottom-5 ">
      <BuildingCardmobile
        v-if="showCard"
        class="small_card w-[100dvw]"
        style="left: 0px !important"
      />
      <div class="w-full h-auto justify-center flex small_card">
        <div
          class="w-[100dvw] flex items-center  gap-3 scrollable-container"
          v-if="showCard"
        >
          <button
            v-for="(button, index) in buttonname"
            :key="index"
            type="button"
            class="w-auto h-auto p-1  rounded-3xl text-white focus:outline-none bg-[#00000034]  border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac] flex justify-center items-center Inter-Medium"
           @click="changeCard(index)"
          >
            <img :src="getContentImageSrc(button.icons)" class="max-w-8 p-1" />
            <div>{{ button.name }}</div>
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="absolute w-full   bottom-[15vh] left-0 z-50">
      <CardsCardCoverflow class="hide"/>
      <BuildingCardmobile v-if="showCard" class="small_card "/>
    </div>

    <div class="flex absolute bottom-3 left-10 z-[20] hide">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="flex items-center justify-center gap-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)" />
        <div>{{ button.name }}</div>
      </button>
    </div>


    <div class="flex absolute bottom-3 mt-10 left-5 z-[20] scrollable-container" v-if="showCard">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="flex items-center justify-center gap-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)" />
        <div>{{ button.name }}</div>
      </button>
    </div> -->
  </NuxtLayout>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

import {useCardStore} from './stores/cardStore.ts'

const cardData = useCardStore ();


const changeCard =(index) => {
  cardData.setCardsData(index);
};

// Button names
const buttonname = ref([
  { icons: "/images/building/Master_Line.png", name: "interactive" },
  { icons: "/images/building/form 1.png", name: "Quiz" },
  { icons: "/images/building/Test Tube.png", name: "MMI"  },
  {icons: "/images/building/Gamepad Minimalistic.png",name: "Game",},
  { icons: "/images/building/Clapperboard Play.png", name: "Video"},
  { icons: "/images/building/People Nearby.png", name: "360°"},
]);


const getContentImageSrc = (imgPath) => {
  return imgPath; // ใช้พาธที่กำหนดไว้ใน array
};

// State to control the visibility of the component
const showCard = ref(false);

// Toggle visibility
const toggleCard = () => {
  showCard.value = !showCard.value;
};

// Watch for changes in showCard and handle body scroll
watch(showCard, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = ""; // Enable scroll
  }
});

// Clean up when unmounted
onUnmounted(() => {
  document.body.style.overflow = ""; // Ensure scroll is re-enabled
});

const cal1vh = () => {
  return window.innerHeight;
};

const cal1vw = () => {
  return window.innerWidth;
};

const widthCal = ref(0);
const heightCal = ref(0);

onMounted(() => {
  widthCal.value = parseInt((190 / 1920) * cal1vw());
  heightCal.value = parseInt((190 / 1080) * cal1vh());
  console.log(widthCal.value, heightCal.value);

  window.addEventListener("resize", updateDimensions);
});

const updateDimensions = () => {
  widthCal.value = parseInt((190 / 1920) * cal1vw());
  heightCal.value = parseInt((190 / 1080) * cal1vh());
};
</script>

<style scoped>
.small_card {
  display: none;
}

.scrollable-container {
  max-width: 90%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: transparent;
  border: none;
}

@media (max-width: 1200px) {
  .hide {
    display: none;
  }

  .small_card {
    display: flex;
  }
}
</style>
