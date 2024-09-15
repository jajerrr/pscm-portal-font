<template>
  <div>
    <div class="circle">
      <div v-for="( index) in items" :key="index" class="watch">
        {{ index }}
      </div>
    </div>

    <div class="next" @click="rotateNext">
      Next
    </div>

    <div class="prev" @click="rotatePrev">
      Prev
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const items = ref([...Array(11).keys()])
let rotate = ref(0)
let step = 360 / items.value.length
let mainCircle = null

const rotateNext = () => {
  rotate.value -= step
  gsap.to(mainCircle, {
    rotation: rotate.value,
    ease: "power3.inOut",
    duration: 1
  })
}

const rotatePrev = () => {
  rotate.value += step
  gsap.to(mainCircle, {
    rotation: rotate.value,
    ease: "power3.inOut",
    duration: 1
  })
}

onMounted(() => {
  mainCircle = document.querySelector('.circle')

  gsap.set(mainCircle, { rotation: rotate.value })

  Draggable.create(mainCircle, {
    type: "rotation",
    inertia: true,
    onDrag: function () {
      let curRotation = gsap.getProperty(mainCircle, "rotation")
      rotate.value = curRotation
    },
    snap: (value) => gsap.utils.snap(step)(value)
  })
})
</script>

<style scoped lang="scss">
@mixin on-circle($item-count, $circle-size, $item-size) {
  position: relative;
  width: $circle-size;
  height: $circle-size;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: $item-size;
    height: $item-size;
    margin: -($item-size / 2);

    $angle: (360 / $item-count);
    $rot: 0;

    @for $i from 1 through $item-count {
      &:nth-of-type(#{$i}) {
        transform: rotate($rot * 1deg)
          translate($circle-size / 2)
          rotate(90deg);
      }
      $rot: $rot + $angle;
    }
  }
}

.circle {
  width: 700px;
  height: 700px;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 20%;
  border: 5px solid red;
  @include on-circle($item-count: 11, $circle-size: 600px, $item-size: 60px);
  transform-origin: center center;
}

.watch {
  width: 830px;
  height: 80px;
  border: 2px solid rgb(255, 0, 0);
  border-radius: 50%;
}

.next {
  background-color: green;
  transform: translateY(100px);
  width: 100px;
  margin-bottom: 10px;
  cursor: pointer;
}

.prev {
  background-color: red;
  transform: translateY(100px);
  width: 100px;
  cursor: pointer;
}
</style>
