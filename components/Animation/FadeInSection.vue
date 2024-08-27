<template>
  <div 
    ref="slideInUp" 
    :class="{ 'animate__animated animate__slideInUp': isVisible }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const slideInUp = this.$refs.slideInUp;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { bottom } = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          
          // ตรวจสอบว่าตำแหน่ง bottom ของ element อยู่ที่ 20% ของ viewport หรือไม่
          if (bottom < viewportHeight * 0.8) {
            this.isVisible = true; // เริ่มแอนิเมชัน
            observer.unobserve(slideInUp); // หยุดการสังเกต
          }
        }
      });
    }, {
      threshold: [0] // ใช้ threshold = 0 เพื่อให้เกิดการตรวจจับเมื่อมีการตัดผ่าน
    });

    observer.observe(slideInUp);
  },
};
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
/* เพิ่มสไตล์เพิ่มเติมได้ถ้าต้องการ */
</style>
