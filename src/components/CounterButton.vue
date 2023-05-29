<template>
    <h3>{{ counter }}</h3>
    <button @click="counter--">Minus</button>
    <button @click="counter++">Plus</button>
    <button @click="counter=counter*2">Multiple</button>
    <button @click="counter=counter/2">Divide</button>
</template>


<script setup>

import { ref } from 'vue'

const counter = ref(0)

</script>
