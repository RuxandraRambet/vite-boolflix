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
      <!-- movie list -->
      <li v-for="movie in store.movies">
        <!-- movie card -->
        <Card :title="movie.title" :originalTitle="movie.originale_title" :language="movie.original_language"
          :vote="movie.vote_average" />
      </li>
      <!-- /movie list -->
    </ul>
  </main>
</template>

<style scoped></style>
