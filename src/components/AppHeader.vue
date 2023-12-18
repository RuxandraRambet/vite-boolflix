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
  data() {
    return {
      store,
      errorMessage: '',
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
      }).catch((error) => {
        console.log(error.message);
        this.errorMessage = error.message;
        this.store.movies = [];
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
      }).catch((error) => {
        console.log(error.message);
        this.errorMessage = error.message;
        this.store.series = [];
      })
    },
  },


}
</script>

<template>
  <header>
    <nav class="container-fluid d-flex justify-content-between p-4">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="Boolflix Logo">
      </div>
      <SearchComponent @search="search" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  background-color: $headerbgcolor;
}

.logo {
  width: 100px;

  img {
    width: 100%;
    display: block;
  }
}
</style>
