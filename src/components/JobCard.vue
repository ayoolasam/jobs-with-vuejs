<template>
  <li v-for="job in Jobs" :key="job._id" class="px-12 py-12 bg-layout shadow-lg p-8 mb-6">
    <RouterLink :to="`/job/${job._id}`">
      <h2 class="font-bold uppercase hover:text-secondaryColor">{{ job.title }}</h2> 
    </RouterLink>
    
     <h3 class="font-semibold ">{{ job.address }}</h3>
     <span class="text-secondaryColor">{{ job.jobType }}</span>
     <span class="block">{{ job.lastDate }}</span>
     <RouterLink :to="`/job/${job._id}`"  >
      <button class="block    border-4 mt-4 active:outline-none uppercase py-1 px-6 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white">Check Job</button>
     </RouterLink>
    
  </li>
</template>

<script setup>
import {defineProps} from 'vue'
import {RouterLink} from 'vue-router'

const props = defineProps([
  "Jobs"
])
</script>


<style scoped>

</style>