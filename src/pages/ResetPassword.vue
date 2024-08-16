<template>
  <div class="bg-layout h-screen flex items-center justify-center">
    <form
      @submit.prevent="resetPassword"
      class="bg-white py-16 px-32 shadow-lg mb-20"
    >
      <div class="flex items-center justify-center mb-2">
        <img class="h-12" src="../assets/images/logo.png" alt="" />
      </div>

      <h1
        class="text-center font-bold text-secondaryColor text-xl uppercase mb-6"
      >
        Reset-Password
      </h1>

      <div class="mb-6">
        <label for="password" class="block font-bold mb-2">Password:</label>
        <input
          id="password"
          type="password"
          class="text-base rounded-sm border-secondaryColor shadow-md focus:outline-none focus:border-b py-2 px-10 block"
          v-model="password"
        />
      </div>

      <div class="flex items-center justify-center">
        <button
          class="border-4 mt-8 active:outline-none uppercase py-1 px-12 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

const password = ref("");
const route = useRoute();
const router = useRouter()
const resetToken = route.params.token;

const resetPassword = async () => {
  if (password.value === "") {
    toast.error("Please enter your password");
  } else {
    try {
      const response = await axios.put(
        `https://jobee-api-1.onrender.com/api/v1/password/reset/${resetToken}`,
        {
          password: password.value,
        }
      );
      if (response.status === 200) {
        toast("Password reset successfully", {
          autoClose: 2000,
        });
        router.push("/Login")
        
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.errMessage || "An error occurred";
      toast(errorMessage, {
        autoClose: 2000,
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
