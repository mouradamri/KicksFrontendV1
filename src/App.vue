<template>
    <HeaderComponent/>
    <!-- <router-view/> -->
    <!-- <FooterComponent/> -->

    <mainComp/>

</template>


<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import mainComp from '@/components/mainComp.vue'


</script>a