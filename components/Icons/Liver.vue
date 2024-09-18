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
    controls.minDistance = 0.5 // ค่าต่ำสุดของระยะทางกล้องจากโมเดล
    controls.maxDistance = 0.2  // ค่าสูงสุดของระยะทางกล้องจากโมเดล
  
    // เพิ่มแหล่งกำเนิดแสง
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)  // เพิ่มแสงรอบทิศทางเพื่อส่องสว่างฉากโดยทั่วไป
    scene.add(ambientLight)  // เพิ่มแสงรอบทิศทางลงในฉาก
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)  // เพิ่มแสงทิศทางเพื่อสร้างเงาและแสงที่ชัดเจน
    directionalLight.position.set(5,5, 9)  // ตั้งตำแหน่งของแสงทิศทางx,y,z
    scene.add(directionalLight)  // เพิ่มแสงทิศทางลงในฉาก
  
    // โหลดโมเดล GLB
    const loader = new GLTFLoader()  // สร้างตัวโหลดเพื่อโหลดโมเดล GLTF/GLB
    loader.load(
      'https://sketchfab-prod-media.s3.amazonaws.com/archives/90b25a002a6b44ec9a0cb8d96c5c0cb1/glb/d6218a4bb4ce405cad674f99fb30fb49/liver_3d.glb?AWSAccessKeyId=ASIAZ4EAQ242MV7GFDKW&Signature=McrpNSdniw3YTU6zLgFJbBBRClk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEAYaCWV1LXdlc3QtMSJGMEQCIH9SUoLHdO36Wc6cRWkMb6E9n1zIo%2FyzSKb13Jp%2FHa4CAiAtOtyEdIFSTqzxHKrjlja%2BOaP6jjrKjc0uHK7U2LpNFiqyBQg%2FEAAaDDY3ODg3NDM3MTg5MiIM%2BHELVHcxGLaD9U%2FnKo8Frj3H4nylF6JDyTgQWGBSIRasKNzzgzwXRJV%2Bo854e8vT%2B2doDlpIUSXaI7A%2FH0%2BudhbCIkAMEY4dBag8KIjcbmL7Vk43XK5i6nxYKPVqldWNKd3gSqB%2B3iL%2FLnl%2BKc4LkG9FxPoyuGf%2FHktPfBAZoJ58ewVczb8AQWiKEJrrYNpDKVc%2Fdwix2Q0rHq9wU1EOtpk4euIbXaUer%2Bz5zNXKK%2BXuifzerjA2A65HcQFiPk%2BmKaNhket5yJwlapScmqvqVjBaUDTvYk8cG0S7JJYpt2rD%2Fhd9ufJ%2B8fBm%2FPXo0rGH13rdyw%2FXOnefMeJFo1oy2t5P6cAwcMXYGK8bhYUb4T31ZEI%2BGBUstE22H108vd3irefRAIroLq5n%2FHBj9GhoXRbDc%2FK%2FxMnp8ACKKE0KzSFQd4VkO952yK7hDIli0cn3bgfNRTCQUvOrypucFDRUjgPwOPuFiMFpqkJ4IqvUNW9MNNVaPpI9OxclWXw94pm6QmEYzFlwGMt81WzXYG7PNGbXYMhQqHR9nWQ6Dr7yj8eKuF0knjCYOHE%2BnVSCtMEJZTbTL%2BNVe3WS9vB2OM65jATOXPuQ04J%2Bq%2FTgd1ZJ7o53cLCRFJCnV7ZOV2Oj0ZJkZvn6sbw%2FEAKte7O269%2BxI3Mgs2UfFKnLAO1Asavbti%2FmeHzntsQJrQgs0WI6c00nPSub1TYsa3dBEAdGBindjSU%2BOJAsXn5liHka7IEBpqPSOPgXxxw%2FwX%2Br8DPK75Qf423V3J8fN2AulP1h1RZo%2B5BKhtLGkdfa6uXlrwETal1bM2EEY7WJ1cSvtylTLBYB9gmfz9sCLzbSL9qICKm9AGvmOk6q4PwpjTyvmiUz3zDj%2FXvKneIohI7sHhJt2jDPzKm3BjqyAYNBpqMevV2l69ikgNm8gYvv4thGQVYpNW%2FH0MyeyXNV35U1KjwbPIEau7JZyj5XqojeAiawscNCnBK%2FBVa%2B6RKMF9aq0jGstbNHS89DFmAUSm1yj%2BfMhyoENKosnASx548Ac5fewNZhyMkdgaUkesrAFPRtv1iW4FOkMR%2Fxxc%2FBaCchFMLmHg%2FjzySeiDzvNm66S71kghj6yqV800Oi3No1yiEXTxUtZ5DETDzUobwsBMQ%3D&Expires=1726641489',
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
  