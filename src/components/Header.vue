<template>
  <nav class="p-6 navi flex justify-between items-center shadow-md  ">
    <img class="h-10" src="../assets/images/logo.png" alt="logo" />

    <div class="navigation  flex ">
      <ul class="flex  list gap-10 text-secondaryColor  uppercase font-medium text-lg  ">
        <li class=" list_item hover:text-primaryColor ">Jobs</li>

        <RouterLink class="list_item" to="/">
          <li class=" list_item hover:text-primaryColor">Home</li>
        </RouterLink>
        <li class=" list_item hover:text-primaryColor ">Dashboard</li>
      </ul>
    </div>

    <div
      v-if="userStore.isAuthenticated"
      class="text-black flex items-center gap-4"
    >
    <Sidebar v-if="toggle"/>
      <h2 @click="toggler" class="font-bold italic text-xl uppercase cursor-pointer">{{ userStore?.user?.name }}</h2>
      <!-- <select
        v-model="selected"
        @change="handleChange"
        class="shadow-md active:outline-none font-semibold uppercase text-secondaryColor py-4 px-4 border-secondaryColor border-b"
      >
        <option value="Profile">
          <RouterLink to="/myProfile"> Profile </RouterLink>
        </option>

        <option value="Logout">LogOut</option>
      </select>
           
      <button  @click="logout" class="border-4 active:outline-none uppercase py-1 px-6 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor hover:text-white" >
        Logout
    </button> -->
    </div>

    <RouterLink to="login" class="link" v-else>
      <button
        class="border-4 active:outline-none uppercase py-1 px-6 rounded-md border-secondaryColor text-secondaryColor hover:bg-primaryColor"
      >
        Login
      </button>
    </RouterLink>
  </nav>
</template>

<script setup>
import useUserStore from "@/stores/UserStore";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Sidebar from "./Sidebar.vue";
const userStore = useUserStore();

const router = useRouter();
const selected = ref("Profile");
const toggle = ref(false)

userStore.getUserDetails();

const handleChange = () => {
  if (selected.value === "Logout") {
    try {
      userStore.logOut();
      router.push("/Login");
    } catch (err) {
      console.log(err);
    }
  }
};
const logout = ()=>{
  userStore.logOut();

}
const toggler = ()=> {
toggle.value = !toggle.value
}
</script>

<style scoped>
@media (max-width:640px ){
  .navi{
    display: flex;
    flex-direction: column;
    /* width:100%; */
  
    /* background-color: brown; */
    padding: 20px;
  }
  .list{
  width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* background-color: aqua; */
    gap:0;
    margin-top: 10px;
   
   
  }
  .list_item{
    width:100%;
    display: block;
    /* background: green; */
    padding: 10px;
    
  }
  .list_item:hover{
    background-color:#ba265d;
    color:#fff;
  }
  .link{
    margin-top: 10px;
  }
}
</style>
