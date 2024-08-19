<script setup>
import {RouterView} from 'vue-router'
import TheHeader from './components/Header.vue'
import useUserStore from './stores/UserStore';
import { onMounted } from 'vue';
import TheFooter from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue';


const userStore = useUserStore()

onMounted(async()=>{
userStore.getUserDetails()
})
</script>

<template>
  <!-- <Sidebar/> -->
  <TheHeader/>
  
  <RouterView>

  </RouterView>
  <TheFooter/>

</template>

<style scoped>

</style>
