<template>
  <div   id="b1" class="flex h-screen animate__animated animate__backInLeft">
    <div class="size-[300px] rounded-lg bg-green-400 shadow-sm ml-[20%] mt-[20%]"></div>
  
  </div>

  <div id="b2" class="flex h-screen i-center j-center animate__animated">
    <div class="size-[300px] rounded-lg bg-red-800 shadow-sm"></div>
  </div>

  <div id="b3" class="flex h-screen i-center j-center animate__animated">
    <div class="size-[300px] rounded-lg bg-blue-300 shadow-sm"></div>
  </div>

  <div id="b4" class="flex h-screen i-center j-center animate__animated">
    <div class="size-[300px] rounded-lg bg-black shadow-sm"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const animateElement = (selector, animationClass) => {
    gsap.from(selector, {
      y: 100,
      opacity: 0,
      delay: 1,
      scrollTrigger: {
        trigger: selector,
        markers: true,
        onEnter: () => {
          const element = document.querySelector(selector);
          element.classList.remove(animationClass); // Remove the class to reset the animation
          void element.offsetWidth; // Trigger a reflow to restart the animation
          element.classList.add(animationClass); // Re-add the class to play the animation
        },
        onLeave: () => {
          const element = document.querySelector(selector);
          element.classList.remove(animationClass); // Optionally remove the class when the element is out of view
        }
      }
    });
  };

  animateElement("#b1", 'animate__rotateInUpRight');
  animateElement("#b2", 'animate__backInLeft');
  animateElement("#b3", 'animate__fadeInRight');
  animateElement("#b4", 'animate__rotateInDownLeft');
});
</script>
