<template>
    <div class="home">
      <container></container>
      <comment-form></comment-form>
    </div>
</template>

<script>
    import CommentForm from "../components/CommentForm";
    import Container from "../components/Container";

    export default {
        name: 'Home',
        components: {
            CommentForm,
            Container
        }
    }
</script>
