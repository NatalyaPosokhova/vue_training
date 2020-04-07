<template>
  <form @submit.prevent="onUpload">
    <input
      name="myFile"
      ref="file"
      accept="image/png"
      @change="previewImage"
      type="file"
    />
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  computed: {
    imageDataList() {
      return this.$store.getters.IMAGEDATA;
    },
    pictureList() {
      return this.$store.getters.PICTURE;
    },
    uploadValueList() {
      return this.$store.getters.UPLOADVALUE;
    },
  },
  methods: {
    previewImage(event) {
      this.$store.commit("PREVIEW_IMAGE", event);
    },
    onUpload() {
      this.$store.commit("ON_UPLOAD");
    },
  },
};
</script>

<style scoped></style>
