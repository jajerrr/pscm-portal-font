<template>
  <!-- คอนเทนเนอร์สำหรับฉากของ Three.js ซึ่งครอบคลุมหน้าจอทั้งหมด -->
  <div ref="threeContainer" class="w-full h-screen"></div>
</template>

<script setup>
import * as THREE from 'three'  // นำเข้าไลบรารีหลักของ Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'  // นำเข้าฟังก์ชัน GLTFLoader สำหรับการโหลดโมเดล 3D
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'  // นำเข้าส่วนควบคุม OrbitControls สำหรับการควบคุมกล้อง

const threeContainer = ref(null)  // อ้างอิงถึงคอนเทนเนอร์ที่จะแสดงผลฉาก
let scene, camera, renderer, controls, model  // ตัวแปรสำหรับฉาก, กล้อง, เรนเดอเรอร์, การควบคุม, และโมเดลที่โหลด

onMounted(() => {
  // ตั้งค่า scene
  scene = new THREE.Scene()  // สร้างฉากใหม่ใน Three.js

  // ตั้งค่ากล้อง
  camera = new THREE.PerspectiveCamera(
    75,  // มุมมอง (Field of view)
    window.innerWidth / window.innerHeight,  // อัตราส่วนภาพตามขนาดของหน้าต่าง
    0.1,  // แผ่นตัดใกล้ (Near clipping plane)
    100  // แผ่นตัดไกล (Far clipping plane)
  )
  camera.position.set(0, 0, 50)  // ตำแหน่งของกล้องอยู่ตรงหน้าโมเดล

  // ตั้งค่าเรนเดอเรอร์
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })  // เพิ่ม alpha: true เพื่อทำให้เรนเดอเรอร์มีพื้นหลังโปร่งแสง
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
threeContainer.value.appendChild(renderer.domElement)

