<template>
  <div class="bg-layout h-screen flex items-center justify-center">
    <form @submit.prevent="SubmitForm" class="bg-white py-16 px-32 shadow-lg mb-20  ">
  <div class="flex items-center justify-center mb-2">
    <img  class="h-12 " src="../assets/images/logo.png" alt=""/>
  </div>
  
    <h1 class="text-center font-bold text-secondaryColor text-xl uppercase mb-6">Forgot Password</h1>
  
  <div class="mb-6">
    <label for="email" class="block font-bold mb-2 ">Email:</label>
    <input  id="email" type="email" class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b  py-2 px-10 block" v-model="email">
  </div>

  <div class="flex items-center justify-center">
    <button class=" border-4 mt-8 active:outline-none uppercase py-1 px-12 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white ">Send</button>
  </div>
  </form>
  
  </div>
  
  
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import { useRouter } from 'vue-router';

const email = ref("")
const router = useRouter();

const SubmitForm = async()=>{
if(email.value === ""){
  toast("Please Put in email",{
    autoClose:2000
  })
}else{
  try{
const response = await axios.post("https://jobee-api-1.onrender.com/api/v1/password/forgot",{
email:email.value
}
)
if(response.status === 200){
  const successMessage = response.data.message
  const resetToken = response.data.resetTokens
  
  toast(successMessage,{
    autoClose:2000
  })
  router.push(`/password/reset/${resetToken}`)
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

<style lang="scss" scoped>

</style>