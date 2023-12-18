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
      }).catch((error) => { //gestione messaggio errore
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
      }).catch((error) => { //gestione messaggio errore
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
      <!-- Logo -->
      <div class="left-side d-flex align-items-center">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="Boolflix Logo">
        </div>
        <ul class="d-flex pt-2 gap-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Tv Series</a></li>
          <li><a href="#">Original</a></li>
          <li><a href="#">New</a></li>
        </ul>
      </div>

      <!-- /Logo -->

      <!-- Search area component-->
      <SearchComponent @search="search" />
      <!-- /Search area component-->
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
a:hover {
  background-color: rgb(157, 34, 34);
  color: #f1f1f1;
  padding: 5px;
}
</style>
