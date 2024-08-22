<template>
  <div ref="bounceIndown" :class="{ 'animate__animated animate__bounceInDown': isVisible }">
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
            this.isVisible = true; // เริ่มอนิเมชันเมื่อเข้ามาในมุมมอง
            // observer.unobserve(this.$refs.bounceIndown); // หยุดสังเกตการณ์หลังจากที่อนิเมชันเล่นไปแล้ว
          }
          else {
              this.isVisible = true; // รีเซ็ตสถานะเมื่อออกจากมุมมอง
            }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.$refs.bounceIndown);
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมได้ถ้าต้องการ */
</style>
