<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div v-for="(item, index) in items" :key="index" :class="['item', { active: activeItem === index }]"
          @click="handleItemClick(index)">
          ชั้น
          {{ index + 1 }}
        </div>
        <svg viewBox="0 0 400 400">
          <circle id="holder" class="st0" cx="200" cy="200" r="200" />
        </svg>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useItemStore } from '@/stores/item.ts'  // Import store

gsap.registerPlugin(MotionPathPlugin)

// Reactive state
const items = new Array(8).fill(0)
const activeItem = ref(0)
const tracker = ref({ item: 0 })
const itemStep = 1 / 8
const numItems = 8

// Other variables
let tl = null
let circlePath = null
let snap = null
let wrapProgress = null
let wrapTracker = null

// Use the store to share activeItem
const itemStore = useItemStore()

const initGSAP = () => {
  circlePath = MotionPathPlugin.convertToPath('#holder', false)[0]
  circlePath.id = 'circlePath'
  document.querySelector('svg').prepend(circlePath)

  const itemsArray = gsap.utils.toArray('.item')
  const numItemsLocal = itemsArray.length
  const itemStepLocal = 1 / numItemsLocal

  snap = gsap.utils.snap(itemStepLocal)
  wrapProgress = gsap.utils.wrap(0, 1)
  wrapTracker = gsap.utils.wrap(0, numItemsLocal)

  gsap.set(itemsArray, {
    motionPath: {
      path: circlePath,
      align: circlePath,
      alignOrigin: [0.5, 0.5],
      end: (i) => i / numItemsLocal,
    },
    scale: 1.3, 
    //scale : 1
  })

  tl = gsap.timeline({ paused: true, reversed: true })

  const initialRotation = -720 / numItemsLocal
  tl.to('.wrapper', {
    rotation: initialRotation,
    transformOrigin: 'center',
    duration: 0,
    ease: 'none',
  })

  tl.to('.wrapper', {
    rotation: 360 + initialRotation,
    transformOrigin: 'center',
    duration: 1,
    ease: 'none',
  })

  tl.to(
    itemsArray,
    {
      rotation: '-=360',
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    },
    0
  )

  tl.to(
    tracker.value,
    {
      item: numItemsLocal,
      duration: 1,
      ease: 'none',
      modifiers: {
        item: (value) => wrapTracker(numItemsLocal - Math.round(value)),
      },
    },
    0
  )
}

const moveWheel = (amount) => {
  let progress = tl.progress()
  tl.progress(wrapProgress(snap(tl.progress() + amount)))
  let next = tracker.value.item
  tl.progress(progress)

  activeItem.value = next

  gsap.to(tl, {
    progress: snap(tl.progress() + amount),
    modifiers: {
      progress: wrapProgress,
    },
  })
}

const handleItemClick = (index) => {
  const current = tracker.value.item
  const diff = current - index

  if (index === current) return

  activeItem.value = index
  itemStore.setActiveItem(index)  // Update activeItem in the store

  // ตรวจสอบว่าค่า 
  console.log('Active item updated in store:', index)
  console.log('Store activeItem:', itemStore.activeItem) // printค่าที่เก็บในstore

  if (Math.abs(diff) < numItems / 2) {
    moveWheel(diff * itemStep)
  } else {
    const amt = numItems - Math.abs(diff)
    if (current > index) {
      moveWheel(amt * -itemStep)
    } else {
      moveWheel(amt * itemStep)
    }
  }
}


onMounted(() => {
  initGSAP()

  const initialRotation = -720 / numItems
  gsap.set('.wrapper', { rotation: initialRotation })
})


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  position: absolute;
}

.container {
  display: flex;
  justify-content: center;
  /* จัดกลางแนวนอน */
  align-items: center;
  /* จัดกลางแนวตั้ง */
  height: 100vh;
  /* ใช้ความสูงของ viewport */
  width: 100vw;
  /* ใช้ความกว้างของ viewport */
  position: relative;
}

.wrapper {
  position: relative;
  width: 500px;
  /* ขนาดของ wrapper */
  height: 500px;
  /* ขนาดของ wrapper */
}

.item {

  width: 70px;
  /* ขยายขนาดของ item */
  height: 70px;
  /* ขยายขนาดของ item */
  color: #4D5986;
  text-align: center;
  line-height: 70px;
  font-size: 15px;
  /* ปรับขนาดตัวอักษร */
  font-family: "SF-TH", "SF-Pro";
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 1;
  cursor: pointer;
  transform: translate3d(740px, 326px, 0px) rotate(90deg);
  /* ปรับตำแหน่งใหม่ */
}

.item.active {
  color: rgb(255, 255, 255);
  background: linear-gradient(160deg, rgba(255, 235, 217, 1) 17%, rgba(255, 118, 0, 1) 100%);
}

.item:hover {
  background-color: #ff9f46;
  /* สีเมื่อ hover */
}

svg {
  height: 500px;
  /* ขยายขนาดของ SVG */
  width: 500px;
  /* ขยายขนาดของ SVG */
  overflow: visible;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.st0 {
  fill: none;

}

.start {
  position: absolute;
  top: 0%;
  left: 45%;
}

@media (max-width: 950px) {
  .wrapper {
    width: 400px;
    height: 400px;
  }

  .item {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    transform: translate3d(350px, 176px, 0px) rotate(90deg);  
  }

  svg {
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 750px) {
  .wrapper {
    width: 300px;
    height: 300px;
  }

  .item {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    transform: translate3d(150px, 0px, 0px) rotate(90deg);
  }

  svg {
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
  }
}

</style>
