<template>
    <div ref="fadeInSection" :class="{ 'animate__animated animate__fadeInUp': isVisible }">
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
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;  // แสดงอนิเมชันเมื่อองค์ประกอบอยู่ในมุมมอง
            } else {
              this.isVisible = true; // รีเซ็ตสถานะเมื่อออกจากมุมมอง
            }
          });
        },
        { threshold: 0.1 }
      );
  
      observer.observe(this.$refs.fadeInSection);
    },
  };
  </script>
  
  <style scoped>
  /* อาจเพิ่มสไตล์เพิ่มเติมได้ถ้าต้องการ */
  </style>
  