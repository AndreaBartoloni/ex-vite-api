<script>

import { store } from "../store.js"
export default{

    name: "AppSearch", // assegnamo un nome al componente
    data() {
        return {
            store,
            
        }
    },
    methods: {
        search(){
            console.log(this.store.searchString);
            this.$emit("search");
        }
    },
    mounted() {
  
    }
}

</script>

<template>

    <input v-model="store.searchString" @keyup.enter="$emit('search')">
    <button @click="search">cerca</button>
</template>

<style scoped>

</style>