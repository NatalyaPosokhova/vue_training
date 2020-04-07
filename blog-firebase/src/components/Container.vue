<template>
  <div class="container">
    <img :src="link" v-for="link in imagesList" :key="link" alt="" />
  </div>
</template>

<script>
export default {
  name: "Container",
  computed: {
    imagesList() {
      return this.$store.getters.IMAGES;
    },
  },
  methods: {
    getImages() {
      this.$store.dispatch("GET_IMAGES");
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>
