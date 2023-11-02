<template>
    <div class="">
        <NavBar></NavBar>
        <!-- <StaticNavBar /> -->
        <ProfileSideNav />
        <div class="container mx-auto py-20 pl-80 pr-80">
            <div class="bg-white shadow-md rounded-lg p-6 flex items-center gap-y-40">
                <div class="mr-4">
                    <div class="flex flex-row gap-x-80 justify-between">
                        <div><img class="w-16 h-16 rounded-full object-cover" src="userProfile.profilePicture" alt="userProfile.name"></div>
                        <div><button class="bg-green text-white px-4 py-2 rounded-md mt-4 shadow-md hover:bg-green-600 transition duration-300 ease-in-out">Recommendations for you</button></div>
                    </div>
                <div>
                    <h1 class="text-2xl font-semibold mb-5">{{ userProfile.name }}</h1>
                    <div class="mb-2">
                        <span class="inline-block mr-5">
                            <p class="text-black-600">Mobile:</p>
                        </span>
                        <span class="inline-block">
                            <p class="text-gray-600">{{ userProfile.mobile }}</p>
                        </span>
                    </div> 
                    <div class="mb-2">
                        <span class="inline-block mr-5">
                            <p class="text-black-600">Email:</p>
                        </span>
                        <span class="inline-block">
                            <p class="text-gray-600">{{ userProfile.email }}</p>
                        </span>
                    </div> 
                    <div class="mb-3">
                        <span class="inline-block mr-5">
                            <p class="text-black-600">Address:</p>
                        </span>
                        <span class="inline-block mr-5">
                            <p class="text-gray-600">{{ userProfile.address }}</p>
                        </span>
                    </div> 
                    <span class="inline-block mb-5">
                            <p class="text-black-600">Your Favorites</p>
                        </span>
                    <div class="grid grid-cols-3 gap-4 gap-x-2">
                        
                        <div class="bg-gray-200 h-48 w-40 p-3 rounded-md shadow">
                        
                        Meal 1
                        </div>
                        <div class="bg-gray-200 h-48 w-40 p-4 rounded-md shadow">
                        
                        Meal 2
                        </div>
                        <div class="bg-gray-200 h-48 w-40 p-4 rounded-md shadow">
                        
                        Meal 3
                        </div>
                        
                    </div>
                </div>
                </div>

            </div>

        </div>
    </div>
    
  

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProfileSideNav from './ProfileSideNav.vue';
    import NavBar from '../utils/navBar-user.vue';

    
    export default defineComponent({
        components: {
    ProfileSideNav,
    NavBar
},
data(){
    return {
        userProfile:{
            name: "John Doe",
            mobile: '0123456789',
            email: 'john@ex.com',
            address: 'No.201, Park Road, Colombo 5.',

            profilePicture: 'https://tecdn.b-cdn.net/img/new/avatars/2.jpg',
        }
    }
}
    });

</script>