<template>
  <div class="hobbies_view">
    <h1 v-bind:style="hobbies.length%2===0 ? 'color:green' : 'color:red'">My Hobbies</h1>
    <Additional v-bind:hobbies="hobbies"></Additional>
  </div>
</template>
<script>
import Additional from "@/components/Additional";
export default {
  
  data() {
    return {
      hobbies: [
        { id: 1, title: "Programming"},
        { id: 2, title: "Running" },
        { id: 3, title: "Swimming"},
        { id: 4, title: "Reading"},
      ]
    };
  },
  components: {
    Additional
  }
};
</script>
