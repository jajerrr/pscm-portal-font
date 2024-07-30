<template>
  <div class="content-w-re mt-[5%] mb-[10%]">
    <div class="f-col f-center mb-[5%]">
      <h class="header">3D Learning object</h>
      <div class="flex-glow j-center w-full px-[10%]">
        <h class="th-header">วิทยาลัยสร้างสรรค์</h>
      </div>
      <IconsUnderline />
    </div>

    <div class="f-center  flex-container">
      <div
        class="w-1-2-center card-container ml-[10%] p-[6%]"
        v-for="(card, index) in detailCard"
        :key="index"
      >
        <div class="container-z6 p-[15%]">
          <div class="carder-header-z6">{{ card.header }}</div>
          <div class="card-desc-z6">{{ card.desc }}</div>
        </div>
      </div>
      <div class="w-1-2-center image-container">
        <img
          src="assets/images/zone6/heart_3d 1.png"
          class="w-[25vw] h-full uppercase"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const detailCard = ref([
  {
    header: "หัวใจ",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
  },
]);
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 650px) {
  .flex-container {
    flex-direction: column;
  }

  .image-container {
    order: 1;
    margin-bottom: 5%;
  }

  .card-container {
    order: 2;
    width: 100%;
    margin-left: 0;
    padding-inline: 5%;
    margin-inline: 5%;
  }
}
</style>
