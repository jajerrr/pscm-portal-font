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
      'https://sketchfab-prod-media.s3.amazonaws.com/archives/7a27c17fd6c0488bb31ab093236a47fb/glb/65607d43d1924931b62b4e23b3407eaa/human_brain.glb?AWSAccessKeyId=ASIAZ4EAQ242M4DKZ2UV&Signature=R3FXUUNicMOhpx4%2FpI24mxT3PqU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEB8aCWV1LXdlc3QtMSJHMEUCIQD2po3wwRRUXI0DIkOul4hLhiwgwoSvyFt2071wKL6EHwIgLTd39IcviA3fhBcqYGWkzLaoj5Mt65GfHZGZhroLS6IqsgUIWBAAGgw2Nzg4NzQzNzE4OTIiDPmgcBao3cePSC02PyqPBbbolB%2BEHlwYjJMf8gc47dOvsB85llPLPOu0c31fyiRIYC1Ei%2FgQ7sS8cRFLKHRL5EACJG78yEsEspeNr1FtWSJGQb4bNGieikk7gWORSJZXplMJ1SbKStjxvTylYkEjf%2FdcAuJyzR7R6M002cUiWLpV5Mj6seacHwi3Jc6ilO0NyHMz9WGbIG%2FnCk50qcT3iW0k3CXiQHv90fAMFr359%2FAYLU%2Fq1j55wyRXfsh3r3mt5zEABPBiyCb935frI58410zc6TeFqSpiw4vMum5OtIFL1zNj8pyts347IVERAMkKTyR%2BKOrxXdFf6PN05jbjY7JcE4W%2BVoObJBbE7QrkI%2FTxrnx4k8ntUBJjLZ87BjCr%2BcYVL0BXGZvfg76f4CULMkc0rk5Avi2o6xAXUHaKlRVg8jT4nB8Fn394RbhCOL5ihWUaS9a2Ui5H9ZajToUye6STJBZuBwSKtbELY4OW5OVo6jhWBJGsQb7WjNk4HkcY5zraO7Rgii%2Fe9bmSSCiH82PdYJ3B68bLMnWzDFJGEjS%2BZhJtgDuVM4Z1nAQrgrVvXUls5pZgX5uEjnNrHxCoJ1x%2BCxju1qCiGQDvt8RN6VBuwAhLRn%2B5tgvhPi%2Bw3umyOrL9FLD5AUhyDJvHnW%2F3o5ZiITXFbydVeViZHS57BlcrhQVSofbdk7D4ktStpDuUA6wZCVwKI%2BODiBnajH0dMnFlLRRlQnOwwXWlGpQKaV2SE2wGcFjjra1HynCDe%2FSW1whroJQShJSaVFYun5qzAZzMXsv8%2FipabFhbUXcsGNqb3wLuqlvXYaecoAuHI4y1DMxTl3jMzOsy8O%2BmNRAqQTqT3ECFYHCHFAq9PVICDz1CWJQ3Z8eRf2OKrmnLKf4w1ZWvtwY6sQGM2d59SGGYhRQJRDkTRLF9J8zR8Bq8NkwY0lNQH3sZWg1HCuv%2BItTW1Yaq%2FXXNGTLNUhgz5Dvw6EB5uzAJtDmW3i4np4HcfVtnGB1ZkVzKLU8QLotcSi1teaZgaO2hjSWS8u5DUTzpY1l2zUj1rGR1FjZlzzEQVA5x40KuWghig7gkHb5qB8NRa%2FflAsw3fu%2Ffv8gynW4e%2Bc8a%2Fph4OFNQSzq3sMRNO6ds4vf9EHvCMao%3D&Expires=1726731596',
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
  