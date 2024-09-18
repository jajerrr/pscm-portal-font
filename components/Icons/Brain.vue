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
    controls.minDistance = 1.5 // ค่าต่ำสุดของระยะทางกล้องจากโมเดล
    controls.maxDistance = 0.7  // ค่าสูงสุดของระยะทางกล้องจากโมเดล
  
    // เพิ่มแหล่งกำเนิดแสง
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)  // เพิ่มแสงรอบทิศทางเพื่อส่องสว่างฉากโดยทั่วไป
    scene.add(ambientLight)  // เพิ่มแสงรอบทิศทางลงในฉาก
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)  // เพิ่มแสงทิศทางเพื่อสร้างเงาและแสงที่ชัดเจน
    directionalLight.position.set(5,5, 9)  // ตั้งตำแหน่งของแสงทิศทางx,y,z
    scene.add(directionalLight)  // เพิ่มแสงทิศทางลงในฉาก
  
    // โหลดโมเดล GLB
    const loader = new GLTFLoader()  // สร้างตัวโหลดเพื่อโหลดโมเดล GLTF/GLB
    loader.load(
      'https://sketchfab-prod-media.s3.amazonaws.com/archives/7a27c17fd6c0488bb31ab093236a47fb/glb/65607d43d1924931b62b4e23b3407eaa/human_brain.glb?AWSAccessKeyId=ASIAZ4EAQ242MZSHMXAE&Signature=9ws4bA%2Br3Wwmlm5L%2F2bBaHOOotM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEAkaCWV1LXdlc3QtMSJGMEQCIENg5TwXJMlaQWAhETnnsbFzeNpzhE5jTTKrOzM3lEZuAiBRgr%2FDDsZyC6eDtVvvBmqJwj9qrr2potAeyIs3zoDd6yqyBQhBEAAaDDY3ODg3NDM3MTg5MiIMkZOGUJL5dW1vgNFuKo8FDplcbf9z9LubsjJXdBA2ghHE%2Fo9jOmkEHYbtQBYTZUZTZL537KxSJCnHrE6Th%2FZV0xZQPNYN%2BstuLxtb6f7htsGx38FiLoJc2HrbJ6YAiM0Ht6id3Fn%2FyyZT09R7%2FdcxObOwKPl1OnHf2tkAXkdmyfrrbtM4iTL9Bb4X1rUIm1nJqjRuy8aDs267JezjvuVchsfBqlYP9G4O7dOoGAknYd1vlIQfbyuDa%2BUt3eOrt3ILsazrs4QaWQYSvIpZxHr56agmSrmXwJN6uc5677mBeX9crmFZviLN8vOIw0HsiaTN9Y0gLHDCE5oNtVemUr6x7pd5b3GyrTmWA%2BQFIv9l%2B3SED9Vqhh0G1%2B1uT%2FYkl4e7nfiKs5XJfdyd%2FXwcIYRoP30UaRYSl12X7tLEkJNI%2BmtLHBmaud8eJprORy%2BjchCbn4HsZjh%2FbU2LWqco66xetwwP%2F6Ojohd2OPMHHAeHvjss3ty%2FXDJJTxpym9EkGn3UX%2FibyfNrlgklu5a3CRn9tIsFDl6jOCJfcrhr4PE1DlxHjyp8gJP54s5aRzPDEPO0M2aeY4beU8myN47FJ7Cgcsdsy1jrKbJXc8JkzwMQCbsxbvwgmHmaBTdm3Kkn7WNfCsX9%2BX4Mp4U0eNiFoHVWz%2B7RMO6GyqTW8gOtQ5mb8nGBaBbBVsuR4MY9RWGAKr77bAa3DyUwE4ZVOLbj%2FW7URNA3GdgvwP%2BgDOQevXAEpBYcyvB6FLo%2B1FLf2y4ZXEX4l%2Fq6EN1vIE6ZuYvoQeHtIjYlKJhZec5k5yQZbDkOh1Hq33LxJrZ049LMffoyKX%2FpJTIHb5C5Nr3xegH3%2BVoP88uB%2FdyyhjMGn9jImFeT3Eswfww89rXm5w1tI0kVOzDbmqq3BjqyAQV6RNZJKHvWg%2B3K60av7So6%2FQx5ul0Faj4zDP2dfZaH8vEljywiYAmEziq23K0lRR3t7fTTR2f5q1%2BydXlny5xBdU5QIbmvkPavjps6pZ%2FgOLwz9hxYn4ydYd%2Ff2P4UilzSu4LE%2B2NJTDTElY4hlh4Wyun1JbvFb%2Br6LF28ULsFAAPfl1FpEqUIpCD4XitBIiMHJso2gLjI3amFUck6wFNGtjmzTEwiRqnnVekrfTFjqjQ%3D&Expires=1726651604',
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
  