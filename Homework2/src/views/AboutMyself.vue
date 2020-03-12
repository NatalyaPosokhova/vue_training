<template>
  <div class="aboutMyself" >
     <ImageAboutMyselfComponent></ImageAboutMyselfComponent>
     <br/>
      <br/>
     <CombinedComponent></CombinedComponent>
      
       
  </div>
  
</template>
<script>

import ImageAboutMyselfComponent from "@/components/ImageAboutMyselfComponent";
import CombinedComponent from "@/components/CombinedComponent";

export default {
    
    components: {
    ImageAboutMyselfComponent,
    CombinedComponent,
    
  },
}
</script>
<style>

</style>