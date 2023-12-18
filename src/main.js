import { createApp } from 'vue'
import App from './App.vue'
// style
import './assets/scss/general.scss';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faStar, emptyStar, faMagnifyingGlass)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
