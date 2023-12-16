<script>
import Card from './Card.vue';
// import store
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
  methods: {
    getVote(vote){
      return  Math.ceil(vote / 2);;
    },
  },
}
</script>

<template>
  <main>
    <!-- Movies area-->
    <div v-if="store.movies.length">
      <h2>Movies</h2>
      <ul>
        <li v-for="movie in store.movies">
          <!-- movie card -->
          <Card :poster="store.apiConfig.urlMoviePoster + movie.poster_path" :title="movie.title"
            :originalTitle="movie.originale_title" :language="movie.original_language" :vote="getVote(movie.vote_average)" />
        </li>
      </ul>
    </div>
    <!-- Movies area-->

    <!-- Series area -->
    <div v-if="store.series.length">
      <h2>TV Series</h2>
      <ul>
        <li v-for="serie in store.series">
          <!-- serie card -->
          <Card :poster="store.apiConfig.urlMoviePoster + serie.poster_path" :title="serie.name"
            :originalTitle="serie.originale_name" :language="serie.original_language" :vote="getVote(serie.vote_average)" />
        </li>
      </ul>
    </div>
    <!-- /Series area -->
  </main>
</template>

<style scoped></style>
