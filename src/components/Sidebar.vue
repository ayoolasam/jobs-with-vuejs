<template>

<ul class=" bg-white  shadow-lg absolute top-12 right-4">
  <RouterLink to="/myProfile">
    <li class="px-8 py-2 border-b border-gray hover:text-secondaryColor text-black-200 font-semibold uppercase">Profile</li>
  </RouterLink>

<li class="px-8 py-2 border-b border-gray font-semibold  hover:text-secondaryColor uppercase">Jobs Applied</li>
<li class="px-8 py-2 border-b border-gray font-semibold  hover:text-secondaryColor uppercase"> User-Settings</li>
<li class="px-8 py-2 border-b border-gray font-semibold   hover:text-secondaryColor uppercase">Subscriptions</li>
<li @click="logOut" class="px-8 py-2 border-b border-gray font-semibold  hover:text-secondaryColor uppercase">Log-Out</li>

</ul>

</template>

<script setup>
import useUserStore from '@/stores/UserStore';
import {useRouter} from 'vue-router'
const userStore = useUserStore();
const router = useRouter()


const logOut = async ()=> {
  userStore.logOut()
  router.push("/Login")
}
</script>

<style scoped>

</style>