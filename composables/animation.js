
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

gsap.from("#zone2-2", {
  y: 100,
  opacity: 0,
  delay: 4,
  scrollTrigger: {
    trigger: "#zone2-2",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2-2");
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInLeft');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-2");
    el.classList.remove('animate__animated', 'animate__fadeInLeft');
  }
  }
});

gsap.from("#zone2-3", {
  y: 100,
  opacity: 0,
  delay: 4,
  scrollTrigger: {
    trigger: "#zone2-3",
    start: "top 60%",
    end: "bottom 40%",
    scrub: true,
    toggleActions: "play reset play reset",
  onEnter: () => {
    const el = document.querySelector("#zone2-3");
    el.classList.remove('animate__animated');
    void el.offsetWidth; // บังคับให้รีเฟรชการ reflow เพื่อให้แอนิเมชันเริ่มใหม่
    el.classList.add('animate__animated', 'animate__fadeInRight');
  },
  onLeaveBack: () => {
    const el = document.querySelector("#zone2-3");
    el.classList.remove('animate__animated', 'animate__fadeInRight');
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
