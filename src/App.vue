<template>
    <!-- <HeaderComponent/> -->
    <newHeaderComp/>
    <router-view/>
    <FooterComponent/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/HeaderComponent.vue'
import newHeaderComp from './components/newHeaderComp.vue';
import FooterComponent from '@/components/FooterComponent.vue'
</script>