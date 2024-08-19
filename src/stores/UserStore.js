import axios from "axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {useRouter} from 'vue-router'


const useUserStore = defineStore("user", {
 
  state: () => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
    isLoading: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),
  actions: {
    async getUserDetails() {
      this.isLoading = true;
      const response = await axios.get(
        "https://jobee-api-1.onrender.com/api/v1/me",
        {
          withCredentials: true,
        }
      );
      const userDetails = response.data.user;
      this.user = userDetails;

      this.isAuthenticated = true;
      this.isLoading = false;
      localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem("isAuthenticated", "true");
    },

    async logOut() {
     
      try {
      
        const response = await axios.get(
          "https://jobee-api-1.onrender.com/api/v1/logout",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          toast("Logged out successfully", {
            autoClose: 2000,
          });
         
          this.isAuthenticated = false;
          this.user = null;

          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
       
        }
      }catch(err) {
        console.log(err);
      }
    },
  },
});

export default useUserStore;
