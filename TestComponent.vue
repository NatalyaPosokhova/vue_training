<template>
  <div class="test_component">
    <p v-bind:msg="message" v-on:click="deleteMessage()">111111111111</p>
    input(v-model='message')
    input(type='checkbox' v-model='isRed')
    hello-world(:msg="message v-bind:style="IsRed ? 'color:red':''")
    h1()
      </div>
</template>
<script>
import LinkList from "@/components/LinkList";
export default {
    name:TestComponent,
    components:{
        LinkList
        },
  data(){
      return{
          message:'Welcome',
          isRed=false,
      }
  },
  methods:{
      deleteMessage(){
          this.message='';
      }
  },
  mounted(){
      console.log('I am mounted')
  },
  computed:{
myVariable(){

},

  }
};
</script>
<style scoped>
.TestComponent
</style>