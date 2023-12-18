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
    <form @submit.prevent="search" class="d-flex align-items-center">
        <label for="search" class="visually-hidden">Search</label>
        <!-- input -->
        <input type="text" id="search" class="form-control me-3" v-model="store.searchKey" @keyup.enter="$emit('search')">
        <!-- /input -->
        <!-- button -->
       <font-awesome-icon icon="fa-solid fa-magnifying-glass" role="button"  @click="$emit('search')" />
        <!-- /button -->
    </form>
    <!-- /search area -->


   
</template>

<style scoped>
    .fa-magnifying-glass {
        font-size: 20px;
        color: #666666;
    }
</style>