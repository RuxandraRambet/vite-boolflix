import { reactive } from "vue";
import apiConfig from './apiConfig.js';
export const store = reactive({
    // valore vuoto per ricerca con v-model
    searchKey: '',
    // valore ricerca lingua
    searchLanguage : 'it-IT',
    // array vuoti per le chiamate api
    movies: [],
    series: [],
    // apiConfig che contiene apikey e url
    apiConfig,
})