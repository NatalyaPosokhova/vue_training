<template>
  <div class="main_page_component"  >
      <footer>
     
        <span>© 2020 </span>
        <span itemprop="name" >ООО «Наталья Посохова»</span>
         <!-- <input type="checkbox" v-model="isChecked" @change="$emit('input222', $event.target.checked)"/>  -->
         <input type="checkbox" v-model="isChecked" @change="$emit('input', isChecked);"/> 
    </footer>
    
  </div>
</template>
<script>
export default {
     props: {
         isChecked: {
         type: Boolean,
         default: false
            }
     }
      
};
</script>
<style>
footer {
  height: 110px;
  background-color: black;
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 10px;

}
 /* .app.theme{
    color:white !important;
    background-color: black;
} */


</style>