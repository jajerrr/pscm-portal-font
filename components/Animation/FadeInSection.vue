<template>
  <div 
    ref="fadeInSection" 
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave"
    :class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      hasAnimated: false, // ใช้เพื่อตรวจสอบว่าอนิเมชันเล่นไปแล้วหรือไม่
    };
  },
  methods: {
    handleMouseEnter() {
      if (!this.hasAnimated) {
        this.isVisible = true;  // เริ่มอนิเมชันเมื่อเมาส์เข้าสู่เฟรม
        this.hasAnimated = true; // ทำเครื่องหมายว่าอนิเมชันได้เล่นไปแล้ว
      }
    },
    handleMouseLeave() {
      // ถ้าคุณต้องการให้อนิเมชันเล่นซ้ำเมื่อเมาส์ออกแล้วกลับเข้ามา
      // คุณสามารถรีเซ็ตสถานะ isVisible และ hasAnimated ได้ที่นี่
      this.isVisible = false;
      this.hasAnimated = false;
    }
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมได้ถ้าต้องการ */
</style>
