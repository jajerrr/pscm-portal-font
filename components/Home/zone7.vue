<template>
  <div class="content-w-re mb-[15%]">
    <div class="f-col f-center mb-[5%] mt-[5%]">
      <h class="header">Our service</h>
      <h1 class="th-header">บริการของเรา</h1>
      <IconsUnderline />
    </div>

    <!----------------------------------------------------  card service  --------------------------------------------------------->
    <div class="f-center">
      <div class="f-row  card-container">
        <div
          class="relative  mx-[10px] card-item"
          v-for="(card, index) in serviceCard"
          :key="index"
        >
          <div class="container-z7">
            <IconsZone7-1 v-if="card.icon == 1" />
            <IconsZone7-2 v-if="card.icon == 2" />
            <IconsZone7-1 v-if="card.icon == 3" />

            <div class="card-head-z7">{{ card.header }}</div>
            <div class="card-desc-z7">{{ card.desc }}</div>
            <div class="flex w-full">
              <IconsAllowupright />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const serviceCard = ref([
  {
    icon: 1,
    header: "บริการทางการศึกษา",
    desc: "ผลิตบัณฑิตที่มีความเป็นเลิศด้านวิชาการและวิชาชีพพร้อมบริการสังคมด้วยความรู้ความชำนาญคุณธรรมจริยธรรมและความมุ่งมั่น",
  },
  {
    icon: 2,
    header: "บริการทางการแพทย์และสาธารณะสุข",
    desc: "ทุกชีวิตของคนไข้คือหัวใจของเรา",
  },
  {
    icon: 3,
    header: "งานวิจัย นวัตกรรม และความร่วมมือ",
    desc: "บูรณาการงานวิจัยและเทคโนโลยีสู่นวัตกรรมเพื่อเศรษฐกิจสังคมและคุณภาพชีวิตที่ดีของประชาชน",
  },
]);
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;

}

.card-item {
  flex: 1;
  min-width: 0;
}

@media (max-width: 500px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    padding-inline: 10%;
    margin-inline: 5%;
  }

  .card-item {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
