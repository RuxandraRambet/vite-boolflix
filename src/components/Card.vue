<script>
export default {
    name: 'Card',
    props: ['poster', 'title', 'originalTitle', 'language', 'vote'],
}
</script>

<template>
    <div class="card-container">
        <div class="movie-poster">
            <img :src="poster" :alt="title">
        </div>
        <div class="movie-info">
            <div class="title">
                <h3>{{ title }}</h3>
            </div>
            <div class="original-title">
                <h4>{{ originalTitle }}</h4>
            </div>
            <div class="language">
                <p v-if="language === 'it'">
                    <img src="../assets/img/itflag.png" alt="It Flag">
                </p>
                <p v-else-if="language === 'en'">
                    <img src="../assets/img/ukflag.png" alt="UK Flag">
                </p>
                <p else>
                    {{ language }}
                </p>
            </div>
            <div class="vote">
                <p>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote" />
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
