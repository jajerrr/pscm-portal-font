<template>
    <div class="nav-small">
      <ELearningNavSm2 />
    </div>
    <nav
  class="fixed top-0 left-0 z-[50] w-full bg-white text-white SF-TH nav-normal"
>
  <div class="flex p-3 space-x-3 justify-center items-center">
    <NuxtLink to="/" class="cursor-pointer">
      <img
        src="assets/images/e-learning/pscmicon.png"
        class="w-[15vw] h-auto mr-auto pl-3"
        alt="logo"
      />
    </NuxtLink>
    <div class="flex-grow flex justify-center">
      <div
        class="!scroll-smooth  px-10 py-3  flex space-x-5 items-center text-[90%] text-[#2D2D2D]"
      >
        <!-- Update links to use NuxtLink for page navigation -->
        <NuxtLink to="/" class="transition ease-in-out hover:text-[#FF7A00] cursor-pointer">หน้าแรก</NuxtLink>
        <NuxtLink to="/" class="transition ease-in-out hover:text-[#FF7A00] cursor-pointer">ประชาสัมพันธ์</NuxtLink>
        <NuxtLink to="/e-learning" class="transition ease-in-out text-[#FF7A00] cursor-pointer">e-Learning</NuxtLink>
        <a @click="scrollTo('#zone8')" class=" transition ease-in-out hover:text-[#FF7A00]  cursor-pointer">ติดต่อเรา</a>
      </div>
      
    </div>
    <div class="flex cursor-default" style="margin-right: 1rem;">
      <div class = "f-col SF-Bold text-[1vw]">
        <p class=text-[#2D2D2D]>NUTTIDA</p>
        <div class="inline-content">
                  <img
                    src="assets/images/zone4/coin 9.svg"
                    class="w-[1.5vw]"
                  />
                  <p class="text-[#FF7A00]">999</p>
                </div>
              </div>
    <img src="assets/images/e-learning/profile.png" class="cursor-pointer w-[3.5vw]" style="margin-left: 2rem;">
  </div>  
</div>
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
  