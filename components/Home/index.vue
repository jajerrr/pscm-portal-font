<template>
  <!-----------------------------------body-------------------------------------->

  <div class="w-full h-auto relative text-[#2B2B2B] SF-TH overflow-hidden scrollContainer ">

    <!-----------------------------------navbar------------------------------------>
    <HomeNavbar />

    <!-----------------------------------first content ---------------------------->
    <div id="zone1">
      <HomeZone1 />
    </div>
    <!---------------------------------- second content --------------------------->
    <div class = "mt-[20%]">
      <HomeZone2 />
    </div>
    <!-----------------------------------third content ---------------------------->
    
      <div class="bg-[#F3F7FD]">
<div   class = "mt-[30%]" id = "zone3"
>
  
        <!-- <HomeZone3/> -->
         <HomeScroll />
        

      </div>

      <!-----------------------------------forth content ---------------------------->
      
      <div class = "mt-[30%]"  id = "zone4">
        <HomeZone4 />
      </div>

      <!-----------------------------------fiv content ---------------------------->

      <div class = "mt-[30%]" id="zone5">
        <HomeZone5 />
      </div>


      <!-----------------------------------six content ------------------------------>

      <div class = "mt-[30%]" id="zone6">
        <HomeZone6 />
      </div>

      <!-----------------------------------seven content ---------------------------->
      <div class = "mt-[30%]" id="zone7">
        <HomeZone7 />
      </div>

      <!----------------------------------footer content ---------------------------->
      <div id="zone8">
        <HomeFooter />
      </div>
      </div>

   

  </div>
</template>

<script setup>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

</script>
