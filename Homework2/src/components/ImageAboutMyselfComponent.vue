<template lang="pug">

  <div class="img_about_myself_component" v-bind:style="{ backgroundImage: 'url(' + image + ')' }" >
    <h1>About Myself</h1>
      <p>Hi, I'm Nataly.</p>
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
    },
    
}
</script>
<style scoped>
.img_about_myself_component{
  padding-left: 60%;
  padding-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color:white;
  line-height: 1;

}

</style>
