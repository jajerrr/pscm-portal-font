<template>
    <!-----------------------------------body-------------------------------------->
  
    <div class="w-full h-auto relative text-[#2B2B2B] SF-TH overflow-hidden scrollContainer ">
  
      <!-----------------------------------navbar------------------------------------>
      
      
  
      <!-----------------------------------first content ---------------------------->
      <div id="zone1">
      <Topzone />
       </div>

      
  
        <!----------------------------------footer content ---------------------------->
        <div id="zone8">
          <HomeFooter />
        </div>
      
  
  
  
    </div>
  </template>
  
  <script setup>
  
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Topzone from "./topzone.vue";
import NavlinkElearn from "./navlinkElearn.vue";
import Contentzone from "./contentzone.vue";
import Nav_2 from "./nav_2.vue";
  
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
  </script>
  