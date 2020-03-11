<template lang="pug">
  <div class="testView" >
     hi This is an about page
     input(v-model'filteredJSON')
      .todos
      ul
      li(v-for='todo in myJSON' :key='id') {{todo.title}}
  </div>
  
</template>
<script>
export default {
    name:"About",
    data(){
        return{
myJSON:[],
inputFilter:''
        }

    },
    computed:{
        filteredJSON(){
            return this.myJSON.filter(element=>element.title.includes(this.inputFilter))
        }
    }
    mounted(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    }
}
</script>