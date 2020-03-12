<template><!-- шаблон, в нём может находиться только 1 элемент div-->
<!-- .app
#nav 
router-link(to="/aboutMyself") AboutMyself -->
  <div class="app" >
    <div id="nav" >
      <router-link to="/aboutMyself">AboutMyself</router-link>|
      <router-link to="/hobbies">Hobbies</router-link>|
      
       
    </div>
     
    <router-view class="view one" ></router-view>
    <FooterComponent v-model='isChecked' v-on:input="sendText"></FooterComponent>
   
  </div> 
  
</template>
<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
            sendText(isChecked) {
              if (isChecked) { 
              document.querySelectorAll('.app')[0].classList.add('theme');
              } else {
                document.querySelectorAll('.app')[0].classList.remove('theme');
              }
               
            }
        },
  components: {
  
    FooterComponent,
  }
};
</script>
<style>
.theme {
    color: white !important;
    background-color: black;
    
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Merriweather", serif;
 
}
.view {
 min-height: 100vh;
}
#nav {
  padding: 30px;
}
#nav + .main_page_component {
  margin-top: calc(100vh - 190px);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
