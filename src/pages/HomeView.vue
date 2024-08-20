<template>
  <div class="">
    <!-- //search input -->
    <form class="w-1/2 flex mt-[2%] m-auto justify-center items-center">
      <input
        type="text"
        class="bg-input w-5/6 py-1 px-1 text-secondaryColor border-secondaryColor border-4 transition-all duration-300 focus:outline-none rounded-md focus:w-full"
        placeholder="Search Jobs"
        v-model="keyword"
      />
      <i class="fa-solid fa-magnifying-glass -ml-6 text-secondaryColor"></i>
    </form>
    <!-- //filter selection -->
    <div class="Jobtype mt-[2%] flex flex-col items-center justify-center">
      <h2 class="font-semibold">Filter for Job Type</h2>
      <select
        v-model="JobType"
        class="bg-input w-6/3 py-1 px-2 outline-none text-secondaryColor border-secondaryColor border-4 rounded-md"
      >
        <option value="Temporary">Temporary</option>
        <option value="Permanent">Permanent</option>
      </select>
    </div>
    <!-- //jobs -->
    <ul class="container py-3 mt-[5%] m-auto">
      <JobCard :Jobs="Jobs" />
    </ul>
  </div>
</template>

<script setup>
import useUserStore from "@/stores/UserStore";
import JobCard from "@/components/JobCard.vue";
import axios from "axios";
import { onMounted, watch } from "vue";
import { ref } from "vue";

const Jobs = ref([]);
const keyword = ref("");
const JobType = ref("");

//get jobs function
const getJobs = async () => {
  const params = {};

  if (keyword.value) params.keyword = keyword.value;
  if (JobType.value) params.jobType = JobType.value;

  const response = await axios.get(
    `https://jobee-api-1.onrender.com/api/v1/jobs`,
    { params }
  );
  console.log(response.data.data.jobs);
  Jobs.value = response.data.data.jobs;
};

// getJobs();

  getJobs();


watch([keyword, JobType], () => {
  getJobs();
});
</script>
