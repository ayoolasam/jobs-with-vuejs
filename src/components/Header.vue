<template>
  <nav class="p-6 flex justify-between items-center shadow-md">
    <img  class="h-10" src="../assets/images/logo.png" alt="logo" />


    <div class="navigation">
<ul class="flex gap-10  text-secondaryColor uppercase font-medium text-lg">
  <li  class="hover:text-primaryColor">Jobs</li>

  <RouterLink to="/">
    <li class="hover:text-primaryColor">Home</li>
  </RouterLink>
  <li class="hover:text-primaryColor">Dashboard</li>
</ul>
    </div>


    <div v-if="userStore.isAuthenticated" class="text-black flex items-center gap-4">
      <h2 class="font-bold text-xl uppercase">{{ userStore?.user?.name}}</h2>
      <select v-model="selected" @change="handleChange" class=" shadow-md active:outline-none font-semibold uppercase text-secondaryColor py-4 px-4 border-secondaryColor border-b">
        
        <option value="Profile">Profile</option>
        <option value="Logout">LogOut</option>
      </select>
<!--      
      <button  @click="logout" class="border-4 active:outline-none uppercase py-1 px-6 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white" >
        Logout
    </button> -->
    </div>

    
      <RouterLink to="login" v-else>
      <button  class="border-4 active:outline-none uppercase py-1 px-6 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white" >
        Login
      </button>
      </RouterLink>
     
   
   
  </nav>
</template>

<script setup>
  import useUserStore from '@/stores/UserStore';
import { ref } from 'vue';
import {useRouter} from 'vue-router'
  const userStore = useUserStore();
  
const router = useRouter();
  const selected = ref("Profile")

  userStore.getUserDetails()
  



const handleChange = ()=>{
  if(selected.value === "Logout"){
    try{
       userStore.logOut()
   router.push("/Login")
    }catch(err){
      console.log(err)
    }
  
  }
 
}



</script>