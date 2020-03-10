<template>
  <div class="aboutMyself" v-bind:style="{ backgroundImage: 'url(' + image + ')' }" >
     <h1>About Myself</h1>
      Hi, I'm Nataly.
        <p>I want to be a Frontend Developer.</p>
       
  </div>
  
</template>
<script>
import image from "@/img/womanPhotoImg.jpg"

export default {
    data() {
        return {
            image: image
        }
    }
}
</script>
<style>
.aboutMyself{
  padding-left: 60%;
  padding-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color:white;
  line-height: 1.5;

}
</style>