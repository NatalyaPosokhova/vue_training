<template>
  <div class="combined_component"  >
      <ImageComponent></ImageComponent>
     <SkillsComponent></SkillsComponent>
     
    
  </div>
</template>
<script>
import SkillsComponent from "@/components/SkillsComponent";
import ImageComponent from "@/components/ImageComponent";

export default {
    components: {
    
    SkillsComponent,
    ImageComponent,
    
  },
}
</script>
<style scoped>
.combined_component{
      display: flex;
}
.combined_component > div {
  width: 45%;
}
</style>