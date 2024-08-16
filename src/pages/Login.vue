<template>
  <div class="bg-layout h-screen flex items-center justify-center">
    
<form @submit.prevent="submitForm" class="bg-white py-16 px-32 shadow-lg mb-20  ">
  <div class="flex items-center justify-center mb-2">
    <img  class="h-12 " src="../assets/images/logo.png" alt=""/>
  </div>
  
    <h1 class="text-center font-bold text-secondaryColor text-2xl uppercase mb-6">Login</h1>
  
  <div class="mb-6">
    <label for="email" class="block font-bold mb-2 ">Email:</label>
    <input  id="email" type="email" class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="email">
  </div>
  <div class="mb-6">
    <label for="password" class="block font-bold mb-2">Password:</label>
    <input  id="password" type="password" class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="password">
  </div>
  <div class="flex items-center justify-center">
    <button class=" border-4 mt-8 active:outline-none uppercase py-1 px-12 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white ">Login</button>
  </div>
  <RouterLink to="/register">
    <div class="mt-4 hover:text-black text-secondaryColor flex items-center justify-center">
 <span>Dont Have an Account? Register</span>
</div>
  </RouterLink>

</form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import {useRouter} from'vue-router'
import useUserStore from "@/stores/UserStore";


 const email = ref("")
 const password = ref("")
const router = useRouter()
const userStore= useUserStore()


 const submitForm = async ()=>{
      if(email.value === "" || password.value === "" ){
        toast("Please fill in details to continue",{
          autoClose:2000
        })
      }else{
        try{
        const response = await axios.post("https://jobee-api-1.onrender.com/api/v1/login",{
          email:email.value,
         password: password.value
        },{
          withCredentials:true
        });
        if(response.status === 200){
          toast("Logged in successfully",{
            autoClose:2000
          })
          router.push("/")
          userStore.getUserDetails()
          userStore.isAuthenticated = true
          email.value = ""
          password.value = ""
         
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