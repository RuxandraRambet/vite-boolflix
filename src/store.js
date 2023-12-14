import { reactive } from "vue";

export const store = reactive({
    searchKey: '',
    movies: [],
    apiBaseUrl: 'https://api.themoviedb.org/3/search/movie?api_key=eed6b21a8af8cb0371253464e6991f9f'
})