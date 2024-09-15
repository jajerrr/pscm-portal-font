<template>
    <div class="content-w-re content-nm mb-[30%]">
      

        <div class="f-center mt-[5%] mb-[20%] z-[13]">
            <div class="j-center items-stretch h-auto mt-[10%]">
                <div class="absolute w-1/2 mt-[-10%]">
                    <div class="f-re text-[#4D5986] SF-TH-Semi" style="max-width: 1800px">
                        <img src="assets/images/zone3/lift-zone3.svg" class="image-full-ab" />

                        <div
                            class="wheel-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button type="button" class="w-[7vw] h-[7vw] z-3-bt text-white"
                                style="background: linear-gradient(127deg, #ffebd9, #ff7600)">
                                ชั้น<br />03
                            </button>
                            <button type="button" class="w-[5vw] h-[5vw] z-3-bt hover:bg-[#ff9f44]">
                                ชั้น<br />02
                            </button>
                            <button type="button" class="w-[5vw] h-[5vw] z-3-bt hover:bg-[#ff9f44]">
                                ชั้น<br />04
                            </button>
                            <button type="button" class="w-[5vw] h-[5vw] z-3-bt hover:bg-[#ff9f44]">
                                ชั้น<br />01
                            </button>
                            <button type="button" class="w-[5vw] h-[5vw] z-3-bt hover:bg-[#ff9f44]">
                                ชั้น<br />05
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </div>


    </div>
</template>
<script >
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export default {
  setup() {
    onMounted(() => {
      const wheelContainer = document.querySelector(".wheel-container");
      if (!wheelContainer) {
        console.error("Element with class 'wheel-container' not found");
        return;
      }

      let rotate = 0;
      const step = 72; // ขนาดการหมุนในแต่ละขั้น
      
      Draggable.create(wheelContainer, {
        type: "rotation",
        inertia: true,
        onDrag() {
          const curRotation = gsap.getProperty(wheelContainer, "rotation");
          rotate = curRotation;
        },
        snap(value) {
          rotate = Math.round(value / step) * step;
          return rotate;
        }
      });
    });
  }
};
</script>

<style>
.wheel-container {
    width: 200px;
    /* ขนาดวงกลม */
    height: 200px;
    /* ขนาดวงกลม */
    position: relative;
}

.wheel-container button {
    position: absolute;
    transform-origin: center;
}

.wheel-container button:nth-child(1) {
    transform: rotate(0deg) translateY(-100px);
}

.wheel-container button:nth-child(2) {
    transform: rotate(72deg) translateY(-100px);
}

.wheel-container button:nth-child(3) {
    transform: rotate(144deg) translateY(-100px);
}

.wheel-container button:nth-child(4) {
    transform: rotate(216deg) translateY(-100px);
}

.wheel-container button:nth-child(5) {
    transform: rotate(288deg) translateY(-100px);
}
</style>