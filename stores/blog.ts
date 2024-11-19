import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", {
    state: () => ({
        contentBlog: [
            {
                header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
                desc: "เชิญชวนคณะอาจารย์ทุกท่าน มาร่วมกันแชร์วิธีประหยัดพลังงานในมหาวิทยาลัยกันครับ ",
                user: "/images/blog/profile.png",
                name: "NUTTIDA",
                date: "26 สิงหาคม 2566",
                comment: "15",
                comments: [
                    {
                        user: "wilawan.k",
                        text: "ปิดแอร์ก่อนเลิกงานกลับบ้าน 30 นาทีค่ะ เป็นวิธีที่ทำมาตลอด",
                        userImage: "/images/blog/profile.png",
                    },
                    {
                        user: "Tam Tempo",
                        text: "การลดการใช้พลังงานในอาคารช่วยลดค่าไฟได้ดีมาก",
                        userImage: "/images/blog/profile.png",
                    },
                ],
            },
            {
                header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
                desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
                user: "/images/blog/profile.png",
                name: "NUTTIDA",
                date: "22 สิงหาคม 2566",
                comment: "5",
                comments: [],
            },
            {
                header: "Let’s SAVE วิธีประหยัดพลังงานในมหาวิทยาลัย",
                desc: "การจะมีความฝันหรือว่าไม่มีความฝันไม่ใช่ทุกคนที่จ",
                user: "/images/blog/profile.png",
                name: "NUTTIDA",
                date: "22 สิงหาคม 2566",
                comment: "5",
                comments: [],
            },
        ]
        
    }),
    

});