// ตั้งค่าพื้นหลังของ scene ให้โปร่งแสง
scene.background = null  // หรือใช้ 'transparent' ขึ้นอยู่กับความต้องการ

   // ตั้งค่าการควบคุม
   controls = new OrbitControls(camera, renderer.domElement)  // สร้างการควบคุมสำหรับการหมุนกล้องรอบฉาก
  controls.enableDamping = true  // เปิดใช้งานการทำงานของ damping (ทำให้การลากกล้องนุ่มนวล)
  controls.dampingFactor = 0.25  // ปรับค่า damping ตามความต้องการ

  // ตั้งค่าค่าต่ำสุดและค่าสูงสุดสำหรับการย่อขยาย
  controls.minDistance = 2.3 // ค่าต่ำสุดของระยะทางกล้องจากโมเดล
  controls.maxDistance = 0.9  // ค่าสูงสุดของระยะทางกล้องจากโมเดล

  // เพิ่มแหล่งกำเนิดแสง
  const ambientLight = new THREE.AmbientLight(0xffffff, 3)  // เพิ่มแสงรอบทิศทางเพื่อส่องสว่างฉากโดยทั่วไป
  scene.add(ambientLight)  // เพิ่มแสงรอบทิศทางลงในฉาก

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)  // เพิ่มแสงทิศทางเพื่อสร้างเงาและแสงที่ชัดเจน
  directionalLight.position.set(5,5,5)  // ตั้งตำแหน่งของแสงทิศทางx,y,z
  scene.add(directionalLight)  // เพิ่มแสงทิศทางลงในฉาก

  // โหลดโมเดล GLB
  const loader = new GLTFLoader()  // สร้างตัวโหลดเพื่อโหลดโมเดล GLTF/GLB
  loader.load(
    'https://sketchfab-prod-media.s3.amazonaws.com/archives/3f8072336ce94d18b3d0d055a1ece089/glb/a2d812fe442248e291814d99db381496/realistic_human_heart.glb?AWSAccessKeyId=ASIAZ4EAQ242JCGPGXZD&Signature=lUpHcXgua%2FX4Y94k4AL1evr80JQ%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEAkaCWV1LXdlc3QtMSJGMEQCIDIO%2F1DMWoJCAHTH0DqhGEI0GNFz4uousQt84JA4LrQPAiAXG28UDKo5t%2FHlI39p3%2BUiSq8FcEVQUXAz%2Bi6V279%2BmCqyBQhCEAAaDDY3ODg3NDM3MTg5MiIMIQQyH0WnQjD4AiryKo8F9Y%2FgWDl2OJYvX87oQSCtvcmEH8oHsZbawQOPS3GvT97WTmvrFuHTOFtmX%2Bn3rSf8rIJ8As8OG33LlF8Uvj8Ieler0jl1zAcj2UionWpc7ddulBvxBV6QDuxSXXjRSskkqXMPz8C2W0qo2bv28t%2B%2B1J1nZp3Mw19HU%2FatR7rl1%2B%2BXcw4vNCz7imT%2Fn0QKjleQO0wBrBRza5EL%2BbI2ut0fEBEnUckBWts3lENxPjZUO7z3la8X0NgmmNvuZpERizKHoQzA0nxPBOUtLqvEoHYesNRySJSbvfexHKLprB2O5MFiAe6NksfmhCxHRB5rDIzSWEKtrvDzmYGw2XGvxXog6atBxZjCuIuG60mmlDRKAK%2BJWZJrEF0cWNNiPNj05TYlUR6%2FzZarJ5cu9V7AjjwcNOwTbF4c3lyL3RX99uiN0Fqk9ImkW1ZS0Uvk%2FoJBb2sFiQHEJAiVN3Zql%2BeaDuA%2BE%2FrEzolc4sbXH926UtJQVHTkBuADoYz0mRJEBfHzknbL9Aul%2BAA9sHB2mUg33O9xeIXTc7ob6cA6OEL7N%2B8A%2BDS7kEKdo00pG3wFxrYMlFxZgX0XGiSXXsRIBwbJ5DfZvkvLuvPJdxg3qLPslzZ0SWAISpobVLzMAsbaAb%2FVvgbNBiqibZ2BAo9%2FKOBwSdDl%2FM1lt%2BlNIIryoEbXnCNkEbSA7ik3FHP4QO9AHqsVHrAm3hFH1MxBZSa2kiSgIBLMX6SDTN13k9YhqdhujopmsUScvwp347Vvhf1VH5%2B%2FIY%2F9cb63espAoNizKLs5aiopDIyPO1x5fwXJpmcFkls6rdScivibPV4ImkJ1NE8lZA25PfxM9a2r9oVU1WBo7LGRK0R0YW42vX%2BRzANtgjoQ9jD0naq3BjqyAbaAWmVNnE%2BlIY683YhbTbUY5TXlc7Phz0s8tQb%2BsFbIsW3%2B%2FR2lbROYfY3YUbsn6trdLb2nMhyWCih%2Bbs4bz8eL8S%2FsNYBfIyyhOLHmaxBlIo41St%2FhlXCINFfoH84Zy2GioLBegLKxJoJAp3BfUec0ajX%2BzhPGixwcXuQNN3KJJl0blAMvifWCOvlss07RsmyuKW361LDtf9iWEvARJM%2BV54rjtQ49FNoOsWl0hSEgFOQ%3D&Expires=1726653081',
    (gltf) => {
      model = gltf.scene  // เข้าถึงฉากของโมเดลที่โหลด
      scene.add(model)  // เพิ่มโมเดลลงในฉาก

      // คำนวณกล่องขอบเขตของโมเดล
      const box = new THREE.Box3().setFromObject(model)  // คำนวณกล่องขอบเขตของโมเดลเพื่อหาขนาดของโมเดล
      const center = box.getCenter(new THREE.Vector3())  // รับตำแหน่งศูนย์กลางของกล่องขอบเขต

      // ตั้งค่าการควบคุมให้หมุนรอบศูนย์กลางของโมเดล
      controls.target.copy(center)  // ตั้งค่าการควบคุมให้มุ่งเน้นที่ศูนย์กลางของโมเดล
      controls.update()  // อัปเดตการควบคุมให้ใช้เป้าหมายใหม่

      // ปรับตำแหน่งกล้องตามขนาดของโมเดล
      const size = box.getSize(new THREE.Vector3()).length()  // คำนวณขนาดของโมเดล
      const distance = size * 1.5  // กำหนดระยะห่างของกล้องตามขนาดของโมเดล

      camera.position.set(center.x, center.y, center.z + distance)  // ตำแหน่งของกล้องเพื่อดูโมเดลทั้งหมด
      camera.lookAt(center)  // ให้กล้องมองไปที่ศูนย์กลางของโมเดล
    }
  )

  // ลูปการเคลื่อนไหว
  const animate = () => {
    requestAnimationFrame(animate)  // ขอเฟรมถัดไปเพื่อสร้างลูปการเคลื่อนไหว
    controls.update()  // อัปเดตการควบคุมในแต่ละเฟรมสำหรับการโต้ตอบที่ราบรื่น
    renderer.render(scene, camera)  // เรนเดอร์ฉากจากมุมมองของกล้อง
  }
  animate()  // เริ่มลูปการเคลื่อนไหว

  // จัดการการเปลี่ยนขนาดหน้าต่าง
  window.addEventListener('resize', onWindowResize)  // เพิ่มฟังชันการทำงานสำหรับการเปลี่ยนขนาดหน้าต่าง
})

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight  // ปรับอัตราส่วนภาพของกล้องให้ตรงกับขนาดหน้าต่างใหม่
  camera.updateProjectionMatrix()  // อัปเดตเมทริกซ์การฉายภาพของกล้อง
  renderer.setSize(window.innerWidth, window.innerHeight)  // ปรับขนาดของเรนเดอเรอร์ให้ตรงกับขนาดหน้าต่างใหม่
}

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)  // ลบฟังชันการทำงานการเปลี่ยนขนาดหน้าต่างเมื่อคอมโพเนนต์ถูกยกเลิก
  renderer.dispose()  // ปลดปล่อยทรัพยากรของเรนเดอเรอร์
  controls.dispose()  // ปลดปล่อยทรัพยากรของการควบคุม
})
</script>
