<script setup>
import {RouterView} from 'vue-router'
import TheHeader from './components/Header.vue'
import useUserStore from './stores/UserStore';
import { onMounted } from 'vue';



const userStore = useUserStore()

onMounted(async()=>{
userStore.getUserDetails()
})
</script>

<template>
  
  <TheHeader/>
  
  <RouterView>

  </RouterView>
</template>

<style scoped>

</style>
