<template>
<ul class="container py-3 mt-[5%] m-auto">
  
<JobCard :Jobs="Jobs"/>

</ul>
</template>

<script setup>
  import useUserStore from '@/stores/UserStore';
  import JobCard from '@/components/JobCard.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import {ref} from 'vue'

  
  const Jobs = ref([])

const getJobs = async () => {
const response = await axios.get("https://jobee-api-1.onrender.com/api/v1/jobs")
console.log(response.data.data.jobs)
Jobs.value = response.data.data.jobs
}

// getJobs();
onMounted(()=>{
  getJobs();
})

</script>