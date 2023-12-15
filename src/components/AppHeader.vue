<script>
//importazione componnente per la ricerca
import SearchComponent from './SearchComponent.vue';
// import store
import { store } from '../store.js'
// import libreria axios
import axios from 'axios';
export default {
  name: 'AppHeader',
    components: {
      SearchComponent,
    },
    data(){
      return {
        store,
      }
    },
    // metodo per fare la chiamata api
    methods: {
      search() {
        // ricerca movies
        axios.get(this.store.apiConfig.apiMovieUrl, {
          params: {
            api_key: store.apiConfig.apiKey,
            query: store.searchKey,
            language: store.searchLanguage,
          }
        }).then((response) => {
          this.store.movies = response.data.results;
        });

        // ricerca series
        axios.get(this.store.apiConfig.apiSeriesUrl, {
          params: {
            api_key: store.apiConfig.apiKey,
            query: store.searchKey,
            language: store.searchLanguage,
          }
        }).then((response) => {
          this.store.series = response.data.results;
        });
      },
    },


  }
</script>

<template>
  <header>
    <h1>Boolflix</h1>
    <SearchComponent @search="search" />
  </header>
</template>

<style scoped></style>
