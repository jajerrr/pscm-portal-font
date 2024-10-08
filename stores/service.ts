import { defineStore } from "pinia";
import type { ServiceCardItem } from "@/interfaces/service.ts";
import axios from "axios";

// export const useServiceCardStore = defineStore("serviceCard", {
//   state: () => ({
//     serviceCards: [
      // {
      //   icon: 1,
      //   header: "บริการทางการศึกษา",
      //   desc: "ผลิตบัณฑิตที่มีความเป็นเลิศด้านวิชาการและวิชาชีพพร้อมบริการสังคมด้วยความรู้ความชำนาญคุณธรรมจริยธรรมและความมุ่งมั่น",
      // },
      // {
      //   icon: 2,
      //   header: "บริการทางการแพทย์และสาธารณะสุข",
      //   desc: "ทุกชีวิตของคนไข้คือหัวใจของเรา",
      // },
      // {
      //   icon: 3,
      //   header: "งานวิจัย นวัตกรรม และความร่วมมือ",
      //   desc: "บูรณาการงานวิจัยและเทคโนโลยีสู่นวัตกรรมเพื่อเศรษฐกิจสังคมและคุณภาพชีวิตที่ดีของประชาชน",
      // },
//     ] as ServiceCardItem[],
//   }),

// });

export const useServiceCardStore = defineStore("serviceCard", {
  state: () => ({
    serviceCards: [] as ServiceCardItem[],  
  }),
  actions: {
    async fetchServiceCards() {
      try {
        const response = await axios.get('https://api.example.com/services'); 
        this.serviceCards = response.data;  // เก็บข้อมูลใน state
      } catch (error) {
        console.error('Error fetching service cards:', error);
      }
    }
  }
});
