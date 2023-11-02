<template>
    <div class="">
        <StaticNavBar />
        <ProfileSideNav />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProfileSideNav from './ProfileSideNav.vue';
    import StaticNavBar from './StaticNavBar.vue';
    
    export default defineComponent({
        components: {
    ProfileSideNav,
    StaticNavBar
}
    });

</script>