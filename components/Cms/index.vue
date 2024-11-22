<template class="bg-gray-500">
    <div class="w-full h-auto relative text-[#2B2B2B] SF-TH overflow-hidden scrollContainer cursor-default">
       
          <CmsNavCms />
     
          <!----------------------------------- content ---------------------------->
        
  
  
          <!----------------------------------footer content ---------------------------->
  
  
  
  
  
      </div>
  </template>
  
  <script setup>
  
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
  
  
  </script>
  
  <style>
  
  
  
  </style>