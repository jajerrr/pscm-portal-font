<template>
  
    <div class="first-main-content sm " >
      <div id="b1">
      <div class="z1-name-layout z1-name-layout-sm"  >
       
        <h1  class="z1-header z1-header-sm" >METAVERSE</h1>
        <div class="i-center mt-[-5vw] header2-sm">
          <img
            src="assets/images/Rectangle 43068.svg"
            class="w-[15%] h-auto object-cover line-sm"
            
          />
          <h1   class="z1-header2 z1-header2-sm">PSCM</h1>
        </div>


          <button
            type="button"
            class="bt-z1"
            
          >
            Get start
          </button>
     
<div style="display: flex;
  justify-content: flex-end;
  margin-right: 2%;">
          <button
            type="button"
            class="bt-z1-sm"
          >
            Get start
          </button></div>
        
      </div>
       
          <img
              src="assets/images/men01.png"
              class="img-men img-men-sm"
              
             
            />
            <img
              src="assets/images/women01.png"
              class="img-women img-women-sm"
              
              
            />
       </div>
          <img
            src="assets/images/waveheader.svg"
            class="image-ab bottom-0 w-full"
            alt=""
          />
        
    </div>
   
</template>


<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from("#b1", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b1",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        // ลบคลาสอนิเมชันเพื่อให้อนิเมชันเล่นอีกครั้ง
        document.querySelector("#b1").classList.remove('animate__animated');
        void document.querySelector("#b1").offsetWidth; // Trigger a reflow
        document.querySelector("#b1").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });

  gsap.from("#zone2", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#zone2",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#zone2").classList.remove('animate__animated');
        void document.querySelector("#zone2").offsetWidth;
        document.querySelector("#zone2").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });

  gsap.from("#b3", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b3",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#b3").classList.remove('animate__animated');
        void document.querySelector("#b3").offsetWidth;
        document.querySelector("#b3").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
  gsap.from("#b4", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b4",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#b4").classList.remove('animate__animated');
        void document.querySelector("#b4").offsetWidth;
        document.querySelector("#b4").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
  gsap.from("#b5", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b5",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#b5").classList.remove('animate__animated');
        void document.querySelector("#b5").offsetWidth;
        document.querySelector("#b5").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
  gsap.from("#b6", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b6",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#b6").classList.remove('animate__animated');
        void document.querySelector("#b6").offsetWidth;
        document.querySelector("#b6").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
  gsap.from("#b7", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#b7",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        document.querySelector("#b7").classList.remove('animate__animated');
        void document.querySelector("#b7").offsetWidth;
        document.querySelector("#b7").classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
});
</script>


<style>
.bt-z1-sm{
  display: none;
}
@media (max-width:750px){
  .sm {
    width: 100%;
    height: 70vh;
    background: bg-image;
    position: relative;
    overflow:hidden;
}
  .z1-name-layout-sm{
    margin-top:13vh;
}
.z1-header-sm{
  font-size: 10vw;
  font-weight: 650;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

.header2-sm{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.z1-header2-sm{
  font-size: 14vw;
  font-weight: 650;
}
.line-sm{
  width:22%;
}
.img-men-sm{
  left:-5vw;
  width: 23vh;
  top:23vh;
}
.img-women-sm{
  left:20vw;
  width: 20vh;
  top:27vh;
}
.bt-z1-sm{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.bt-z1{
  display: none;
}

}
</style>