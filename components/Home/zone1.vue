<template>
  
    <div class="first-main-content sm " >
      
      <div class="z1-name-layout z1-name-layout-sm animate__animated animate__bounceInUp"  >
       
        <h1  class="z1-header z1-header-sm " >METAVERSE</h1>
        <div class="i-center mt-[-5vw] header2-sm ">
          <img
            src="assets/images/Rectangle 43068.svg"
            class="w-[15%] h-auto object-cover line-sm"
            
          />
          <h1   class="z1-header2 z1-header2-sm">PSCM</h1>
        </div>


          <button
            type="button"
            class="bt-z1
            "
            
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
              class="img-men img-men-sm animate__animated animate__bounceInUp"
              
              
             
            />
            <img
              src="assets/images/women01.png"
              class="img-women img-women-sm animate__animated animate__bounceInUp"
              
              
              
            />
       
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
  gsap.from("b1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#b1",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none reset",
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
      toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone2");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone2");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
    }
  });

  gsap.from("#zone3", {
  y: 100,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: "#zone3",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone3");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone3");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  }
});
  gsap.from("#zone4", {
    y: 100,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#zone4",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      toggleActions: "play none none reset",
      onEnter: () => {
      const el = document.querySelector("#zone4");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone4");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
    }
  });
  gsap.from("#zone5", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#zone5",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone5");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone5");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
    }
  });
  gsap.from("#zone6", {
    y: 100,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: "#zone6",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone6");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone6");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
    }
  });
  gsap.from("#zone7", {
    y: 100,
    opacity: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#zone7",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone7");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone7");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
    }
    }
  });
  gsap.from("#zone8", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#zone8",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play reset play reset",
    onEnter: () => {
      const el = document.querySelector("#zone8");
      el.classList.remove('animate__animated');
      void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
      el.classList.add('animate__animated', 'animate__fadeInUp');
    },
    onLeaveBack: () => {
      const el = document.querySelector("#zone8");
      el.classList.remove('animate__animated', 'animate__fadeInUp');
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