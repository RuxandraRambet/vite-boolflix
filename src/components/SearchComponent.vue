<script>
// import store
import { store } from '../store.js'
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <!-- search area -->
    <form @submit.prevent="search">
        <label for="search">Search</label>
        <!-- input -->
        <input type="text" id="search" v-model="store.searchKey">
        <!-- /input -->
        <!-- button -->
        <button @click="$emit('search')">Search</button>
        <!-- /button -->
    </form>
    <!-- /search area -->


   
</template>

<style scoped></style>