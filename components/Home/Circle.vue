<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div v-for="(item, index) in items" :key="index" :class="['item', { active: activeItem === index }]"
          @click="handleItemClick(index)">
          {{ index + 1 }}
        </div>
        <svg viewBox="0 0 400 400">
          <circle id="holder" class="st0" cx="200" cy="200" r="200" />
        </svg>
      </div>
    </div>
    <!-- <div class="container space-x-4" style="text-align: center;">
      <button @click="moveWheel(itemStep)">Prev</button>
      <button @click="moveWheel(-itemStep)">Next</button>
    </div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default {
  data() {
    return {
      items: new Array(8).fill(0),
      activeItem: 0,
      tracker: { item: 0 },
      itemStep: 1 / 8,
      numItems: 8,
      tl: null,
      circlePath: null,
      snap: null,
      wrapProgress: null,
      wrapTracker: null,
    };
  },
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    this.initGSAP();
    
    const initialRotation = -720 / this.numItems; // ปรับมุมหมุนเริ่มต้น
    gsap.set('.wrapper', { rotation: initialRotation });
  },
  methods: {
    initGSAP() {
      this.circlePath = MotionPathPlugin.convertToPath('#holder', false)[0];
      this.circlePath.id = 'circlePath';
      document.querySelector('svg').prepend(this.circlePath);

      const items = gsap.utils.toArray('.item');
      const numItems = items.length;
      const itemStep = 1 / numItems;

      this.snap = gsap.utils.snap(itemStep);
      this.wrapProgress = gsap.utils.wrap(0, 1);
      this.wrapTracker = gsap.utils.wrap(0, numItems);

      gsap.set(items, {
        motionPath: {
          path: this.circlePath,
          align: this.circlePath,
          alignOrigin: [0.5, 0.5],
          end: (i) => i / numItems,
        },
        scale: 1.3,
      });

      this.tl = gsap.timeline({ paused: true, reversed: true });

      const initialRotation = -720 / numItems;
      this.tl.to('.wrapper', {
        rotation: initialRotation,
        transformOrigin: 'center',
        duration: 0,
        ease: 'none',
      });

      this.tl.to('.wrapper', {
        rotation: 360 + initialRotation,
        transformOrigin: 'center',
        duration: 1,
        ease: 'none',
      });

      this.tl.to(
        items,
        {
          rotation: '-=360',
          transformOrigin: 'center',
          duration: 1,
          ease: 'none',
        },
        0
      );

      this.tl.to(
        this.tracker,
        {
          item: numItems,
          duration: 1,
          ease: 'none',
          modifiers: {
            item: (value) => this.wrapTracker(numItems - Math.round(value)),
          },
        },
        0
      );
    },
    moveWheel(amount) {
      let progress = this.tl.progress();
      this.tl.progress(this.wrapProgress(this.snap(this.tl.progress() + amount)));
      let next = this.tracker.item;
      this.tl.progress(progress);

      this.activeItem = next;

      gsap.to(this.tl, {
        progress: this.snap(this.tl.progress() + amount),
        modifiers: {
          progress: this.wrapProgress,
        },
      });
    },
    handleItemClick(index) {
      const current = this.tracker.item;
      const diff = current - index;

      if (index === current) return;

      this.activeItem = index;

      if (Math.abs(diff) < this.numItems / 2) {
        this.moveWheel(diff * this.itemStep);
      } else {
        const amt = this.numItems - Math.abs(diff);
        if (current > index) {
          this.moveWheel(amt * -this.itemStep);
        } else {
          this.moveWheel(amt * this.itemStep);
        }
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  position: relative;
}

.container {
  position: relative;
  width: 800px; /* ปรับขนาดของ container */
  margin: auto;


}

.wrapper {
  position: relative;
  width: 500px; /* ปรับขนาดของ wrapper */
  height: 500px; /* ปรับขนาดของ wrapper */
}

.item {
  width: 70px; /* ขยายขนาดของ item */
  height: 70px; /* ขยายขนาดของ item */
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 70px;
  font-size: 30px; /* ปรับขนาดตัวอักษร */
  font-family: "Roboto", sans-serif;
  border-radius: 100%;
  background-color: rgb(175, 175, 175);
  z-index: 1;
  cursor: pointer;
  transform: translate3d(546px, 226px, 0px) rotate(90deg); /* ปรับตำแหน่งใหม่ */
}

.item.active {
  background-color: #ff8400;
}

svg {
  height: 500px; /* ขยายขนาดของ SVG */
  width: 500px; /* ขยายขนาดของ SVG */
  overflow: visible;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.st0 {
  fill: none;
  /* stroke: #000000;
  stroke-width: 1;
  stroke-miterlimit: 1; */
}

.start {
  position: absolute;
  top: 0%;
  left: 45%;
}
</style>
