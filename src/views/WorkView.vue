<template>
  <div class="Work">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h3>Mohon maaf, saya mencoba untuk consume public api tersebut namun ketika saya mencoba request http method GET <br>
      yang terjadi adalah memunculkan response 405 not allowed, <br> saya telah mencoba mencari cara dengan menambahkan
      content-type application/json<br>
      namun tidak ada yang berubah, sehingga saya tetap melanjutkan design yang tersedia saja. <br>
      Saya ingin mencoba menghubungi contact yang tersedia namun waktu ujian sudah terlanjur hampir habis. Terima kasih
    </h3>
    <img class="image" alt="Response 405 Not Allowed" src="@/assets/response405notallowed.png">
    <img class="image" alt="Response 405 Not Allowed" src="@/assets/correctresponse.png">
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'WorkView',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  object-fit: cover;
}

h3 {
  text-align: center;
}
</style>
