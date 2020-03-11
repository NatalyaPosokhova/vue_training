<template><!-- шаблон, в нём может находиться только 1 элемент div-->
<!-- .app
#nav 
router-link(to="/aboutMyself") AboutMyself -->
  <div class="app">
    <div id="nav">
      <router-link to="/aboutMyself">AboutMyself</router-link>|
      <router-link to="/hobbies">Hobbies</router-link>|
    
    </div>
    <router-view class="view one"></router-view>
       
  </div>
</template>
<script>


export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    
  }
};
</script>
<style>

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
