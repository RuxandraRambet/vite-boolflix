<script>
import Card from './Card.vue';
import { store } from '../store.js'
export default {
  name: 'AppMain',
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
}
</script>

<template>
  <main>
    <ul>
      <h2>Movies</h2>
      <!-- movie list -->
      <li v-for="movie in store.movies">
        <!-- movie card -->
        <Card :title="movie.title" :originalTitle="movie.originale_title" :language="movie.original_language"
          :vote="movie.vote_average" />
      </li>
      <!-- /movie list -->
    </ul>

    <ul>
      <h2>TV Series</h2>
      <li v-for="serie in store.series">
        <!-- movie card -->
        <Card :title="serie.name" :originalTitle="serie.originale_name" :language="serie.original_language"
          :vote="serie.vote_average" />
      </li>

    </ul>
  </main>
</template>

<style scoped></style>
