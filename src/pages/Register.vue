<template>
  <div class="bg-layout h-screen flex items-center justify-center">
    
<form @submit.prevent="submitForm" class="bg-white py-12 px-32 shadow-lg mb-20  ">
  <div class="flex items-center justify-center mb-2">
    <img  class="h-10 " src="../assets/images/logo.png" alt=""/>
  </div>
  <h1 class="text-center font-bold text-secondaryColor text-2xl uppercase mb-6">Register</h1>
  <div class="mb-6">
    <label for="name" class="block text-lg  font-bold mb-2">Name:</label>
    <input  id="name" type="text" class=" text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="user.name">
  </div>
  <div class="mb-6">
    <label for="email" class="block font-bold mb-2 ">Email:</label>
    <input  id="email" type="email" class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="user.email">
  </div>
  <div class="mb-6">
    <label for="password" class="block font-bold mb-2">Password:</label>
    <input  id="password" type="password" class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="user.password">
  </div>
  <div class="flex items-center justify-center">
    <button class=" border-4 mt-8 active:outline-none uppercase py-1 px-12 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white">
      Register
    </button>
  </div>
  <RouterLink to="/login">
    <div class="mt-4 hover:text-black text-secondaryColor flex items-center justify-center">
 <span> Have an Account? login</span>
</div>
  </RouterLink>

</form>
  </div>
</template>



<script setup>

import { ref } from "vue";
import { toast } from 'vue3-toastify';
import {reactive} from 'vue'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import {useRouter} from 'vue-router'
import useUserStore from "@/stores/UserStore";

const user = reactive({
  name:"",
  email:"",
  password:""
})
const router = useRouter()
const userStore = useUserStore()
// const name =ref("")
//  const email = ref("")
//  const password = ref("")



 const submitForm = async ()=>{
  if(user.name ==="" || user.email === "" || user.password === ""){
toast("please fill in details",{
  autoClose:1000
})

  }
  else{
    try{
      const response = await axios.post("https://jobee-api-1.onrender.com/api/v1/register",user,{
        withCredentials: true
      })
    if(response.status === 200){
      toast("User registered successfully",{
        autoClose:2000
      })
      userStore.getUserDetails()
      userStore.isAuthenticated = true
      router.push("/")
      user.name = ""
      user.email = ""
      user.password = ""
    }
    }catch(err){
      const errorMessage = err.response?.data?.errMessage || "An error occurred";
      toast(errorMessage,{
        autoClose:2000
      })
    
    }
      }
 }


</script>