<template>
  <div class="nav-small">
    <HomeNavbarSm />
  </div>
  <nav
    class="fixed top-0 left-0 z-[50] w-full 
     bg-nav text-white SF-TH 
    nav-normal ">
    <div class ="flex p-3 space-x-3 justify-center 
    items-center "> 
    <a  @click="scrollTo('#zone1')">
    <img  src="assets/images/pscm-logo.png" class="cursor-pointer w-[15vw] h-auto mr-auto pl-3" alt="logo" />
    </a>
    <div class="flex-grow flex justify-center ">
      <div class=" !scroll-smooth bg-[#CDCDCD] px-10 py-3 rounded-full flex space-x-5 items-center text-[90%] text-[#2D2D2D]">
        <a @click="scrollTo('#zone1')" class="transition ease-in-out hover:text-[#FF7A00] cursor-pointer  ">หน้าแรก</a>
        <a @click="scrollTo('#zone2')" class="transition ease-in-out hover:text-[#FF7A00] cursor-pointer ">ประชาสัมพันธ์</a>
        <NuxtLink to="/e-learning" class="transition ease-in-out hover:text-[#FF7A00] cursor-pointer">e-Learning</NuxtLink>
        <a @click="scrollTo('#zone8')" class="transition ease-in-out hover:text-[#FF7A00]  cursor-pointer">ติดต่อเรา</a>
      </div>
    </div>
    <p class="text-[90%] hover:text-[#FF7A00] cursor-pointer transition ease-in-out">ยังไม่สมัครสมาชิก?</p>
    <div class="text-[#AFCFFF] text-[90%] hover:underline cursor-pointer transition ease-in-out">
      <NuxtLink to="" >สมัครสมาชิก</NuxtLink>
    </div>
    <NuxtLink to="">
      <button type="button"
        class=" transition ease-in-out text-white bg-[#FF7A00] hover:bg-[#e06600] font-medium rounded-full text-[90%] p-2 text-center me-2 mb-2 ]">
        เข้าสู่ระบบ
      </button> 
      <!-- ffd166 -->
    </NuxtLink></div>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  methods: {
    scrollTo(element) {
      VueScrollTo.scrollTo(element, 800)
    }
  }
}

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const animatedElement = ref(null);

onMounted(() => {
  gsap.from(animatedElement.value, {
    duration: 1,
    opacity: 0,
    y: -50,
    delay: 1, // เพิ่ม delay ที่นี่
    ease: 'power1.out'
  });
});
</script>

<style>
.nav-small {
  display: none;
}

@media (max-width: 730px) {
  .nav-small {
    display: block;
  }

  .nav-normal {
    display: none;
  }
}
</style>
