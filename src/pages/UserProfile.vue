<template>
  <div class="py-8 px-10 h-screen">
    <div class="mt-[5%] m-auto shadow-xl px-6 py-10 bg-slate-200 text-secondaryColor italic text-xl">
      <h1 class="font-bold uppercase py-4"> Name:{{ userStore.user.name }}</h1>
<h2 class="font-semibold"> Email:{{ userStore.user.email }}</h2>
<span>{{ userStore.user.createdAt}}</span>
  </div>
   

  </div>
</template>

<script setup>
import useUserStore from '@/stores/UserStore';



const userStore = useUserStore()

</script>

<style scoped>

</style>