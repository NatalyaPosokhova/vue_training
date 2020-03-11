<template>
  <div class="image_component" v-bind:style="{ backgroundImage: 'url(' + image2 + ')' }">
  <img :src = "image2"><img>
  <SkillsComponent></SkillsComponent>
  </div>
</template>
<script>
import image2 from "@/img/womanPhoto2Img.jpg"
import SkillsComponent from "@/components/SkillsComponent";

export default {
     data() {
        return {
            image2: image2
        }
    },
    props: ["image"],
  components: {
    SkillsComponent,
  },
    
}
</script>