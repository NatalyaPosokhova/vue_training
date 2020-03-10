<template>
  <div class="hobbies_component">
    <li>
        {{hobby.title}}
    </li>
  </div>
</template>
<script>
export default {
  props: {
    hobby: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
li{
    
    margin-right: 30%;
    margin-left: 30%;
    font-size:14pt;
}
</style>