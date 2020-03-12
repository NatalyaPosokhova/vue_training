<template>
  <div class="image_component">
  <img :src = "image2"><img>
  
  </div>
</template>
<script>
import image2 from "@/img/womanPhoto2Img.jpg"


export default {
     data() {
        return {
            image2: image2
        }
    },
    props: ["image"],
  components: {
   
  },
    
}
</script>
<style scoped>
img {
  width: 500px;
  height: auto;
  opacity: 0.75;
  background-repeat: no-repeat;
  
}
</style>