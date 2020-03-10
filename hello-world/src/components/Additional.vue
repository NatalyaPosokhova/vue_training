<template>
  <div class="hobbies_component">
    <ul>
      <HobbiesComponent
        v-for="hobby of hobbies"
        v-bind:hobby="hobby"
        v-bind:key="hobby.id"
      
      />
    </ul>
  </div>
</template>
<script>
import HobbiesComponent from "@/components/HobbiesComponent";
export default {
  props: ["hobbies"],
  components: {
    HobbiesComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  padding-left: 10px;
  
}
</style>
