<template lang='pug'>
    ul
    li(v-for='item in myList')
</template>
<script>
export default {
    name:'LinkList',
    props{
        myList:Array
    },
    data(){
        return{

        }

    },
    beforeCreate(){
        console.log('I am not created yet')
    }
    mounted(){
        console.log(this.myList)
    }
    
}
</script>